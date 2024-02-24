import { Result, ResultMessage } from "../../types/result/result";
import utils from "../../utils";

export default async function register(request: { emailAddress: string }): Promise<Result> {
  const result = await utils.fetchResult({
    route: '/users/register',
    successMessage: ResultMessage.REGISTRATION_EMAIL_SENT,
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