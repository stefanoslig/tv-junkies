export function debounce(func: () => void, timeout = 300) {
  let timer: ReturnType<typeof setTimeout>;

  return function <U>(this: U, ...args: Parameters<typeof func>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
