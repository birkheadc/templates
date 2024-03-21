import { EmailAddress } from "../../emailAddress/emailAddress";

export type LoginCredentials = {
  emailAddress: EmailAddress;
  password: string;
}