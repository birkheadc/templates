import { Request } from "express";
import { UserOmitPassword } from "../entities/userOmitPassword";

export type BasicAuthenticatedRequest = Request & { user: UserOmitPassword }