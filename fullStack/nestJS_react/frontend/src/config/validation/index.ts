import { ValidationConfig } from "../../types/config/config";

const validationConfig: ValidationConfig = {
  settings: {
    password: {
      minChars: 8,
      maxChars: 32
    }
  }
}

export default validationConfig;