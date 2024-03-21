import { ResetPasswordRequest } from "../../types/requests/resetPassword/resetPassword";
import { Result } from "../../types/result/result";
import { ResultMessage } from "../../types/result/resultMessage";
import utils from "../../utils";

export default async function resetPassword(request: ResetPasswordRequest): Promise<Result> {
  console.log('Submit this:', { request });
  const result = utils.fetchResult({
    route: '/users/reset-password',
    successMessage: ResultMessage.PASSWORD_RESET_SUCCESS,
    init: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }
  });
  return result;
}