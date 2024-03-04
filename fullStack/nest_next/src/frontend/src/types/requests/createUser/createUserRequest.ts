export type CreateUserRequest = {
  emailVerificationToken: string;
  emailAddress: string;
  displayName: string;
  password: string;
}