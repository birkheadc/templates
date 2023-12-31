import { Config } from "../types/config/config";
import apiConfig from "./api";
import validationConfig from "./validation";

const config: Config = {
  api: apiConfig,
  validation: validationConfig
}

export default config;