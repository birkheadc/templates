import { RequestResetPasswordLinkRequest } from "../../types/requests/resetPassword/requestResetPasswordLink";
import { Result } from "../../types/result/result";
import { ResultMessage } from "../../types/result/resultMessage";
import utils from "../../utils";

export default async function requestResetPasswordLink(request: Omit<RequestResetPasswordLinkRequest, 'resetUrl'>): Promise<Result> {
  const resetUrl = getResetUrl(request.language);
  const result = utils.fetchResult({
    route: '/users/request-reset-password-link',
    successMessage: ResultMessage.ACCOUNT_RECOVERY_EMAIL_SENT,
    init: {
      method: 'POST',
      body: JSON.stringify({ ...request, resetUrl }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  });
  return result;
}

function getResetUrl(language: string): string {
  return `${window.location.origin}/${language}/account-recovery`
}