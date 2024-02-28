export type CreateUserRequest = {
  emailVerificationToken: string;
  emailAddress: string;
  password: string;
}