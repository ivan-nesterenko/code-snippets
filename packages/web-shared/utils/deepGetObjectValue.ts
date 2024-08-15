const regExp = new RegExp(/\[([^\\[\]]*)\]/g);

export const deepGet = (obj: object, keys: string[]) =>
  keys.reduce((xs, x) => xs?.[x as keyof typeof xs] ?? null, obj);

export const deepGetByPaths = (obj: object, ...paths: string[]) =>
  paths.map((path) =>
    deepGet(
      obj,
      path
        .replace(regExp, '.$1.')
        .split('.')
        .filter((t) => t !== ''),
    ),
  );
