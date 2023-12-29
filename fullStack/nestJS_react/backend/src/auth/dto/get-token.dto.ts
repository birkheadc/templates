export class GetTokenDto {
  id: string;
  password: string;

  static fromBasicAuth(basicAuth: string): GetTokenDto {
    const decoded = Buffer.from(basicAuth.substring(5), 'base64').toString('ascii')
    const creds = decoded.split(':');    
    const dto = new GetTokenDto();
    dto.id = creds[0];
    dto.password = creds[1];
    return dto;
  }
}