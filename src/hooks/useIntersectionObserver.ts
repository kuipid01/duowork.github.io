type callbackType = () => void

export function useIntersectionObserver(callback: callbackType, options: undefined) {
  const observer = new IntersectionObserver(callback, options)
  return observer
}
