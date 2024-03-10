import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { UserPreferences } from "../entities/userPreferences.entity";

export class UserPreferencesDynamoDBObject implements Record<string, AttributeValue> {
  [x: string]: AttributeValue;
  language: { S: string };

  static fromEntity(entity: UserPreferences): UserPreferencesDynamoDBObject {
    const dynamoDBObject = new UserPreferencesDynamoDBObject();

    dynamoDBObject.language = { S: entity.language };

    return dynamoDBObject;
  }
}