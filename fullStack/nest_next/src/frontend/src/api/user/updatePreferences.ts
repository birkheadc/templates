import { UpdatePreferencesRequest } from "../../types/requests/updatePreferences/updatePreferencesRequest";
import { Result } from "../../types/result/result";
import { SessionToken } from "../../types/session/sessionToken/sessionToken";
import utils from "../../utils";

export default async function updatePreferences(token: SessionToken, request: UpdatePreferencesRequest): Promise<Result> {
  const result = utils.fetchResult({
    route: "/users/me/preferences",
    init: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      },
      body: JSON.stringify(request)
    }
  });
  return result;
}