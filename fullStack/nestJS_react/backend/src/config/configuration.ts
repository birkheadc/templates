import { AuthConfig } from "src/auth/auth.config"

type Configuration = {
  auth: AuthConfig
}

export default (): Configuration => ({
  auth: {
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_DYNAMODB_ENDPOINT,
    secretId: process.env.AWS_SECRET_ID,
    secretName: process.env.AWS_AUTH_JWT_SECRET_NAME
  }
})