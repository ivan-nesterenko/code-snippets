declare global {
  type Except<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  type OptionalFields<T, TFields extends keyof T> = Except<T, TFields> &
    (
      | {
          [T in TFields]: T[TFields];
        }
      | {
          [T in TFields]: never;
        }
    );

  type Tuple<T = unknown, N extends number = 1, R extends T[] = []> = R['length'] extends N
    ? R
    : Tuple<T, N, [T, ...R]>;

  type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

  type DeepRequired<T> = T extends object
    ? {
        [P in keyof T]-?: DeepRequired<T[P]>;
      }
    : T;

  interface String {
    toLowerCase(): Lowercase<string>;

    toLocaleLowerCase(locales?: string | string[]): Lowercase<string>;

    toUpperCase(): Uppercase<string>;

    toLocaleUpperCase(locales?: string | string[]): Uppercase<string>;
  }

  interface ObjectConstructor {
    keys<T extends object>(o: T): (keyof T)[];

    entries<TValue, TKey>(o: Record<TKey, TValue> | ArrayLike<TValue>): [TKey, TValue][];
  }

  interface JSON {
    parse<T = unknown>(
      text: string,
      reviver?: (this: unknown, key: string, value: unknown) => unknown,
    ): T;
  }
}
export {};
