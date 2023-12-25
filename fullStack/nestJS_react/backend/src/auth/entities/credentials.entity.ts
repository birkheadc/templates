export class Credentials {
  id: string;
  password: string;

  static fromDynamoDBObject(data: any): Credentials {
    const credentials = new Credentials();

    credentials.id = data.id.S ?? "";
    credentials.password = data.password.S ?? "";

    return credentials;
  }
}