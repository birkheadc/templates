import { IsNotEmpty } from "class-validator";
import { UserPreferences } from "../entities/userPreferences.entity";

export class UpdatePreferencesRequestDto {
  @IsNotEmpty()
  preferences: UserPreferences;
}