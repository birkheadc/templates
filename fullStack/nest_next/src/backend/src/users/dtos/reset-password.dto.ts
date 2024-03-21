import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import configuration from "../../config/configuration";
import { EmailAddress } from "../../types/emailAddress/emailAddress";

export class ResetPasswordRequestDto {
  @IsNotEmpty()
  @IsString()
  resetToken: string = '';

  @IsNotEmpty()
  @IsString()
  emailAddress: EmailAddress = '';

  @IsNotEmpty()
  @MinLength(configuration().users.validation.password.minLength)
  @MaxLength(configuration().users.validation.displayName.maxLength)
  password: string = '';
}