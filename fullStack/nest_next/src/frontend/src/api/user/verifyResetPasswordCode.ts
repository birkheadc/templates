import { EmailAddress } from "../../types/emailAddress/emailAddress";
import { verifyResetPasswordCode } from "../../types/requests/resetPassword/verifyResetPasswordCode";
import { Result } from "../../types/result/result";
import utils from "../../utils";

export default async function verifyResetPasswordCode(request: verifyResetPasswordCode): Promise<Result<EmailAddress>> {
  const result = await utils.fetchResult({
    route: '/users/verify-reset-password-code',
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