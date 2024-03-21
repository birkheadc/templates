import { EmailAddress } from "../../types/emailAddress/emailAddress";

export class RegisterUserRequestDto {
  emailAddress: EmailAddress = '';
  language: string = '';
  verifyUrl: string = '';
}