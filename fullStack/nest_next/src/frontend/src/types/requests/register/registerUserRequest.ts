import { EmailAddress } from "../../emailAddress/emailAddress";

export type RegisterUserRequest = {
  emailAddress: EmailAddress;
  language: string;
  verifyUrl: string;
}