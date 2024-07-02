declare global {
  type Except<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
  type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
    interface ObjectConstructor {
    keys<T extends object>(o: T): (keyof T)[];

    entries<TValue, TKey>(
      o: Record<TKey, TValue> | ArrayLike<TValue>,
    ): [TKey, TValue][];
  }

  interface JSON {
    parse<T = unknown>(
      text: string,
      reviver?: (this: unknown, key: string, value: unknown) => unknown,
    ): T;
  }
}
export {};
