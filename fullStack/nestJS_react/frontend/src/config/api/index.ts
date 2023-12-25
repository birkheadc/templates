import { ApiConfig } from "../../types/config/config";

const apiConfig: ApiConfig = {
  general: {
    timeout: 8000
  },
  authentication: {
    url: (process.env.BACKEND_URL ?? "not_set") + "/auth"
  }
}

export default apiConfig;