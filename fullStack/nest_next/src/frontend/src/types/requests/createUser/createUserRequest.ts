import { EmailAddress } from "../../emailAddress/emailAddress";

export type CreateUserRequest = {
  emailVerificationToken: string;
  emailAddress: EmailAddress;
  displayName: string;
  preferredLanguage: string;
  password: string;
}