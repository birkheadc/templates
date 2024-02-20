export default function createAbortSignal(): { abortSignal: AbortSignal; clearAbortSignal: () => void } {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 8000);

  return { abortSignal: controller.signal, clearAbortSignal: () => clearTimeout(timeout) }
}