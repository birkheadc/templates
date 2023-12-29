import { AttributeValue } from "@aws-sdk/client-dynamodb";

export class User {
  id: string;
  username: string;
  password: string;

  static fromDynamoDBObject(data: any): User {
    const user = new User();

    user.id = data.id?.S ?? "";
    user.username = data.username?.S ?? "";
    user.password = data.password?.S ?? "";

    return user;
  }

  static toItemObject(user: User): Record<string, AttributeValue> {
    return {
      id: {
        S: user.id
      },
      username: {
        S: user.username
      },
      password: {
        S: user.password
      }
    }
  }
}