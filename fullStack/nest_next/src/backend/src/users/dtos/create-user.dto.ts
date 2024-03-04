export class CreateUserRequestDto {
  emailVerificationToken: string = '';
  emailAddress: string = '';
  displayName: string = '';
  preferredLanguage: string = '';
  password: string = '';
}