import { Request } from "express";
import { UserOmitPassword } from "../entities/userOmitPassword";

export type BearerAuthenticatedRequest = Request & { user: UserOmitPassword }