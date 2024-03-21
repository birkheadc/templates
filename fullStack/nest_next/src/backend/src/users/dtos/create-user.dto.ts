import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import configuration from '../../config/configuration'
import { EmailAddress } from '../../types/emailAddress/emailAddress';

export class CreateUserRequestDto {
  @IsNotEmpty()
  emailVerificationToken: string = '';

  @IsEmail()
  emailAddress: EmailAddress = '';

  @IsNotEmpty()
  @MinLength(configuration().users.validation.displayName.minLength)
  @MaxLength(configuration().users.validation.displayName.maxLength)
  @Matches(configuration().users.validation.displayName.matches)
  displayName: string = '';

  @IsNotEmpty()
  preferredLanguage: string = '';

  @IsNotEmpty()
  @MinLength(configuration().users.validation.password.minLength)
  @MaxLength(configuration().users.validation.displayName.maxLength)
  password: string = '';
}