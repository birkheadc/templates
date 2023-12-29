import { AuthConfig } from "src/auth/auth.config"
import { UsersConfig } from "../users/users.config"

type Configuration = {
  auth: AuthConfig,
  users: UsersConfig
}

export default (): Configuration => ({
  auth: {
    secretId: process.env.AWS_SECRET_ID,
    secretName: process.env.AWS_AUTH_JWT_SECRET_NAME
  },
  users: {
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_DYNAMODB_ENDPOINT,
  }
})