import config from "../../config";

export default function getAbortSignal(): { timeout: NodeJS.Timeout, signal: AbortSignal } {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort()
  }, config.api.general.timeout);
  return { timeout: timeout, signal: controller.signal }
}