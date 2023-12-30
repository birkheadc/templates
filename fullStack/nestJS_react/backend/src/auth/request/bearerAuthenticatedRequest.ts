import { Request } from "express";
import { TokenPayload } from "../payload/tokenPayload";

export type BearerAuthenticatedRequest = Request & { user: TokenPayload }