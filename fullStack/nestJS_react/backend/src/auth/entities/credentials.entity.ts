import { AttributeValue } from "@aws-sdk/client-dynamodb";

export class Credentials {
  id: string;
  password: string;

  static fromDynamoDBObject(data: any): Credentials {
    const credentials = new Credentials();

    credentials.id = data.id?.S ?? "";
    credentials.password = data.password?.S ?? "";

    return credentials;
  }

  static toItemObject(credentials: Credentials): Record<string, AttributeValue> {
    return {
      id: {
        S: credentials.id
      },
      password: {
        S: credentials.password
      }
    }
  }
}