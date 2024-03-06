import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserRequestDto {
  @IsNotEmpty()
  emailVerificationToken: string = '';

  @IsEmail()
  emailAddress: string = '';

  @IsNotEmpty()
  displayName: string = '';

  @IsNotEmpty()
  preferredLanguage: string = '';

  @IsNotEmpty()
  password: string = '';
}