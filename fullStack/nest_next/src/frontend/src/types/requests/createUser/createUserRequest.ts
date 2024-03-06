export type CreateUserRequest = {
  emailVerificationToken: string;
  emailAddress: string;
  displayName: string;
  preferredLanguage: string;
  password: string;
}