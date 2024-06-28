export const localStorageUtil = <T>(key: string) => ({
  delete: () => localStorage.removeItem(key),
  get: () => {
    const response = localStorage.getItem(key);
    if (!response) return null;
    return JSON.parse(response) as T;
  },
  key,
  set: (value: T) => localStorage.setItem(key, JSON.stringify(value)),
});
