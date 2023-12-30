import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SecretsConfig } from './secrets.config';
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

@Injectable()
export class SecretsService {

  constructor(private readonly secret: { [ key: string]: string | undefined }) { }

  static async createAsync(config: SecretsConfig): Promise<SecretsService> {
    const client = new SecretsManagerClient({
      region: config.region
    });

    try {
      const command = new GetSecretValueCommand({
        SecretId: config.secretId
      });
      const response = await client.send(command);
      const secrets = response.SecretString;
      if (secrets == null) throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
      const secret = JSON.parse(secrets);
      return new SecretsService(secret);
    } catch (error) {
      console.log('Error while fetching secret key: ', error);
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  getSecret(secretName: string | undefined): string | undefined {
    if (secretName == null) return undefined;
    return this.secret[secretName];
  }
}
