export default function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: undefined
) {
  const observer = new IntersectionObserver(callback, options)
  return { observer }
}
