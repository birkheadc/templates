import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import configuration from "../../config/configuration";

export class ChangePasswordRequestDto {
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(configuration().users.validation.password.minLength)
  @MaxLength(configuration().users.validation.displayName.maxLength)
  newPassword: string;
}