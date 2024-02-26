import { ResultMessage } from "@/types/result/resultMessage";
import { Result } from "../../types/result/result";
import utils from "../../utils";
import { RegisterUserRequest } from "../../types/requests/register/registerUserRequest";

export default async function register(request: Omit<RegisterUserRequest, 'verifyUrl'>): Promise<Result> {
  const verifyUrl = getVerifyUrl(request.language);
  const result = await utils.fetchResult({
    route: '/users/register',
    successMessage: ResultMessage.REGISTRATION_EMAIL_SENT,
    init: {
      method: 'POST',
      body: JSON.stringify({...request, verifyUrl}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  });
  return result;
}

function getVerifyUrl(language: string): string {
  return `${window.location.origin}/${language}/verify`;
}