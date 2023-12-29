// import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { Request } from 'express';
// import { JwtService } from '@nestjs/jwt';
// import { AuthenticatedRequest } from './request/authenticatedRequest';
// import { TokenPayload } from './payload/tokenPayload';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private readonly jwtService: JwtService) { }

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request: AuthenticatedRequest = context.switchToHttp().getRequest();
//     const token: string | undefined = this.extractTokenFromRequest(request);

//     if (token == null) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

//     try {
//       const payload: TokenPayload = await this.jwtService.verifyAsync(token);
//       request.user = payload;
//     } catch (error) {
//       console.log('Error while authenticating request: ', error);
//       throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
//     }
//     return true;
//   }

//   private extractTokenFromRequest(request: Request): string | undefined {
//     const [ type, token ] = request.headers.authorization?.split(' ') ?? [];
//     if (type === 'Bearer') return token;
//     return undefined;
//   }
// }
