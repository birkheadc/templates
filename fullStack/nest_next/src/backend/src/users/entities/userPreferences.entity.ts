import { CreateUserRequestDto } from "../dtos/create-user.dto";

export class UserPreferences {
  language: string = '';

  static fromDynamoDBObject(data: any): UserPreferences {
    const userPreferences = new UserPreferences();

    userPreferences.language = data?.M?.language?.S ?? 'en';

    return userPreferences;
  }

  static fromCreateUserRequestDto(dto: CreateUserRequestDto): UserPreferences {
    const userPreferences = new UserPreferences();

    userPreferences.language = dto.preferredLanguage;

    return userPreferences;
  }
}