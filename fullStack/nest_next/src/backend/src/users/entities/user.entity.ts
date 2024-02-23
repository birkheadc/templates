import { AttributeValue } from "@aws-sdk/client-dynamodb";

export class User {
  id: string;
  emailAddress: string;
  password: string;

  static fromDynamoDBObject(data: any): User {
    const user = new User();
    console.log(`Getting user from data:`, {data});

    user.id = data.id?.S ?? "";
    user.emailAddress = data.emailAddress?.S ?? "";
    user.password = data.password?.S ?? "";

    return user;
  }

  static toItemObject(user: User): Record<string, AttributeValue> {
    return {
      id: {
        S: user.id
      },
      emailAddress: {
        S: user.emailAddress
      },
      password: {
        S: user.password
      }
    }
  }
}