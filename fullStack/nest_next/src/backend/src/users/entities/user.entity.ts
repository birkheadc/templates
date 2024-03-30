import { hashSync } from "bcrypt";
import { CreateUserRequestDto } from "../dtos/create-user.dto";
import { v4 as uuid } from 'uuid';
import { UserPreferences } from "./userPreferences.entity";
import { EmailAddress } from "../../types/emailAddress/emailAddress";
 
export class User {
  id: string = '';
  emailAddress: EmailAddress = '';
  password: string = '';
  displayName: string = '';
  preferences: UserPreferences = new UserPreferences();

  static fromDynamoDBObject(data: any): User {
    const user = new User();

    user.id = data.id?.S ?? "";
    user.emailAddress = data.emailAddress?.S ?? "";
    user.password = data.password?.S ?? "";
    user.displayName = data.displayName?.S ?? "";
    user.preferences = UserPreferences.fromDynamoDBObject(data.preferences);

    return user;
  }

  static fromCreateUserRequestDto(dto: CreateUserRequestDto): User {
    const user = new User();

    user.id = uuid();
    user.emailAddress = dto.emailAddress;
    user.displayName = dto.displayName;
    const hash = hashSync(dto.password, 10);
    user.password = hash;
    user.preferences = UserPreferences.fromCreateUserRequestDto(dto);
    return user;
  }
}