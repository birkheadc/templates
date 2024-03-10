import { ChangePasswordRequest } from "../../types/requests/changePassword/changePasswordRequest";
import { Result } from "../../types/result/result";
import { SessionToken } from "../../types/session/sessionToken/sessionToken";
import utils from "../../utils";

export default async function changePassword(token: SessionToken, request: ChangePasswordRequest): Promise<Result> {
  const result = await utils.fetchResult({
    route: '/users/me/change-password',
    init: {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token.value}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }
  });
  return result;
}