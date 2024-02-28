import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { User } from "../entities/user.entity";

export class UserDynamoDBObject implements Record<string, AttributeValue> {
  [x: string]: AttributeValue;
  id: { S: string };
  emailAddress: { S: string };
  password: { S: string };

  static fromEntity(entity: User): UserDynamoDBObject {
    return {
      id: {
        S: entity.id
      },
      emailAddress: {
        S: entity.emailAddress
      },
      password: {
        S: entity.password
      }
    }
  }
}