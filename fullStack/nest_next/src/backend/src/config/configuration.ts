import { AuthConfig } from "src/auth/auth.config"
import { UsersConfig } from "../users/users.config"
import { SecretsConfig } from "../secrets/secrets.config"
import { MailConfig } from "../mail/mail.config"

type Configuration = {
  auth: AuthConfig,
  users: UsersConfig,
  secrets: SecretsConfig,
  mail: MailConfig
}

export default (): Configuration => ({
  auth: {
    secretName: process.env.AWS_AUTH_JWT_SECRET_NAME,
  },
  users: {
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_DYNAMODB_ENDPOINT,
  },
  secrets: {
    region: process.env.AWS_REGION,
    secretId: process.env.AWS_SECRET_ID,
    secretNames: [ process.env.AWS_AUTH_JWT_SECRET_NAME ],
    devSecretValue: process.env.AWS_DEV_SECRET_VALUE
  },
  mail: {
    region: process.env.AWS_REGION,
    secretName: process.env.AWS_MAIL_JWT_SECRET_NAME
  }
})