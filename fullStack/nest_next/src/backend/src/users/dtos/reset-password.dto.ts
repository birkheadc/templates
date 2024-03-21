import { IsNotEmpty, IsString } from "class-validator";

export class ResetPasswordRequestDto {
  @IsNotEmpty()
  @IsString()
  emailAddress: string = '';
  
  language: string = '';
  verifyUrl: string = '';
}