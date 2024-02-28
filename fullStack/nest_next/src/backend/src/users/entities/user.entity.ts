import { hashSync } from "bcrypt";
import { CreateUserRequestDto } from "../dtos/create-user.dto";
import { v4 as uuid } from 'uuid';
 
export class User {
  id: string;
  emailAddress: string;
  password: string;

  static fromDynamoDBObject(data: any): User {
    const user = new User();
    console.log(`Getting user from data:`, {data});

    user.id = data.id?.S ?? "";
    user.emailAddress = data.emailAddress?.S ?? "";
    user.password = data.password?.S ?? "";

    return user;
  }

  static fromCreateUserRequestDto(dto: CreateUserRequestDto): User {
    const user = new User();

    user.id = uuid();
    user.emailAddress = dto.emailAddress;
    const hash = hashSync(dto.password, 10);
    user.password = hash;
    return user;
  }
}