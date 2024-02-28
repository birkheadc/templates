export class EmailVerificationTokenPayload {
  sub: string | undefined = undefined;

  static fromJson(json: any): EmailVerificationTokenPayload {
    const token = new EmailVerificationTokenPayload();

    token.sub = json.sub ?? undefined;

    return token;
  }
}