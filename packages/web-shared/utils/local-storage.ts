export const localStorageUtil = <T>(key: string) => ({
  delete: () => localStorage.removeItem(key),
  get: () => {
    const response = localStorage.getItem(key);
    if (!response) return null;
    try {
      return JSON.parse(response) as T;
    } catch (e) {
      return response;
    }
  },
  key,
  set: (value: T) => localStorage.setItem(key, JSON.stringify(value)),
});
