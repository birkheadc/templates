import { User } from "../../users/entities/user.entity";

export type UserOmitPassword = Omit<User, 'password'>