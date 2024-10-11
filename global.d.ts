declare global {
  type Except<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  type nullable = false | undefined | null;

  type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;

  type UnionKeys<T> = {
    [K in keyof T]?: T[K] | undefined;
  };

  type ExtractLiteral<T, U extends keyof T, V extends T[U]> = T extends { [key in U]: V }
    ? T
    : never;

  type DotNestedKeys<T> = (
    T extends object
      ? {
          [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}`;
        }[Exclude<keyof T, symbol>]
      : ""
  ) extends infer D
    ? Extract<D, string>
    : never;

  type Optional<T> = { [K in keyof T]: T[K] } | { [K in keyof T]?: never };

  type Tuple<T = unknown, N extends number = 1, R extends T[] = []> = R["length"] extends N
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

  interface Number {
    toLocaleString(locales?: 'en-US', options?: Intl.NumberFormatOptions): string;
  }

  interface ObjectConstructor {
    keys<T extends object>(o: T): (keyof T)[];

    entries<TValue, TKey extends string | number | symbol>(
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
