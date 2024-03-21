import { EmailAddress } from "../../types/emailAddress/emailAddress";
import { VerifyEmailRequest } from "../../types/requests/verifyEmail/verifyEmailRequest";
import { Result } from "../../types/result/result";
import utils from "../../utils";

export default async function verifyEmailCode(request: VerifyEmailRequest): Promise<Result<EmailAddress>> {
  const result = await utils.fetchResult({
    route: '/users/verify-email-code',
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