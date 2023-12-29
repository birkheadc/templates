import { GetSecretValueCommand, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
import { HttpException, HttpStatus } from "@nestjs/common";
import { AuthConfig } from "src/auth/auth.config";

export const fetchSecretKey = async (config: AuthConfig) => {
  return 'dpqPYdUdRYND2sHLOrIBjrKO83OqV5V73waEsTN6Hm0=';
  // console.log('Fetch secret key: ', { region: config.region, secretId: config.secretId, secretName: config.secretName });
  // const client = new SecretsManagerClient({
  //   region: config.region
  // });

  // try {
  //   const command = new GetSecretValueCommand({
  //     SecretId: config.secretId
  //   });
  //   const response = await client.send(command);
  //   const secrets = response.SecretString;
  //   if (secrets == null) throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
  //   const secret = JSON.parse(secrets)[config.secretName ?? ''];
  //   return secret;
  // } catch (error) {
  //   console.log('Error while fetching secret key: ', error);
  //   throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
  // }
}