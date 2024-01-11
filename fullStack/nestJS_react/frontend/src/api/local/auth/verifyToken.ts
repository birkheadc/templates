import { Result } from "../../../types/result/result";

export default async function verifyToken(token: string): Promise<Result> {
  return Result.Succeed().WithMessage('local login does not use authentication');
}