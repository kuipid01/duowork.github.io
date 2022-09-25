type callbackType = () => void

export default function useIntersectionObserver(callback: callbackType, options: undefined) {
  const observer = new IntersectionObserver(callback, options)
  return observer
}
