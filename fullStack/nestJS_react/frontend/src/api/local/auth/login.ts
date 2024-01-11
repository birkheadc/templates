import { LoginCredentials } from "../../../types/credentials/loginCredentials";
import { Result } from "../../../types/result/result";

export default async function login(credentials: LoginCredentials):Promise<Result<string>> {
  return Result.Succeed().WithBody('local').WithMessage('local login does not use authentication');
}