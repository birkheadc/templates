import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { User } from "../entities/user.entity";
import { UserPreferencesDynamoDBObject } from "./UserPreferencesDynamoDBObject";

export class UserDynamoDBObject implements Record<string, AttributeValue> {
  [x: string]: AttributeValue;
  id: { S: string };
  emailAddress: { S: string };
  password: { S: string };
  displayName: { S: string };
  preferences: { M: UserPreferencesDynamoDBObject };

  static fromEntity(entity: User): UserDynamoDBObject {
    const dynamoDBObject = new UserDynamoDBObject();

    dynamoDBObject.id = { S: entity.id };
    dynamoDBObject.emailAddress = { S: entity.emailAddress };
    dynamoDBObject.password = { S: entity.password };
    dynamoDBObject.displayName = { S: entity.displayName };
    dynamoDBObject.preferences = { M: UserPreferencesDynamoDBObject.fromEntity(entity.preferences)};

    console.log({ entity, dynamoDBObject, preferences: JSON.stringify(dynamoDBObject.preferences) });

    return dynamoDBObject;
  }
}