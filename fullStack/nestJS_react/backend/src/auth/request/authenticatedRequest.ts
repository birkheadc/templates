import { Request } from "express";
import { TokenPayload } from "../payload/tokenPayload";

export type AuthenticatedRequest = Request & { user: TokenPayload }