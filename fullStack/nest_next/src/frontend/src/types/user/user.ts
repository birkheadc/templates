import { EmailAddress } from "../emailAddress/emailAddress";
import { UserPreferences } from "./userPreferences"

export class User {
  id: string = '';
  emailAddress: EmailAddress = '';
  displayName: string = '';
  preferences: UserPreferences = new UserPreferences();

  static async fromResponse(response: Response): Promise<User> {
    const user = new User();

    try {
      const data = await response.json();
      user.id = data.id ?? '';
      user.emailAddress = data.emailAddress ?? '';
      user.displayName = data.displayName ?? '';
      user.preferences = UserPreferences.fromJson(data.preferences);
    } catch {
      return user;
    }


    return user;
  }
}