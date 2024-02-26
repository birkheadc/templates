import { VerifyEmailRequest } from "../../types/requests/verifyEmail/verifyEmailRequest";
import { Result } from "../../types/result/result";
import utils from "../../utils";

export default async function verify(request: VerifyEmailRequest): Promise<Result<string>> {
  const result = await utils.fetchResult({
    route: '/users/verify',
    builder: async (response: Response) => await response.text(),
    init: {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  });
  return result;
}