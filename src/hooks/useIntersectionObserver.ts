import "intersection-observer"

export default function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: undefined
) {
  let observer = null;
  const isBrowser: boolean = typeof window !== "undefined";

  if (isBrowser) {
    observer = new IntersectionObserver(callback, options);
  }
  return { observer }
}
