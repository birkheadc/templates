import { UserPreferences } from "./userPreferences"

export type User = {
  displayName: string,
  emailAddress: string,
  preferences: UserPreferences
}