import { Result } from "@/types/result/result";
import { SessionToken } from "@/types/session/sessionToken/sessionToken";
import { User } from "@/types/user/user";
import utils from "@/utils";

export default async function getUser(token: SessionToken): Promise<Result<User>> {
  const result = await utils.fetchResult({
    route: '/users/me',
    builder: async (response: Response) => await User.fromResponse(response),
    init: {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token.value}`
      }
    }
  });
  return result;
}