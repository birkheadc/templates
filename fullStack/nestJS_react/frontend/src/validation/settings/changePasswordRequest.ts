import config from "../../config";
import { Result, ResultError } from "../../types/result/result";
import { ChangePasswordRequest } from "../../types/settings/changePassword";

export default function changePasswordRequest(item: ChangePasswordRequest): Result {
  const passwordValidationConfig = config.validation.settings.password;

  const minChars = passwordValidationConfig.minChars;
  const maxChars = passwordValidationConfig.maxChars;
  
  const errors: ResultError[] = [];

  if (item.password !== item.confirm) errors.push({ field: 'confirm', message: 'Does not match.' });
  if (item.password.length < minChars) errors.push({ field: 'password', message: `Must be at least ${minChars} characters.` });
  if (item.password.length > maxChars) errors.push({ field: 'password', message: `Must be at most ${maxChars} characters.` });

  return errors.length > 0 ? Result.Fail().WithErrors(errors) : Result.Succeed();
}