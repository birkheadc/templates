import { AuthConfig } from "src/auth/auth.config"

type Configuration = {
  auth: AuthConfig
}

export default (): Configuration => ({
  auth: {
    region: 'ap-southeast-2',
    secretId: 'Secrets',
    secretName: 'project_nameJwtKey'
  }
})