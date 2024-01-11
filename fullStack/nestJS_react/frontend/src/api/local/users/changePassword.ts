import { Result } from "../../../types/result/result";
import { ChangePasswordRequest } from "../../../types/settings/changePassword";

export default async function changePassword(token: string | null | undefined, request: ChangePasswordRequest): Promise<Result> {
  return Result.Fail().WithMessage('local login does not use authentication, so there is no password to change');
}