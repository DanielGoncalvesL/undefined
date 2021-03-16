import FakeUserRepository from '@modules/users/repositories/fakes/FakeUserRepository';
import AppError from '@shared/errors/AppError';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import ResetPasswordService from '@modules/users/services/ResetPasswordService';
import FakeUsersTokensRepository from '@modules/users/repositories/fakes/FakeUsersTokensRepository';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let fakeUsersTokensRepository: FakeUsersTokensRepository;
let resetPasswordService: ResetPasswordService;

describe('ResetPassword', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeUsersTokensRepository = new FakeUsersTokensRepository();
    resetPasswordService = new ResetPasswordService(
      fakeUserRepository, fakeUsersTokensRepository, fakeHashProvider,
    );
  });

  it('should be able to reset a password', async () => {
    const user = await fakeUserRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: '123456',
    });

    const { token } = await fakeUsersTokensRepository.generate(user.id);

    const generateHash = jest.spyOn(fakeHashProvider, 'generateHash');

    await resetPasswordService.execute({
      token,
      password: '123123',
    });

    const updatedUser = await fakeUserRepository.findById(user.id);

    expect(generateHash).toHaveBeenCalledWith('123123');
    expect(updatedUser?.password).toBe('123123');
  });

  it('should not be able to reset a password without an existing user token', async () => {
    await fakeUserRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: '123456',
    });

    await expect(resetPasswordService.execute({
      token: 'no-existing-user-token',
      password: '123123',
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to reset a password without an existing user', async () => {
    const { token } = await fakeUsersTokensRepository.generate('no-existing-user-id');

    await expect(resetPasswordService.execute({
      token,
      password: '123456',
    })).rejects.toBeInstanceOf(AppError);
  });
});
