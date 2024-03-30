import { Test } from "@nestjs/testing"
import { UsersService } from "./users.service";
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
import { UsersRepository } from "./users.repository";
import { User } from "./entities/user.entity";
import { ChangePasswordRequestDto } from "./dtos/change-password.dto";
import { MailService } from "../mail/mail.service";

const moduleMocker = new ModuleMocker(global);

describe('UsersService', () => {

  let sut: UsersService;
  let repository: UsersRepository;
  let mailService: MailService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [ UsersService ]
    }).useMocker((token) => {
      if (typeof token === 'function') {
        const mockMetadata = moduleMocker.getMetadata(token) as MockFunctionMetadata<any, any>;
        const Mock = moduleMocker.generateFromMetadata(mockMetadata);
        return new Mock();
      }
    }).compile();

    sut = moduleRef.get(UsersService);
    repository = moduleRef.get(UsersRepository);
    mailService = moduleRef.get(MailService);
  });

  describe('changePassword', () => {
    it('should throw when user password is empty', async () => {
      expect(async () => {
        await sut.changePassword(new User(), new ChangePasswordRequestDto());
      }).rejects.toThrow("data and hash arguments required");
    })
    it('should throw when password current password is incorrect', async () => {
      expect(async () => {
        const user = User.fromCreateUserRequestDto({
          emailVerificationToken: "",
          emailAddress: "test@test.test",
          displayName: "test",
          preferredLanguage: "test",
          password: "password"
        });
        const dto: ChangePasswordRequestDto = {
          password: "wrongpassword",
          newPassword: "newpassword"
        }
        await sut.changePassword(user, dto);
      }).rejects.toThrow("Unauthorized");
    });
    it('should call putUser on the repository with a new User whose only updated property is password', async () => {
      const user = User.fromCreateUserRequestDto({
        emailVerificationToken: "",
        emailAddress: "test@test.test",
        displayName: "test",
        preferredLanguage: "test",
        password: "password"
      });
      const dto: ChangePasswordRequestDto = {
        password: "password",
        newPassword: "newpassword"
      }

      await sut.changePassword(user, dto);

      expect(repository.putUser).not.toHaveBeenCalledWith(user);
      expect(repository.putUser).toHaveBeenCalledWith({...user, password: expect.any(String)});
    });
  });

  describe('registerNewUser', () => {
    it('should call sendSomeoneTriedToUseYourAddressEmail on mailService when mail address is in use', async () => {
      jest.spyOn(repository, 'getUserByEmailAddress').mockImplementation(() => Promise.resolve(new User()));

      await sut.registerNewUser({
        emailAddress: "",
        language: "",
        verifyUrl: ""
      });

      expect(mailService.sendSomeoneTriedToUseYourAddressEmail).toHaveBeenCalled();
      expect(mailService.sendVerificationEmail).not.toHaveBeenCalled();
    });
    it('should call sendVerificationEmail on mailService when mail address is not in use', async () => {
      jest.spyOn(repository, 'getUserByEmailAddress').mockImplementation(() => Promise.resolve(null));

      await sut.registerNewUser({
        emailAddress: "",
        language: "",
        verifyUrl: ""
      });

      expect(mailService.sendSomeoneTriedToUseYourAddressEmail).not.toHaveBeenCalled();
      expect(mailService.sendVerificationEmail).toHaveBeenCalled();
    })
  })
})