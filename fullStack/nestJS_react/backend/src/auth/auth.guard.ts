import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token: string | undefined = this.extractTokenFromRequest(request);

    if (token == null) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

    try {
      await this.jwtService.verifyAsync(token);
    } catch {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return true;
  }

  private extractTokenFromRequest(request: Request): string | undefined {
    const [ type, token ] = request.headers.authorization?.split(' ') ?? [];
    if (type === 'Bearer') return token;
    return undefined;
  }
}
