import { EmailAddress } from "../../emailAddress/emailAddress";

export type ResetPasswordRequest = {
  resetToken: string;
  emailAddress: EmailAddress;
  password: string;
}