export class SessionToken {
  value: string = '';

  static fromJSON(json: any): SessionToken {
    const sessionToken = new SessionToken();
    sessionToken.value = json.value ?? '';
    return sessionToken;
  }
}