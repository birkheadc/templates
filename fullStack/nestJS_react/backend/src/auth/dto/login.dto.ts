export class LoginDto {
  username: string;
  password: string;

  static fromBasicAuth(basicAuth: string): LoginDto {
    const decoded = Buffer.from(basicAuth.substring(5), 'base64').toString('ascii')
    const creds = decoded.split(':');    
    const dto = new LoginDto();
    dto.username = creds[0];
    dto.password = creds[1];
    return dto;
  }
}