import { ApiConfig } from "../../types/config/config";

const BACKEND_URL = process.env.BACKEND_URL ?? "not_set";

const apiConfig: ApiConfig = {
  general: {
    timeout: 8000
  },
  authentication: {
    url: BACKEND_URL + "/auth"
  },
  users: {
    url: BACKEND_URL + "/users"
  }
}

export default apiConfig;