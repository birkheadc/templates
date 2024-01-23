import { ApiConfig } from "../../types/config/config";

const apiConfig: ApiConfig = {
  general: {
    timeout: 8000
  },
  authentication: {
    url: process.env.AUTHENTICATION_URL || "not_set",
    method: "POST"
  }
}

export default apiConfig;