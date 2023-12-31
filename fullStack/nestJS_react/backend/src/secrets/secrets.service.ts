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
      const fullSecret = JSON.parse(secrets);
      const secret: { [key: string]: string } = {};
      config.secretNames.forEach(secretName => {
        if (secretName) secret[secretName] = fullSecret[secretName];
      });
      return new SecretsService(secret);
    } catch (error) {
      console.log('Error while fetching secret key: ', error);
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  static createDev(config: SecretsConfig): SecretsService {
    const secret: { [key: string]: string | undefined} = {};
    const secretValue = config.devSecretValue ?? '';
    config.secretNames.forEach(secretName => {
      if (secretName) secret[secretName] = secretValue;
    });
    console.log('Creating DEV version of SecretsService. With the following secret:', secret);
    return new SecretsService(secret);
  }

  getSecret(secretName: string | undefined): string | undefined {
    if (secretName == null) return undefined;
    return this.secret[secretName];
  }
}
