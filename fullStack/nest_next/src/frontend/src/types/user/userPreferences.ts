export class UserPreferences {
  language: string = '';

  static fromJson(json: any): UserPreferences {
    const userPreferences = new UserPreferences();

    try {
      userPreferences.language = json.language ?? '';
    } catch {
      return userPreferences;
    }

    return userPreferences;
  }
}