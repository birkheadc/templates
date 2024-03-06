export class SessionToken {
  value: string = '';

  constructor(value?: string) {
    this.value = value ?? '';
  }

  static async fromResponse(response: Response): Promise<SessionToken> {
    const sessionToken = new SessionToken();
    const value = await response.text();
    sessionToken.value = value;
    return sessionToken;
  }
}