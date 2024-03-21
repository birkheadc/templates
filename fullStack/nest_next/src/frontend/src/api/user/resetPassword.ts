import { ResetPasswordRequest } from "../../types/requests/resetPassword/resetPasswordRequest";
import { Result } from "../../types/result/result";
import { ResultMessage } from "../../types/result/resultMessage";

export default async function resetPassword(request: Omit<ResetPasswordRequest, 'resetUrl'>): Promise<Result> {
  return Result.Fail().WithMessage(ResultMessage.NOT_YET_IMPLEMENTED);
}