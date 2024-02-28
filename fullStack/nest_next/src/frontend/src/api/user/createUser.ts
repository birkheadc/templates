import { CreateUserRequest } from "../../types/requests/createUser/createUserRequest";
import { Result } from "../../types/result/result";
import { ResultMessage } from "../../types/result/resultMessage";
import utils from "../../utils";

export default async function createUser(request: CreateUserRequest): Promise<Result> {
  const result = await utils.fetchResult({
    route: '/users',
    successMessage: ResultMessage.CREATE_USER_SUCCESS,
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