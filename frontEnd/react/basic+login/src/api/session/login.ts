import { LoginCredentials } from "../../types/credentials/loginCredentials";
import { Result } from "../../types/result/result";

export default async function login(credentials: LoginCredentials):Promise<Result<string>> {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  })
  return Result.Succeed().WithBody("token");
  // return Result.Fail().WithError({ message:'Not yet implemented' });
}