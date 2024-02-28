export class CreateUserRequestDto {
  emailVerificationToken: string = '';
  emailAddress: string = '';
  preferredLanguage: string = '';
  password: string = '';
}