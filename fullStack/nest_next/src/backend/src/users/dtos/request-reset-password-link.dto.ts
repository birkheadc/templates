import { IsNotEmpty, IsString } from "class-validator";
import { EmailAddress } from "../../types/emailAddress/emailAddress";

export class RequestResetPasswordLinkRequestDto {
  @IsNotEmpty()
  @IsString()
  emailAddress: EmailAddress = '';
  
  language: string = '';

  @IsNotEmpty()
  @IsString()
  resetUrl: string = '';
}