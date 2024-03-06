import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import configuration from '../../config/configuration'

export class CreateUserRequestDto {
  @IsNotEmpty()
  emailVerificationToken: string = '';

  @IsEmail()
  emailAddress: string = '';

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