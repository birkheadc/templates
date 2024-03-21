import { EmailAddress } from "../../emailAddress/emailAddress";

export type RequestResetPasswordLinkRequest = {
  emailAddress: EmailAddress;
  language: string;
  resetUrl: string;
}