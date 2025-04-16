
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Brute
 * 
 */
export type Brute = $Result.DefaultSelection<Prisma.$BrutePayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model BruteItem
 * 
 */
export type BruteItem = $Result.DefaultSelection<Prisma.$BruteItemPayload>
/**
 * Model Combat
 * 
 */
export type Combat = $Result.DefaultSelection<Prisma.$CombatPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brute`: Exposes CRUD operations for the **Brute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brutes
    * const brutes = await prisma.brute.findMany()
    * ```
    */
  get brute(): Prisma.BruteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bruteItem`: Exposes CRUD operations for the **BruteItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BruteItems
    * const bruteItems = await prisma.bruteItem.findMany()
    * ```
    */
  get bruteItem(): Prisma.BruteItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.combat`: Exposes CRUD operations for the **Combat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Combats
    * const combats = await prisma.combat.findMany()
    * ```
    */
  get combat(): Prisma.CombatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Brute: 'Brute',
    Item: 'Item',
    BruteItem: 'BruteItem',
    Combat: 'Combat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "brute" | "item" | "bruteItem" | "combat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Brute: {
        payload: Prisma.$BrutePayload<ExtArgs>
        fields: Prisma.BruteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BruteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BruteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload>
          }
          findFirst: {
            args: Prisma.BruteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BruteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload>
          }
          findMany: {
            args: Prisma.BruteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload>[]
          }
          create: {
            args: Prisma.BruteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload>
          }
          createMany: {
            args: Prisma.BruteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BruteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload>[]
          }
          delete: {
            args: Prisma.BruteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload>
          }
          update: {
            args: Prisma.BruteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload>
          }
          deleteMany: {
            args: Prisma.BruteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BruteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BruteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload>[]
          }
          upsert: {
            args: Prisma.BruteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrutePayload>
          }
          aggregate: {
            args: Prisma.BruteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrute>
          }
          groupBy: {
            args: Prisma.BruteGroupByArgs<ExtArgs>
            result: $Utils.Optional<BruteGroupByOutputType>[]
          }
          count: {
            args: Prisma.BruteCountArgs<ExtArgs>
            result: $Utils.Optional<BruteCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      BruteItem: {
        payload: Prisma.$BruteItemPayload<ExtArgs>
        fields: Prisma.BruteItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BruteItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BruteItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload>
          }
          findFirst: {
            args: Prisma.BruteItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BruteItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload>
          }
          findMany: {
            args: Prisma.BruteItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload>[]
          }
          create: {
            args: Prisma.BruteItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload>
          }
          createMany: {
            args: Prisma.BruteItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BruteItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload>[]
          }
          delete: {
            args: Prisma.BruteItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload>
          }
          update: {
            args: Prisma.BruteItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload>
          }
          deleteMany: {
            args: Prisma.BruteItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BruteItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BruteItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload>[]
          }
          upsert: {
            args: Prisma.BruteItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BruteItemPayload>
          }
          aggregate: {
            args: Prisma.BruteItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBruteItem>
          }
          groupBy: {
            args: Prisma.BruteItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BruteItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BruteItemCountArgs<ExtArgs>
            result: $Utils.Optional<BruteItemCountAggregateOutputType> | number
          }
        }
      }
      Combat: {
        payload: Prisma.$CombatPayload<ExtArgs>
        fields: Prisma.CombatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CombatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CombatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload>
          }
          findFirst: {
            args: Prisma.CombatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CombatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload>
          }
          findMany: {
            args: Prisma.CombatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload>[]
          }
          create: {
            args: Prisma.CombatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload>
          }
          createMany: {
            args: Prisma.CombatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CombatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload>[]
          }
          delete: {
            args: Prisma.CombatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload>
          }
          update: {
            args: Prisma.CombatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload>
          }
          deleteMany: {
            args: Prisma.CombatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CombatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CombatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload>[]
          }
          upsert: {
            args: Prisma.CombatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CombatPayload>
          }
          aggregate: {
            args: Prisma.CombatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCombat>
          }
          groupBy: {
            args: Prisma.CombatGroupByArgs<ExtArgs>
            result: $Utils.Optional<CombatGroupByOutputType>[]
          }
          count: {
            args: Prisma.CombatCountArgs<ExtArgs>
            result: $Utils.Optional<CombatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    brute?: BruteOmit
    item?: ItemOmit
    bruteItem?: BruteItemOmit
    combat?: CombatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    brutes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brutes?: boolean | UserCountOutputTypeCountBrutesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBrutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BruteWhereInput
  }


  /**
   * Count Type BruteCountOutputType
   */

  export type BruteCountOutputType = {
    items: number
    combats: number
    opponentCombats: number
  }

  export type BruteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | BruteCountOutputTypeCountItemsArgs
    combats?: boolean | BruteCountOutputTypeCountCombatsArgs
    opponentCombats?: boolean | BruteCountOutputTypeCountOpponentCombatsArgs
  }

  // Custom InputTypes
  /**
   * BruteCountOutputType without action
   */
  export type BruteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteCountOutputType
     */
    select?: BruteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BruteCountOutputType without action
   */
  export type BruteCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BruteItemWhereInput
  }

  /**
   * BruteCountOutputType without action
   */
  export type BruteCountOutputTypeCountCombatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CombatWhereInput
  }

  /**
   * BruteCountOutputType without action
   */
  export type BruteCountOutputTypeCountOpponentCombatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CombatWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    bruteItems: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bruteItems?: boolean | ItemCountOutputTypeCountBruteItemsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountBruteItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BruteItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brutes?: boolean | User$brutesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brutes?: boolean | User$brutesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      brutes: Prisma.$BrutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brutes<T extends User$brutesArgs<ExtArgs> = {}>(args?: Subset<T, User$brutesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.brutes
   */
  export type User$brutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
    where?: BruteWhereInput
    orderBy?: BruteOrderByWithRelationInput | BruteOrderByWithRelationInput[]
    cursor?: BruteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BruteScalarFieldEnum | BruteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Brute
   */

  export type AggregateBrute = {
    _count: BruteCountAggregateOutputType | null
    _avg: BruteAvgAggregateOutputType | null
    _sum: BruteSumAggregateOutputType | null
    _min: BruteMinAggregateOutputType | null
    _max: BruteMaxAggregateOutputType | null
  }

  export type BruteAvgAggregateOutputType = {
    level: number | null
    experience: number | null
    strength: number | null
    agility: number | null
    speed: number | null
    health: number | null
    intelligence: number | null
    victories: number | null
    defeats: number | null
  }

  export type BruteSumAggregateOutputType = {
    level: number | null
    experience: number | null
    strength: number | null
    agility: number | null
    speed: number | null
    health: number | null
    intelligence: number | null
    victories: number | null
    defeats: number | null
  }

  export type BruteMinAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    experience: number | null
    strength: number | null
    agility: number | null
    speed: number | null
    health: number | null
    intelligence: number | null
    victories: number | null
    defeats: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BruteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    experience: number | null
    strength: number | null
    agility: number | null
    speed: number | null
    health: number | null
    intelligence: number | null
    victories: number | null
    defeats: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BruteCountAggregateOutputType = {
    id: number
    name: number
    level: number
    experience: number
    strength: number
    agility: number
    speed: number
    health: number
    intelligence: number
    victories: number
    defeats: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type BruteAvgAggregateInputType = {
    level?: true
    experience?: true
    strength?: true
    agility?: true
    speed?: true
    health?: true
    intelligence?: true
    victories?: true
    defeats?: true
  }

  export type BruteSumAggregateInputType = {
    level?: true
    experience?: true
    strength?: true
    agility?: true
    speed?: true
    health?: true
    intelligence?: true
    victories?: true
    defeats?: true
  }

  export type BruteMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    experience?: true
    strength?: true
    agility?: true
    speed?: true
    health?: true
    intelligence?: true
    victories?: true
    defeats?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BruteMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    experience?: true
    strength?: true
    agility?: true
    speed?: true
    health?: true
    intelligence?: true
    victories?: true
    defeats?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BruteCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    experience?: true
    strength?: true
    agility?: true
    speed?: true
    health?: true
    intelligence?: true
    victories?: true
    defeats?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type BruteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brute to aggregate.
     */
    where?: BruteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brutes to fetch.
     */
    orderBy?: BruteOrderByWithRelationInput | BruteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BruteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brutes
    **/
    _count?: true | BruteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BruteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BruteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BruteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BruteMaxAggregateInputType
  }

  export type GetBruteAggregateType<T extends BruteAggregateArgs> = {
        [P in keyof T & keyof AggregateBrute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrute[P]>
      : GetScalarType<T[P], AggregateBrute[P]>
  }




  export type BruteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BruteWhereInput
    orderBy?: BruteOrderByWithAggregationInput | BruteOrderByWithAggregationInput[]
    by: BruteScalarFieldEnum[] | BruteScalarFieldEnum
    having?: BruteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BruteCountAggregateInputType | true
    _avg?: BruteAvgAggregateInputType
    _sum?: BruteSumAggregateInputType
    _min?: BruteMinAggregateInputType
    _max?: BruteMaxAggregateInputType
  }

  export type BruteGroupByOutputType = {
    id: string
    name: string
    level: number
    experience: number
    strength: number
    agility: number
    speed: number
    health: number
    intelligence: number
    victories: number
    defeats: number
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: BruteCountAggregateOutputType | null
    _avg: BruteAvgAggregateOutputType | null
    _sum: BruteSumAggregateOutputType | null
    _min: BruteMinAggregateOutputType | null
    _max: BruteMaxAggregateOutputType | null
  }

  type GetBruteGroupByPayload<T extends BruteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BruteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BruteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BruteGroupByOutputType[P]>
            : GetScalarType<T[P], BruteGroupByOutputType[P]>
        }
      >
    >


  export type BruteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    experience?: boolean
    strength?: boolean
    agility?: boolean
    speed?: boolean
    health?: boolean
    intelligence?: boolean
    victories?: boolean
    defeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Brute$itemsArgs<ExtArgs>
    combats?: boolean | Brute$combatsArgs<ExtArgs>
    opponentCombats?: boolean | Brute$opponentCombatsArgs<ExtArgs>
    _count?: boolean | BruteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brute"]>

  export type BruteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    experience?: boolean
    strength?: boolean
    agility?: boolean
    speed?: boolean
    health?: boolean
    intelligence?: boolean
    victories?: boolean
    defeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brute"]>

  export type BruteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    experience?: boolean
    strength?: boolean
    agility?: boolean
    speed?: boolean
    health?: boolean
    intelligence?: boolean
    victories?: boolean
    defeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brute"]>

  export type BruteSelectScalar = {
    id?: boolean
    name?: boolean
    level?: boolean
    experience?: boolean
    strength?: boolean
    agility?: boolean
    speed?: boolean
    health?: boolean
    intelligence?: boolean
    victories?: boolean
    defeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type BruteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "level" | "experience" | "strength" | "agility" | "speed" | "health" | "intelligence" | "victories" | "defeats" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["brute"]>
  export type BruteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Brute$itemsArgs<ExtArgs>
    combats?: boolean | Brute$combatsArgs<ExtArgs>
    opponentCombats?: boolean | Brute$opponentCombatsArgs<ExtArgs>
    _count?: boolean | BruteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BruteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BruteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BrutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brute"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$BruteItemPayload<ExtArgs>[]
      combats: Prisma.$CombatPayload<ExtArgs>[]
      opponentCombats: Prisma.$CombatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      level: number
      experience: number
      strength: number
      agility: number
      speed: number
      health: number
      intelligence: number
      victories: number
      defeats: number
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["brute"]>
    composites: {}
  }

  type BruteGetPayload<S extends boolean | null | undefined | BruteDefaultArgs> = $Result.GetResult<Prisma.$BrutePayload, S>

  type BruteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BruteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BruteCountAggregateInputType | true
    }

  export interface BruteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brute'], meta: { name: 'Brute' } }
    /**
     * Find zero or one Brute that matches the filter.
     * @param {BruteFindUniqueArgs} args - Arguments to find a Brute
     * @example
     * // Get one Brute
     * const brute = await prisma.brute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BruteFindUniqueArgs>(args: SelectSubset<T, BruteFindUniqueArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BruteFindUniqueOrThrowArgs} args - Arguments to find a Brute
     * @example
     * // Get one Brute
     * const brute = await prisma.brute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BruteFindUniqueOrThrowArgs>(args: SelectSubset<T, BruteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteFindFirstArgs} args - Arguments to find a Brute
     * @example
     * // Get one Brute
     * const brute = await prisma.brute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BruteFindFirstArgs>(args?: SelectSubset<T, BruteFindFirstArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteFindFirstOrThrowArgs} args - Arguments to find a Brute
     * @example
     * // Get one Brute
     * const brute = await prisma.brute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BruteFindFirstOrThrowArgs>(args?: SelectSubset<T, BruteFindFirstOrThrowArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brutes
     * const brutes = await prisma.brute.findMany()
     * 
     * // Get first 10 Brutes
     * const brutes = await prisma.brute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bruteWithIdOnly = await prisma.brute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BruteFindManyArgs>(args?: SelectSubset<T, BruteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brute.
     * @param {BruteCreateArgs} args - Arguments to create a Brute.
     * @example
     * // Create one Brute
     * const Brute = await prisma.brute.create({
     *   data: {
     *     // ... data to create a Brute
     *   }
     * })
     * 
     */
    create<T extends BruteCreateArgs>(args: SelectSubset<T, BruteCreateArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brutes.
     * @param {BruteCreateManyArgs} args - Arguments to create many Brutes.
     * @example
     * // Create many Brutes
     * const brute = await prisma.brute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BruteCreateManyArgs>(args?: SelectSubset<T, BruteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brutes and returns the data saved in the database.
     * @param {BruteCreateManyAndReturnArgs} args - Arguments to create many Brutes.
     * @example
     * // Create many Brutes
     * const brute = await prisma.brute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brutes and only return the `id`
     * const bruteWithIdOnly = await prisma.brute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BruteCreateManyAndReturnArgs>(args?: SelectSubset<T, BruteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brute.
     * @param {BruteDeleteArgs} args - Arguments to delete one Brute.
     * @example
     * // Delete one Brute
     * const Brute = await prisma.brute.delete({
     *   where: {
     *     // ... filter to delete one Brute
     *   }
     * })
     * 
     */
    delete<T extends BruteDeleteArgs>(args: SelectSubset<T, BruteDeleteArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brute.
     * @param {BruteUpdateArgs} args - Arguments to update one Brute.
     * @example
     * // Update one Brute
     * const brute = await prisma.brute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BruteUpdateArgs>(args: SelectSubset<T, BruteUpdateArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brutes.
     * @param {BruteDeleteManyArgs} args - Arguments to filter Brutes to delete.
     * @example
     * // Delete a few Brutes
     * const { count } = await prisma.brute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BruteDeleteManyArgs>(args?: SelectSubset<T, BruteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brutes
     * const brute = await prisma.brute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BruteUpdateManyArgs>(args: SelectSubset<T, BruteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brutes and returns the data updated in the database.
     * @param {BruteUpdateManyAndReturnArgs} args - Arguments to update many Brutes.
     * @example
     * // Update many Brutes
     * const brute = await prisma.brute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brutes and only return the `id`
     * const bruteWithIdOnly = await prisma.brute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BruteUpdateManyAndReturnArgs>(args: SelectSubset<T, BruteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brute.
     * @param {BruteUpsertArgs} args - Arguments to update or create a Brute.
     * @example
     * // Update or create a Brute
     * const brute = await prisma.brute.upsert({
     *   create: {
     *     // ... data to create a Brute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brute we want to update
     *   }
     * })
     */
    upsert<T extends BruteUpsertArgs>(args: SelectSubset<T, BruteUpsertArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteCountArgs} args - Arguments to filter Brutes to count.
     * @example
     * // Count the number of Brutes
     * const count = await prisma.brute.count({
     *   where: {
     *     // ... the filter for the Brutes we want to count
     *   }
     * })
    **/
    count<T extends BruteCountArgs>(
      args?: Subset<T, BruteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BruteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BruteAggregateArgs>(args: Subset<T, BruteAggregateArgs>): Prisma.PrismaPromise<GetBruteAggregateType<T>>

    /**
     * Group by Brute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BruteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BruteGroupByArgs['orderBy'] }
        : { orderBy?: BruteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BruteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBruteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brute model
   */
  readonly fields: BruteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BruteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Brute$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Brute$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    combats<T extends Brute$combatsArgs<ExtArgs> = {}>(args?: Subset<T, Brute$combatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opponentCombats<T extends Brute$opponentCombatsArgs<ExtArgs> = {}>(args?: Subset<T, Brute$opponentCombatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brute model
   */
  interface BruteFieldRefs {
    readonly id: FieldRef<"Brute", 'String'>
    readonly name: FieldRef<"Brute", 'String'>
    readonly level: FieldRef<"Brute", 'Int'>
    readonly experience: FieldRef<"Brute", 'Int'>
    readonly strength: FieldRef<"Brute", 'Int'>
    readonly agility: FieldRef<"Brute", 'Int'>
    readonly speed: FieldRef<"Brute", 'Int'>
    readonly health: FieldRef<"Brute", 'Int'>
    readonly intelligence: FieldRef<"Brute", 'Int'>
    readonly victories: FieldRef<"Brute", 'Int'>
    readonly defeats: FieldRef<"Brute", 'Int'>
    readonly createdAt: FieldRef<"Brute", 'DateTime'>
    readonly updatedAt: FieldRef<"Brute", 'DateTime'>
    readonly userId: FieldRef<"Brute", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brute findUnique
   */
  export type BruteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
    /**
     * Filter, which Brute to fetch.
     */
    where: BruteWhereUniqueInput
  }

  /**
   * Brute findUniqueOrThrow
   */
  export type BruteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
    /**
     * Filter, which Brute to fetch.
     */
    where: BruteWhereUniqueInput
  }

  /**
   * Brute findFirst
   */
  export type BruteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
    /**
     * Filter, which Brute to fetch.
     */
    where?: BruteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brutes to fetch.
     */
    orderBy?: BruteOrderByWithRelationInput | BruteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brutes.
     */
    cursor?: BruteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brutes.
     */
    distinct?: BruteScalarFieldEnum | BruteScalarFieldEnum[]
  }

  /**
   * Brute findFirstOrThrow
   */
  export type BruteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
    /**
     * Filter, which Brute to fetch.
     */
    where?: BruteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brutes to fetch.
     */
    orderBy?: BruteOrderByWithRelationInput | BruteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brutes.
     */
    cursor?: BruteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brutes.
     */
    distinct?: BruteScalarFieldEnum | BruteScalarFieldEnum[]
  }

  /**
   * Brute findMany
   */
  export type BruteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
    /**
     * Filter, which Brutes to fetch.
     */
    where?: BruteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brutes to fetch.
     */
    orderBy?: BruteOrderByWithRelationInput | BruteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brutes.
     */
    cursor?: BruteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brutes.
     */
    skip?: number
    distinct?: BruteScalarFieldEnum | BruteScalarFieldEnum[]
  }

  /**
   * Brute create
   */
  export type BruteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
    /**
     * The data needed to create a Brute.
     */
    data: XOR<BruteCreateInput, BruteUncheckedCreateInput>
  }

  /**
   * Brute createMany
   */
  export type BruteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brutes.
     */
    data: BruteCreateManyInput | BruteCreateManyInput[]
  }

  /**
   * Brute createManyAndReturn
   */
  export type BruteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * The data used to create many Brutes.
     */
    data: BruteCreateManyInput | BruteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brute update
   */
  export type BruteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
    /**
     * The data needed to update a Brute.
     */
    data: XOR<BruteUpdateInput, BruteUncheckedUpdateInput>
    /**
     * Choose, which Brute to update.
     */
    where: BruteWhereUniqueInput
  }

  /**
   * Brute updateMany
   */
  export type BruteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brutes.
     */
    data: XOR<BruteUpdateManyMutationInput, BruteUncheckedUpdateManyInput>
    /**
     * Filter which Brutes to update
     */
    where?: BruteWhereInput
    /**
     * Limit how many Brutes to update.
     */
    limit?: number
  }

  /**
   * Brute updateManyAndReturn
   */
  export type BruteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * The data used to update Brutes.
     */
    data: XOR<BruteUpdateManyMutationInput, BruteUncheckedUpdateManyInput>
    /**
     * Filter which Brutes to update
     */
    where?: BruteWhereInput
    /**
     * Limit how many Brutes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brute upsert
   */
  export type BruteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
    /**
     * The filter to search for the Brute to update in case it exists.
     */
    where: BruteWhereUniqueInput
    /**
     * In case the Brute found by the `where` argument doesn't exist, create a new Brute with this data.
     */
    create: XOR<BruteCreateInput, BruteUncheckedCreateInput>
    /**
     * In case the Brute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BruteUpdateInput, BruteUncheckedUpdateInput>
  }

  /**
   * Brute delete
   */
  export type BruteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
    /**
     * Filter which Brute to delete.
     */
    where: BruteWhereUniqueInput
  }

  /**
   * Brute deleteMany
   */
  export type BruteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brutes to delete
     */
    where?: BruteWhereInput
    /**
     * Limit how many Brutes to delete.
     */
    limit?: number
  }

  /**
   * Brute.items
   */
  export type Brute$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    where?: BruteItemWhereInput
    orderBy?: BruteItemOrderByWithRelationInput | BruteItemOrderByWithRelationInput[]
    cursor?: BruteItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BruteItemScalarFieldEnum | BruteItemScalarFieldEnum[]
  }

  /**
   * Brute.combats
   */
  export type Brute$combatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    where?: CombatWhereInput
    orderBy?: CombatOrderByWithRelationInput | CombatOrderByWithRelationInput[]
    cursor?: CombatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CombatScalarFieldEnum | CombatScalarFieldEnum[]
  }

  /**
   * Brute.opponentCombats
   */
  export type Brute$opponentCombatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    where?: CombatWhereInput
    orderBy?: CombatOrderByWithRelationInput | CombatOrderByWithRelationInput[]
    cursor?: CombatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CombatScalarFieldEnum | CombatScalarFieldEnum[]
  }

  /**
   * Brute without action
   */
  export type BruteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brute
     */
    select?: BruteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brute
     */
    omit?: BruteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    strengthBonus: number | null
    agilityBonus: number | null
    speedBonus: number | null
    healthBonus: number | null
    intelligenceBonus: number | null
  }

  export type ItemSumAggregateOutputType = {
    strengthBonus: number | null
    agilityBonus: number | null
    speedBonus: number | null
    healthBonus: number | null
    intelligenceBonus: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    rarity: string | null
    strengthBonus: number | null
    agilityBonus: number | null
    speedBonus: number | null
    healthBonus: number | null
    intelligenceBonus: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    rarity: string | null
    strengthBonus: number | null
    agilityBonus: number | null
    speedBonus: number | null
    healthBonus: number | null
    intelligenceBonus: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    rarity: number
    strengthBonus: number
    agilityBonus: number
    speedBonus: number
    healthBonus: number
    intelligenceBonus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    strengthBonus?: true
    agilityBonus?: true
    speedBonus?: true
    healthBonus?: true
    intelligenceBonus?: true
  }

  export type ItemSumAggregateInputType = {
    strengthBonus?: true
    agilityBonus?: true
    speedBonus?: true
    healthBonus?: true
    intelligenceBonus?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rarity?: true
    strengthBonus?: true
    agilityBonus?: true
    speedBonus?: true
    healthBonus?: true
    intelligenceBonus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rarity?: true
    strengthBonus?: true
    agilityBonus?: true
    speedBonus?: true
    healthBonus?: true
    intelligenceBonus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rarity?: true
    strengthBonus?: true
    agilityBonus?: true
    speedBonus?: true
    healthBonus?: true
    intelligenceBonus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    description: string
    rarity: string
    strengthBonus: number
    agilityBonus: number
    speedBonus: number
    healthBonus: number
    intelligenceBonus: number
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rarity?: boolean
    strengthBonus?: boolean
    agilityBonus?: boolean
    speedBonus?: boolean
    healthBonus?: boolean
    intelligenceBonus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bruteItems?: boolean | Item$bruteItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rarity?: boolean
    strengthBonus?: boolean
    agilityBonus?: boolean
    speedBonus?: boolean
    healthBonus?: boolean
    intelligenceBonus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rarity?: boolean
    strengthBonus?: boolean
    agilityBonus?: boolean
    speedBonus?: boolean
    healthBonus?: boolean
    intelligenceBonus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    rarity?: boolean
    strengthBonus?: boolean
    agilityBonus?: boolean
    speedBonus?: boolean
    healthBonus?: boolean
    intelligenceBonus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "rarity" | "strengthBonus" | "agilityBonus" | "speedBonus" | "healthBonus" | "intelligenceBonus" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bruteItems?: boolean | Item$bruteItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      bruteItems: Prisma.$BruteItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      rarity: string
      strengthBonus: number
      agilityBonus: number
      speedBonus: number
      healthBonus: number
      intelligenceBonus: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bruteItems<T extends Item$bruteItemsArgs<ExtArgs> = {}>(args?: Subset<T, Item$bruteItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly rarity: FieldRef<"Item", 'String'>
    readonly strengthBonus: FieldRef<"Item", 'Int'>
    readonly agilityBonus: FieldRef<"Item", 'Int'>
    readonly speedBonus: FieldRef<"Item", 'Int'>
    readonly healthBonus: FieldRef<"Item", 'Int'>
    readonly intelligenceBonus: FieldRef<"Item", 'Int'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.bruteItems
   */
  export type Item$bruteItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    where?: BruteItemWhereInput
    orderBy?: BruteItemOrderByWithRelationInput | BruteItemOrderByWithRelationInput[]
    cursor?: BruteItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BruteItemScalarFieldEnum | BruteItemScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model BruteItem
   */

  export type AggregateBruteItem = {
    _count: BruteItemCountAggregateOutputType | null
    _min: BruteItemMinAggregateOutputType | null
    _max: BruteItemMaxAggregateOutputType | null
  }

  export type BruteItemMinAggregateOutputType = {
    id: string | null
    bruteId: string | null
    itemId: string | null
    equipped: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BruteItemMaxAggregateOutputType = {
    id: string | null
    bruteId: string | null
    itemId: string | null
    equipped: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BruteItemCountAggregateOutputType = {
    id: number
    bruteId: number
    itemId: number
    equipped: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BruteItemMinAggregateInputType = {
    id?: true
    bruteId?: true
    itemId?: true
    equipped?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BruteItemMaxAggregateInputType = {
    id?: true
    bruteId?: true
    itemId?: true
    equipped?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BruteItemCountAggregateInputType = {
    id?: true
    bruteId?: true
    itemId?: true
    equipped?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BruteItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BruteItem to aggregate.
     */
    where?: BruteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteItems to fetch.
     */
    orderBy?: BruteItemOrderByWithRelationInput | BruteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BruteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BruteItems
    **/
    _count?: true | BruteItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BruteItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BruteItemMaxAggregateInputType
  }

  export type GetBruteItemAggregateType<T extends BruteItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBruteItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBruteItem[P]>
      : GetScalarType<T[P], AggregateBruteItem[P]>
  }




  export type BruteItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BruteItemWhereInput
    orderBy?: BruteItemOrderByWithAggregationInput | BruteItemOrderByWithAggregationInput[]
    by: BruteItemScalarFieldEnum[] | BruteItemScalarFieldEnum
    having?: BruteItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BruteItemCountAggregateInputType | true
    _min?: BruteItemMinAggregateInputType
    _max?: BruteItemMaxAggregateInputType
  }

  export type BruteItemGroupByOutputType = {
    id: string
    bruteId: string
    itemId: string
    equipped: boolean
    createdAt: Date
    updatedAt: Date
    _count: BruteItemCountAggregateOutputType | null
    _min: BruteItemMinAggregateOutputType | null
    _max: BruteItemMaxAggregateOutputType | null
  }

  type GetBruteItemGroupByPayload<T extends BruteItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BruteItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BruteItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BruteItemGroupByOutputType[P]>
            : GetScalarType<T[P], BruteItemGroupByOutputType[P]>
        }
      >
    >


  export type BruteItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bruteId?: boolean
    itemId?: boolean
    equipped?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bruteItem"]>

  export type BruteItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bruteId?: boolean
    itemId?: boolean
    equipped?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bruteItem"]>

  export type BruteItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bruteId?: boolean
    itemId?: boolean
    equipped?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bruteItem"]>

  export type BruteItemSelectScalar = {
    id?: boolean
    bruteId?: boolean
    itemId?: boolean
    equipped?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BruteItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bruteId" | "itemId" | "equipped" | "createdAt" | "updatedAt", ExtArgs["result"]["bruteItem"]>
  export type BruteItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type BruteItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type BruteItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $BruteItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BruteItem"
    objects: {
      brute: Prisma.$BrutePayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bruteId: string
      itemId: string
      equipped: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bruteItem"]>
    composites: {}
  }

  type BruteItemGetPayload<S extends boolean | null | undefined | BruteItemDefaultArgs> = $Result.GetResult<Prisma.$BruteItemPayload, S>

  type BruteItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BruteItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BruteItemCountAggregateInputType | true
    }

  export interface BruteItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BruteItem'], meta: { name: 'BruteItem' } }
    /**
     * Find zero or one BruteItem that matches the filter.
     * @param {BruteItemFindUniqueArgs} args - Arguments to find a BruteItem
     * @example
     * // Get one BruteItem
     * const bruteItem = await prisma.bruteItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BruteItemFindUniqueArgs>(args: SelectSubset<T, BruteItemFindUniqueArgs<ExtArgs>>): Prisma__BruteItemClient<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BruteItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BruteItemFindUniqueOrThrowArgs} args - Arguments to find a BruteItem
     * @example
     * // Get one BruteItem
     * const bruteItem = await prisma.bruteItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BruteItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BruteItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BruteItemClient<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BruteItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteItemFindFirstArgs} args - Arguments to find a BruteItem
     * @example
     * // Get one BruteItem
     * const bruteItem = await prisma.bruteItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BruteItemFindFirstArgs>(args?: SelectSubset<T, BruteItemFindFirstArgs<ExtArgs>>): Prisma__BruteItemClient<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BruteItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteItemFindFirstOrThrowArgs} args - Arguments to find a BruteItem
     * @example
     * // Get one BruteItem
     * const bruteItem = await prisma.bruteItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BruteItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BruteItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BruteItemClient<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BruteItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BruteItems
     * const bruteItems = await prisma.bruteItem.findMany()
     * 
     * // Get first 10 BruteItems
     * const bruteItems = await prisma.bruteItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bruteItemWithIdOnly = await prisma.bruteItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BruteItemFindManyArgs>(args?: SelectSubset<T, BruteItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BruteItem.
     * @param {BruteItemCreateArgs} args - Arguments to create a BruteItem.
     * @example
     * // Create one BruteItem
     * const BruteItem = await prisma.bruteItem.create({
     *   data: {
     *     // ... data to create a BruteItem
     *   }
     * })
     * 
     */
    create<T extends BruteItemCreateArgs>(args: SelectSubset<T, BruteItemCreateArgs<ExtArgs>>): Prisma__BruteItemClient<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BruteItems.
     * @param {BruteItemCreateManyArgs} args - Arguments to create many BruteItems.
     * @example
     * // Create many BruteItems
     * const bruteItem = await prisma.bruteItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BruteItemCreateManyArgs>(args?: SelectSubset<T, BruteItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BruteItems and returns the data saved in the database.
     * @param {BruteItemCreateManyAndReturnArgs} args - Arguments to create many BruteItems.
     * @example
     * // Create many BruteItems
     * const bruteItem = await prisma.bruteItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BruteItems and only return the `id`
     * const bruteItemWithIdOnly = await prisma.bruteItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BruteItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BruteItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BruteItem.
     * @param {BruteItemDeleteArgs} args - Arguments to delete one BruteItem.
     * @example
     * // Delete one BruteItem
     * const BruteItem = await prisma.bruteItem.delete({
     *   where: {
     *     // ... filter to delete one BruteItem
     *   }
     * })
     * 
     */
    delete<T extends BruteItemDeleteArgs>(args: SelectSubset<T, BruteItemDeleteArgs<ExtArgs>>): Prisma__BruteItemClient<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BruteItem.
     * @param {BruteItemUpdateArgs} args - Arguments to update one BruteItem.
     * @example
     * // Update one BruteItem
     * const bruteItem = await prisma.bruteItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BruteItemUpdateArgs>(args: SelectSubset<T, BruteItemUpdateArgs<ExtArgs>>): Prisma__BruteItemClient<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BruteItems.
     * @param {BruteItemDeleteManyArgs} args - Arguments to filter BruteItems to delete.
     * @example
     * // Delete a few BruteItems
     * const { count } = await prisma.bruteItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BruteItemDeleteManyArgs>(args?: SelectSubset<T, BruteItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BruteItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BruteItems
     * const bruteItem = await prisma.bruteItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BruteItemUpdateManyArgs>(args: SelectSubset<T, BruteItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BruteItems and returns the data updated in the database.
     * @param {BruteItemUpdateManyAndReturnArgs} args - Arguments to update many BruteItems.
     * @example
     * // Update many BruteItems
     * const bruteItem = await prisma.bruteItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BruteItems and only return the `id`
     * const bruteItemWithIdOnly = await prisma.bruteItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BruteItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BruteItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BruteItem.
     * @param {BruteItemUpsertArgs} args - Arguments to update or create a BruteItem.
     * @example
     * // Update or create a BruteItem
     * const bruteItem = await prisma.bruteItem.upsert({
     *   create: {
     *     // ... data to create a BruteItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BruteItem we want to update
     *   }
     * })
     */
    upsert<T extends BruteItemUpsertArgs>(args: SelectSubset<T, BruteItemUpsertArgs<ExtArgs>>): Prisma__BruteItemClient<$Result.GetResult<Prisma.$BruteItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BruteItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteItemCountArgs} args - Arguments to filter BruteItems to count.
     * @example
     * // Count the number of BruteItems
     * const count = await prisma.bruteItem.count({
     *   where: {
     *     // ... the filter for the BruteItems we want to count
     *   }
     * })
    **/
    count<T extends BruteItemCountArgs>(
      args?: Subset<T, BruteItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BruteItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BruteItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BruteItemAggregateArgs>(args: Subset<T, BruteItemAggregateArgs>): Prisma.PrismaPromise<GetBruteItemAggregateType<T>>

    /**
     * Group by BruteItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BruteItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BruteItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BruteItemGroupByArgs['orderBy'] }
        : { orderBy?: BruteItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BruteItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBruteItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BruteItem model
   */
  readonly fields: BruteItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BruteItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BruteItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brute<T extends BruteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BruteDefaultArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BruteItem model
   */
  interface BruteItemFieldRefs {
    readonly id: FieldRef<"BruteItem", 'String'>
    readonly bruteId: FieldRef<"BruteItem", 'String'>
    readonly itemId: FieldRef<"BruteItem", 'String'>
    readonly equipped: FieldRef<"BruteItem", 'Boolean'>
    readonly createdAt: FieldRef<"BruteItem", 'DateTime'>
    readonly updatedAt: FieldRef<"BruteItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BruteItem findUnique
   */
  export type BruteItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    /**
     * Filter, which BruteItem to fetch.
     */
    where: BruteItemWhereUniqueInput
  }

  /**
   * BruteItem findUniqueOrThrow
   */
  export type BruteItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    /**
     * Filter, which BruteItem to fetch.
     */
    where: BruteItemWhereUniqueInput
  }

  /**
   * BruteItem findFirst
   */
  export type BruteItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    /**
     * Filter, which BruteItem to fetch.
     */
    where?: BruteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteItems to fetch.
     */
    orderBy?: BruteItemOrderByWithRelationInput | BruteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BruteItems.
     */
    cursor?: BruteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BruteItems.
     */
    distinct?: BruteItemScalarFieldEnum | BruteItemScalarFieldEnum[]
  }

  /**
   * BruteItem findFirstOrThrow
   */
  export type BruteItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    /**
     * Filter, which BruteItem to fetch.
     */
    where?: BruteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteItems to fetch.
     */
    orderBy?: BruteItemOrderByWithRelationInput | BruteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BruteItems.
     */
    cursor?: BruteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BruteItems.
     */
    distinct?: BruteItemScalarFieldEnum | BruteItemScalarFieldEnum[]
  }

  /**
   * BruteItem findMany
   */
  export type BruteItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    /**
     * Filter, which BruteItems to fetch.
     */
    where?: BruteItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BruteItems to fetch.
     */
    orderBy?: BruteItemOrderByWithRelationInput | BruteItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BruteItems.
     */
    cursor?: BruteItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BruteItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BruteItems.
     */
    skip?: number
    distinct?: BruteItemScalarFieldEnum | BruteItemScalarFieldEnum[]
  }

  /**
   * BruteItem create
   */
  export type BruteItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BruteItem.
     */
    data: XOR<BruteItemCreateInput, BruteItemUncheckedCreateInput>
  }

  /**
   * BruteItem createMany
   */
  export type BruteItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BruteItems.
     */
    data: BruteItemCreateManyInput | BruteItemCreateManyInput[]
  }

  /**
   * BruteItem createManyAndReturn
   */
  export type BruteItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * The data used to create many BruteItems.
     */
    data: BruteItemCreateManyInput | BruteItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BruteItem update
   */
  export type BruteItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BruteItem.
     */
    data: XOR<BruteItemUpdateInput, BruteItemUncheckedUpdateInput>
    /**
     * Choose, which BruteItem to update.
     */
    where: BruteItemWhereUniqueInput
  }

  /**
   * BruteItem updateMany
   */
  export type BruteItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BruteItems.
     */
    data: XOR<BruteItemUpdateManyMutationInput, BruteItemUncheckedUpdateManyInput>
    /**
     * Filter which BruteItems to update
     */
    where?: BruteItemWhereInput
    /**
     * Limit how many BruteItems to update.
     */
    limit?: number
  }

  /**
   * BruteItem updateManyAndReturn
   */
  export type BruteItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * The data used to update BruteItems.
     */
    data: XOR<BruteItemUpdateManyMutationInput, BruteItemUncheckedUpdateManyInput>
    /**
     * Filter which BruteItems to update
     */
    where?: BruteItemWhereInput
    /**
     * Limit how many BruteItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BruteItem upsert
   */
  export type BruteItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BruteItem to update in case it exists.
     */
    where: BruteItemWhereUniqueInput
    /**
     * In case the BruteItem found by the `where` argument doesn't exist, create a new BruteItem with this data.
     */
    create: XOR<BruteItemCreateInput, BruteItemUncheckedCreateInput>
    /**
     * In case the BruteItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BruteItemUpdateInput, BruteItemUncheckedUpdateInput>
  }

  /**
   * BruteItem delete
   */
  export type BruteItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
    /**
     * Filter which BruteItem to delete.
     */
    where: BruteItemWhereUniqueInput
  }

  /**
   * BruteItem deleteMany
   */
  export type BruteItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BruteItems to delete
     */
    where?: BruteItemWhereInput
    /**
     * Limit how many BruteItems to delete.
     */
    limit?: number
  }

  /**
   * BruteItem without action
   */
  export type BruteItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BruteItem
     */
    select?: BruteItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BruteItem
     */
    omit?: BruteItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BruteItemInclude<ExtArgs> | null
  }


  /**
   * Model Combat
   */

  export type AggregateCombat = {
    _count: CombatCountAggregateOutputType | null
    _min: CombatMinAggregateOutputType | null
    _max: CombatMaxAggregateOutputType | null
  }

  export type CombatMinAggregateOutputType = {
    id: string | null
    bruteId: string | null
    opponentId: string | null
    winnerId: string | null
    logs: string | null
    createdAt: Date | null
  }

  export type CombatMaxAggregateOutputType = {
    id: string | null
    bruteId: string | null
    opponentId: string | null
    winnerId: string | null
    logs: string | null
    createdAt: Date | null
  }

  export type CombatCountAggregateOutputType = {
    id: number
    bruteId: number
    opponentId: number
    winnerId: number
    logs: number
    createdAt: number
    _all: number
  }


  export type CombatMinAggregateInputType = {
    id?: true
    bruteId?: true
    opponentId?: true
    winnerId?: true
    logs?: true
    createdAt?: true
  }

  export type CombatMaxAggregateInputType = {
    id?: true
    bruteId?: true
    opponentId?: true
    winnerId?: true
    logs?: true
    createdAt?: true
  }

  export type CombatCountAggregateInputType = {
    id?: true
    bruteId?: true
    opponentId?: true
    winnerId?: true
    logs?: true
    createdAt?: true
    _all?: true
  }

  export type CombatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combat to aggregate.
     */
    where?: CombatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combats to fetch.
     */
    orderBy?: CombatOrderByWithRelationInput | CombatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CombatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Combats
    **/
    _count?: true | CombatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CombatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CombatMaxAggregateInputType
  }

  export type GetCombatAggregateType<T extends CombatAggregateArgs> = {
        [P in keyof T & keyof AggregateCombat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCombat[P]>
      : GetScalarType<T[P], AggregateCombat[P]>
  }




  export type CombatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CombatWhereInput
    orderBy?: CombatOrderByWithAggregationInput | CombatOrderByWithAggregationInput[]
    by: CombatScalarFieldEnum[] | CombatScalarFieldEnum
    having?: CombatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CombatCountAggregateInputType | true
    _min?: CombatMinAggregateInputType
    _max?: CombatMaxAggregateInputType
  }

  export type CombatGroupByOutputType = {
    id: string
    bruteId: string
    opponentId: string
    winnerId: string | null
    logs: string
    createdAt: Date
    _count: CombatCountAggregateOutputType | null
    _min: CombatMinAggregateOutputType | null
    _max: CombatMaxAggregateOutputType | null
  }

  type GetCombatGroupByPayload<T extends CombatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CombatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CombatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CombatGroupByOutputType[P]>
            : GetScalarType<T[P], CombatGroupByOutputType[P]>
        }
      >
    >


  export type CombatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bruteId?: boolean
    opponentId?: boolean
    winnerId?: boolean
    logs?: boolean
    createdAt?: boolean
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    opponent?: boolean | BruteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["combat"]>

  export type CombatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bruteId?: boolean
    opponentId?: boolean
    winnerId?: boolean
    logs?: boolean
    createdAt?: boolean
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    opponent?: boolean | BruteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["combat"]>

  export type CombatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bruteId?: boolean
    opponentId?: boolean
    winnerId?: boolean
    logs?: boolean
    createdAt?: boolean
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    opponent?: boolean | BruteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["combat"]>

  export type CombatSelectScalar = {
    id?: boolean
    bruteId?: boolean
    opponentId?: boolean
    winnerId?: boolean
    logs?: boolean
    createdAt?: boolean
  }

  export type CombatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bruteId" | "opponentId" | "winnerId" | "logs" | "createdAt", ExtArgs["result"]["combat"]>
  export type CombatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    opponent?: boolean | BruteDefaultArgs<ExtArgs>
  }
  export type CombatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    opponent?: boolean | BruteDefaultArgs<ExtArgs>
  }
  export type CombatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brute?: boolean | BruteDefaultArgs<ExtArgs>
    opponent?: boolean | BruteDefaultArgs<ExtArgs>
  }

  export type $CombatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Combat"
    objects: {
      brute: Prisma.$BrutePayload<ExtArgs>
      opponent: Prisma.$BrutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bruteId: string
      opponentId: string
      winnerId: string | null
      logs: string
      createdAt: Date
    }, ExtArgs["result"]["combat"]>
    composites: {}
  }

  type CombatGetPayload<S extends boolean | null | undefined | CombatDefaultArgs> = $Result.GetResult<Prisma.$CombatPayload, S>

  type CombatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CombatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CombatCountAggregateInputType | true
    }

  export interface CombatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Combat'], meta: { name: 'Combat' } }
    /**
     * Find zero or one Combat that matches the filter.
     * @param {CombatFindUniqueArgs} args - Arguments to find a Combat
     * @example
     * // Get one Combat
     * const combat = await prisma.combat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CombatFindUniqueArgs>(args: SelectSubset<T, CombatFindUniqueArgs<ExtArgs>>): Prisma__CombatClient<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Combat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CombatFindUniqueOrThrowArgs} args - Arguments to find a Combat
     * @example
     * // Get one Combat
     * const combat = await prisma.combat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CombatFindUniqueOrThrowArgs>(args: SelectSubset<T, CombatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CombatClient<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombatFindFirstArgs} args - Arguments to find a Combat
     * @example
     * // Get one Combat
     * const combat = await prisma.combat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CombatFindFirstArgs>(args?: SelectSubset<T, CombatFindFirstArgs<ExtArgs>>): Prisma__CombatClient<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Combat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombatFindFirstOrThrowArgs} args - Arguments to find a Combat
     * @example
     * // Get one Combat
     * const combat = await prisma.combat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CombatFindFirstOrThrowArgs>(args?: SelectSubset<T, CombatFindFirstOrThrowArgs<ExtArgs>>): Prisma__CombatClient<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Combats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Combats
     * const combats = await prisma.combat.findMany()
     * 
     * // Get first 10 Combats
     * const combats = await prisma.combat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const combatWithIdOnly = await prisma.combat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CombatFindManyArgs>(args?: SelectSubset<T, CombatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Combat.
     * @param {CombatCreateArgs} args - Arguments to create a Combat.
     * @example
     * // Create one Combat
     * const Combat = await prisma.combat.create({
     *   data: {
     *     // ... data to create a Combat
     *   }
     * })
     * 
     */
    create<T extends CombatCreateArgs>(args: SelectSubset<T, CombatCreateArgs<ExtArgs>>): Prisma__CombatClient<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Combats.
     * @param {CombatCreateManyArgs} args - Arguments to create many Combats.
     * @example
     * // Create many Combats
     * const combat = await prisma.combat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CombatCreateManyArgs>(args?: SelectSubset<T, CombatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Combats and returns the data saved in the database.
     * @param {CombatCreateManyAndReturnArgs} args - Arguments to create many Combats.
     * @example
     * // Create many Combats
     * const combat = await prisma.combat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Combats and only return the `id`
     * const combatWithIdOnly = await prisma.combat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CombatCreateManyAndReturnArgs>(args?: SelectSubset<T, CombatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Combat.
     * @param {CombatDeleteArgs} args - Arguments to delete one Combat.
     * @example
     * // Delete one Combat
     * const Combat = await prisma.combat.delete({
     *   where: {
     *     // ... filter to delete one Combat
     *   }
     * })
     * 
     */
    delete<T extends CombatDeleteArgs>(args: SelectSubset<T, CombatDeleteArgs<ExtArgs>>): Prisma__CombatClient<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Combat.
     * @param {CombatUpdateArgs} args - Arguments to update one Combat.
     * @example
     * // Update one Combat
     * const combat = await prisma.combat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CombatUpdateArgs>(args: SelectSubset<T, CombatUpdateArgs<ExtArgs>>): Prisma__CombatClient<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Combats.
     * @param {CombatDeleteManyArgs} args - Arguments to filter Combats to delete.
     * @example
     * // Delete a few Combats
     * const { count } = await prisma.combat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CombatDeleteManyArgs>(args?: SelectSubset<T, CombatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Combats
     * const combat = await prisma.combat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CombatUpdateManyArgs>(args: SelectSubset<T, CombatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combats and returns the data updated in the database.
     * @param {CombatUpdateManyAndReturnArgs} args - Arguments to update many Combats.
     * @example
     * // Update many Combats
     * const combat = await prisma.combat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Combats and only return the `id`
     * const combatWithIdOnly = await prisma.combat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CombatUpdateManyAndReturnArgs>(args: SelectSubset<T, CombatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Combat.
     * @param {CombatUpsertArgs} args - Arguments to update or create a Combat.
     * @example
     * // Update or create a Combat
     * const combat = await prisma.combat.upsert({
     *   create: {
     *     // ... data to create a Combat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Combat we want to update
     *   }
     * })
     */
    upsert<T extends CombatUpsertArgs>(args: SelectSubset<T, CombatUpsertArgs<ExtArgs>>): Prisma__CombatClient<$Result.GetResult<Prisma.$CombatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Combats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombatCountArgs} args - Arguments to filter Combats to count.
     * @example
     * // Count the number of Combats
     * const count = await prisma.combat.count({
     *   where: {
     *     // ... the filter for the Combats we want to count
     *   }
     * })
    **/
    count<T extends CombatCountArgs>(
      args?: Subset<T, CombatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CombatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Combat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CombatAggregateArgs>(args: Subset<T, CombatAggregateArgs>): Prisma.PrismaPromise<GetCombatAggregateType<T>>

    /**
     * Group by Combat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CombatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CombatGroupByArgs['orderBy'] }
        : { orderBy?: CombatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CombatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCombatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Combat model
   */
  readonly fields: CombatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Combat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CombatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brute<T extends BruteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BruteDefaultArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opponent<T extends BruteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BruteDefaultArgs<ExtArgs>>): Prisma__BruteClient<$Result.GetResult<Prisma.$BrutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Combat model
   */
  interface CombatFieldRefs {
    readonly id: FieldRef<"Combat", 'String'>
    readonly bruteId: FieldRef<"Combat", 'String'>
    readonly opponentId: FieldRef<"Combat", 'String'>
    readonly winnerId: FieldRef<"Combat", 'String'>
    readonly logs: FieldRef<"Combat", 'String'>
    readonly createdAt: FieldRef<"Combat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Combat findUnique
   */
  export type CombatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    /**
     * Filter, which Combat to fetch.
     */
    where: CombatWhereUniqueInput
  }

  /**
   * Combat findUniqueOrThrow
   */
  export type CombatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    /**
     * Filter, which Combat to fetch.
     */
    where: CombatWhereUniqueInput
  }

  /**
   * Combat findFirst
   */
  export type CombatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    /**
     * Filter, which Combat to fetch.
     */
    where?: CombatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combats to fetch.
     */
    orderBy?: CombatOrderByWithRelationInput | CombatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combats.
     */
    cursor?: CombatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combats.
     */
    distinct?: CombatScalarFieldEnum | CombatScalarFieldEnum[]
  }

  /**
   * Combat findFirstOrThrow
   */
  export type CombatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    /**
     * Filter, which Combat to fetch.
     */
    where?: CombatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combats to fetch.
     */
    orderBy?: CombatOrderByWithRelationInput | CombatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combats.
     */
    cursor?: CombatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combats.
     */
    distinct?: CombatScalarFieldEnum | CombatScalarFieldEnum[]
  }

  /**
   * Combat findMany
   */
  export type CombatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    /**
     * Filter, which Combats to fetch.
     */
    where?: CombatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combats to fetch.
     */
    orderBy?: CombatOrderByWithRelationInput | CombatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Combats.
     */
    cursor?: CombatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combats.
     */
    skip?: number
    distinct?: CombatScalarFieldEnum | CombatScalarFieldEnum[]
  }

  /**
   * Combat create
   */
  export type CombatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    /**
     * The data needed to create a Combat.
     */
    data: XOR<CombatCreateInput, CombatUncheckedCreateInput>
  }

  /**
   * Combat createMany
   */
  export type CombatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Combats.
     */
    data: CombatCreateManyInput | CombatCreateManyInput[]
  }

  /**
   * Combat createManyAndReturn
   */
  export type CombatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * The data used to create many Combats.
     */
    data: CombatCreateManyInput | CombatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Combat update
   */
  export type CombatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    /**
     * The data needed to update a Combat.
     */
    data: XOR<CombatUpdateInput, CombatUncheckedUpdateInput>
    /**
     * Choose, which Combat to update.
     */
    where: CombatWhereUniqueInput
  }

  /**
   * Combat updateMany
   */
  export type CombatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Combats.
     */
    data: XOR<CombatUpdateManyMutationInput, CombatUncheckedUpdateManyInput>
    /**
     * Filter which Combats to update
     */
    where?: CombatWhereInput
    /**
     * Limit how many Combats to update.
     */
    limit?: number
  }

  /**
   * Combat updateManyAndReturn
   */
  export type CombatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * The data used to update Combats.
     */
    data: XOR<CombatUpdateManyMutationInput, CombatUncheckedUpdateManyInput>
    /**
     * Filter which Combats to update
     */
    where?: CombatWhereInput
    /**
     * Limit how many Combats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Combat upsert
   */
  export type CombatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    /**
     * The filter to search for the Combat to update in case it exists.
     */
    where: CombatWhereUniqueInput
    /**
     * In case the Combat found by the `where` argument doesn't exist, create a new Combat with this data.
     */
    create: XOR<CombatCreateInput, CombatUncheckedCreateInput>
    /**
     * In case the Combat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CombatUpdateInput, CombatUncheckedUpdateInput>
  }

  /**
   * Combat delete
   */
  export type CombatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
    /**
     * Filter which Combat to delete.
     */
    where: CombatWhereUniqueInput
  }

  /**
   * Combat deleteMany
   */
  export type CombatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combats to delete
     */
    where?: CombatWhereInput
    /**
     * Limit how many Combats to delete.
     */
    limit?: number
  }

  /**
   * Combat without action
   */
  export type CombatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combat
     */
    select?: CombatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Combat
     */
    omit?: CombatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CombatInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BruteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    experience: 'experience',
    strength: 'strength',
    agility: 'agility',
    speed: 'speed',
    health: 'health',
    intelligence: 'intelligence',
    victories: 'victories',
    defeats: 'defeats',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type BruteScalarFieldEnum = (typeof BruteScalarFieldEnum)[keyof typeof BruteScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    rarity: 'rarity',
    strengthBonus: 'strengthBonus',
    agilityBonus: 'agilityBonus',
    speedBonus: 'speedBonus',
    healthBonus: 'healthBonus',
    intelligenceBonus: 'intelligenceBonus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const BruteItemScalarFieldEnum: {
    id: 'id',
    bruteId: 'bruteId',
    itemId: 'itemId',
    equipped: 'equipped',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BruteItemScalarFieldEnum = (typeof BruteItemScalarFieldEnum)[keyof typeof BruteItemScalarFieldEnum]


  export const CombatScalarFieldEnum: {
    id: 'id',
    bruteId: 'bruteId',
    opponentId: 'opponentId',
    winnerId: 'winnerId',
    logs: 'logs',
    createdAt: 'createdAt'
  };

  export type CombatScalarFieldEnum = (typeof CombatScalarFieldEnum)[keyof typeof CombatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    brutes?: BruteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brutes?: BruteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    brutes?: BruteListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BruteWhereInput = {
    AND?: BruteWhereInput | BruteWhereInput[]
    OR?: BruteWhereInput[]
    NOT?: BruteWhereInput | BruteWhereInput[]
    id?: StringFilter<"Brute"> | string
    name?: StringFilter<"Brute"> | string
    level?: IntFilter<"Brute"> | number
    experience?: IntFilter<"Brute"> | number
    strength?: IntFilter<"Brute"> | number
    agility?: IntFilter<"Brute"> | number
    speed?: IntFilter<"Brute"> | number
    health?: IntFilter<"Brute"> | number
    intelligence?: IntFilter<"Brute"> | number
    victories?: IntFilter<"Brute"> | number
    defeats?: IntFilter<"Brute"> | number
    createdAt?: DateTimeFilter<"Brute"> | Date | string
    updatedAt?: DateTimeFilter<"Brute"> | Date | string
    userId?: StringFilter<"Brute"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: BruteItemListRelationFilter
    combats?: CombatListRelationFilter
    opponentCombats?: CombatListRelationFilter
  }

  export type BruteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    strength?: SortOrder
    agility?: SortOrder
    speed?: SortOrder
    health?: SortOrder
    intelligence?: SortOrder
    victories?: SortOrder
    defeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: BruteItemOrderByRelationAggregateInput
    combats?: CombatOrderByRelationAggregateInput
    opponentCombats?: CombatOrderByRelationAggregateInput
  }

  export type BruteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BruteWhereInput | BruteWhereInput[]
    OR?: BruteWhereInput[]
    NOT?: BruteWhereInput | BruteWhereInput[]
    name?: StringFilter<"Brute"> | string
    level?: IntFilter<"Brute"> | number
    experience?: IntFilter<"Brute"> | number
    strength?: IntFilter<"Brute"> | number
    agility?: IntFilter<"Brute"> | number
    speed?: IntFilter<"Brute"> | number
    health?: IntFilter<"Brute"> | number
    intelligence?: IntFilter<"Brute"> | number
    victories?: IntFilter<"Brute"> | number
    defeats?: IntFilter<"Brute"> | number
    createdAt?: DateTimeFilter<"Brute"> | Date | string
    updatedAt?: DateTimeFilter<"Brute"> | Date | string
    userId?: StringFilter<"Brute"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: BruteItemListRelationFilter
    combats?: CombatListRelationFilter
    opponentCombats?: CombatListRelationFilter
  }, "id">

  export type BruteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    strength?: SortOrder
    agility?: SortOrder
    speed?: SortOrder
    health?: SortOrder
    intelligence?: SortOrder
    victories?: SortOrder
    defeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: BruteCountOrderByAggregateInput
    _avg?: BruteAvgOrderByAggregateInput
    _max?: BruteMaxOrderByAggregateInput
    _min?: BruteMinOrderByAggregateInput
    _sum?: BruteSumOrderByAggregateInput
  }

  export type BruteScalarWhereWithAggregatesInput = {
    AND?: BruteScalarWhereWithAggregatesInput | BruteScalarWhereWithAggregatesInput[]
    OR?: BruteScalarWhereWithAggregatesInput[]
    NOT?: BruteScalarWhereWithAggregatesInput | BruteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brute"> | string
    name?: StringWithAggregatesFilter<"Brute"> | string
    level?: IntWithAggregatesFilter<"Brute"> | number
    experience?: IntWithAggregatesFilter<"Brute"> | number
    strength?: IntWithAggregatesFilter<"Brute"> | number
    agility?: IntWithAggregatesFilter<"Brute"> | number
    speed?: IntWithAggregatesFilter<"Brute"> | number
    health?: IntWithAggregatesFilter<"Brute"> | number
    intelligence?: IntWithAggregatesFilter<"Brute"> | number
    victories?: IntWithAggregatesFilter<"Brute"> | number
    defeats?: IntWithAggregatesFilter<"Brute"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Brute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brute"> | Date | string
    userId?: StringWithAggregatesFilter<"Brute"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    rarity?: StringFilter<"Item"> | string
    strengthBonus?: IntFilter<"Item"> | number
    agilityBonus?: IntFilter<"Item"> | number
    speedBonus?: IntFilter<"Item"> | number
    healthBonus?: IntFilter<"Item"> | number
    intelligenceBonus?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    bruteItems?: BruteItemListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rarity?: SortOrder
    strengthBonus?: SortOrder
    agilityBonus?: SortOrder
    speedBonus?: SortOrder
    healthBonus?: SortOrder
    intelligenceBonus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bruteItems?: BruteItemOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    rarity?: StringFilter<"Item"> | string
    strengthBonus?: IntFilter<"Item"> | number
    agilityBonus?: IntFilter<"Item"> | number
    speedBonus?: IntFilter<"Item"> | number
    healthBonus?: IntFilter<"Item"> | number
    intelligenceBonus?: IntFilter<"Item"> | number
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    bruteItems?: BruteItemListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rarity?: SortOrder
    strengthBonus?: SortOrder
    agilityBonus?: SortOrder
    speedBonus?: SortOrder
    healthBonus?: SortOrder
    intelligenceBonus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    description?: StringWithAggregatesFilter<"Item"> | string
    rarity?: StringWithAggregatesFilter<"Item"> | string
    strengthBonus?: IntWithAggregatesFilter<"Item"> | number
    agilityBonus?: IntWithAggregatesFilter<"Item"> | number
    speedBonus?: IntWithAggregatesFilter<"Item"> | number
    healthBonus?: IntWithAggregatesFilter<"Item"> | number
    intelligenceBonus?: IntWithAggregatesFilter<"Item"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type BruteItemWhereInput = {
    AND?: BruteItemWhereInput | BruteItemWhereInput[]
    OR?: BruteItemWhereInput[]
    NOT?: BruteItemWhereInput | BruteItemWhereInput[]
    id?: StringFilter<"BruteItem"> | string
    bruteId?: StringFilter<"BruteItem"> | string
    itemId?: StringFilter<"BruteItem"> | string
    equipped?: BoolFilter<"BruteItem"> | boolean
    createdAt?: DateTimeFilter<"BruteItem"> | Date | string
    updatedAt?: DateTimeFilter<"BruteItem"> | Date | string
    brute?: XOR<BruteScalarRelationFilter, BruteWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type BruteItemOrderByWithRelationInput = {
    id?: SortOrder
    bruteId?: SortOrder
    itemId?: SortOrder
    equipped?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brute?: BruteOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type BruteItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bruteId_itemId?: BruteItemBruteIdItemIdCompoundUniqueInput
    AND?: BruteItemWhereInput | BruteItemWhereInput[]
    OR?: BruteItemWhereInput[]
    NOT?: BruteItemWhereInput | BruteItemWhereInput[]
    bruteId?: StringFilter<"BruteItem"> | string
    itemId?: StringFilter<"BruteItem"> | string
    equipped?: BoolFilter<"BruteItem"> | boolean
    createdAt?: DateTimeFilter<"BruteItem"> | Date | string
    updatedAt?: DateTimeFilter<"BruteItem"> | Date | string
    brute?: XOR<BruteScalarRelationFilter, BruteWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id" | "bruteId_itemId">

  export type BruteItemOrderByWithAggregationInput = {
    id?: SortOrder
    bruteId?: SortOrder
    itemId?: SortOrder
    equipped?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BruteItemCountOrderByAggregateInput
    _max?: BruteItemMaxOrderByAggregateInput
    _min?: BruteItemMinOrderByAggregateInput
  }

  export type BruteItemScalarWhereWithAggregatesInput = {
    AND?: BruteItemScalarWhereWithAggregatesInput | BruteItemScalarWhereWithAggregatesInput[]
    OR?: BruteItemScalarWhereWithAggregatesInput[]
    NOT?: BruteItemScalarWhereWithAggregatesInput | BruteItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BruteItem"> | string
    bruteId?: StringWithAggregatesFilter<"BruteItem"> | string
    itemId?: StringWithAggregatesFilter<"BruteItem"> | string
    equipped?: BoolWithAggregatesFilter<"BruteItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BruteItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BruteItem"> | Date | string
  }

  export type CombatWhereInput = {
    AND?: CombatWhereInput | CombatWhereInput[]
    OR?: CombatWhereInput[]
    NOT?: CombatWhereInput | CombatWhereInput[]
    id?: StringFilter<"Combat"> | string
    bruteId?: StringFilter<"Combat"> | string
    opponentId?: StringFilter<"Combat"> | string
    winnerId?: StringNullableFilter<"Combat"> | string | null
    logs?: StringFilter<"Combat"> | string
    createdAt?: DateTimeFilter<"Combat"> | Date | string
    brute?: XOR<BruteScalarRelationFilter, BruteWhereInput>
    opponent?: XOR<BruteScalarRelationFilter, BruteWhereInput>
  }

  export type CombatOrderByWithRelationInput = {
    id?: SortOrder
    bruteId?: SortOrder
    opponentId?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    logs?: SortOrder
    createdAt?: SortOrder
    brute?: BruteOrderByWithRelationInput
    opponent?: BruteOrderByWithRelationInput
  }

  export type CombatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CombatWhereInput | CombatWhereInput[]
    OR?: CombatWhereInput[]
    NOT?: CombatWhereInput | CombatWhereInput[]
    bruteId?: StringFilter<"Combat"> | string
    opponentId?: StringFilter<"Combat"> | string
    winnerId?: StringNullableFilter<"Combat"> | string | null
    logs?: StringFilter<"Combat"> | string
    createdAt?: DateTimeFilter<"Combat"> | Date | string
    brute?: XOR<BruteScalarRelationFilter, BruteWhereInput>
    opponent?: XOR<BruteScalarRelationFilter, BruteWhereInput>
  }, "id">

  export type CombatOrderByWithAggregationInput = {
    id?: SortOrder
    bruteId?: SortOrder
    opponentId?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    logs?: SortOrder
    createdAt?: SortOrder
    _count?: CombatCountOrderByAggregateInput
    _max?: CombatMaxOrderByAggregateInput
    _min?: CombatMinOrderByAggregateInput
  }

  export type CombatScalarWhereWithAggregatesInput = {
    AND?: CombatScalarWhereWithAggregatesInput | CombatScalarWhereWithAggregatesInput[]
    OR?: CombatScalarWhereWithAggregatesInput[]
    NOT?: CombatScalarWhereWithAggregatesInput | CombatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Combat"> | string
    bruteId?: StringWithAggregatesFilter<"Combat"> | string
    opponentId?: StringWithAggregatesFilter<"Combat"> | string
    winnerId?: StringNullableWithAggregatesFilter<"Combat"> | string | null
    logs?: StringWithAggregatesFilter<"Combat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Combat"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brutes?: BruteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brutes?: BruteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brutes?: BruteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brutes?: BruteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteCreateInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBrutesInput
    items?: BruteItemCreateNestedManyWithoutBruteInput
    combats?: CombatCreateNestedManyWithoutBruteInput
    opponentCombats?: CombatCreateNestedManyWithoutOpponentInput
  }

  export type BruteUncheckedCreateInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    items?: BruteItemUncheckedCreateNestedManyWithoutBruteInput
    combats?: CombatUncheckedCreateNestedManyWithoutBruteInput
    opponentCombats?: CombatUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type BruteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBrutesNestedInput
    items?: BruteItemUpdateManyWithoutBruteNestedInput
    combats?: CombatUpdateManyWithoutBruteNestedInput
    opponentCombats?: CombatUpdateManyWithoutOpponentNestedInput
  }

  export type BruteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    items?: BruteItemUncheckedUpdateManyWithoutBruteNestedInput
    combats?: CombatUncheckedUpdateManyWithoutBruteNestedInput
    opponentCombats?: CombatUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type BruteCreateManyInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type BruteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    description: string
    rarity?: string
    strengthBonus?: number
    agilityBonus?: number
    speedBonus?: number
    healthBonus?: number
    intelligenceBonus?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bruteItems?: BruteItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    rarity?: string
    strengthBonus?: number
    agilityBonus?: number
    speedBonus?: number
    healthBonus?: number
    intelligenceBonus?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bruteItems?: BruteItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    strengthBonus?: IntFieldUpdateOperationsInput | number
    agilityBonus?: IntFieldUpdateOperationsInput | number
    speedBonus?: IntFieldUpdateOperationsInput | number
    healthBonus?: IntFieldUpdateOperationsInput | number
    intelligenceBonus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bruteItems?: BruteItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    strengthBonus?: IntFieldUpdateOperationsInput | number
    agilityBonus?: IntFieldUpdateOperationsInput | number
    speedBonus?: IntFieldUpdateOperationsInput | number
    healthBonus?: IntFieldUpdateOperationsInput | number
    intelligenceBonus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bruteItems?: BruteItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    description: string
    rarity?: string
    strengthBonus?: number
    agilityBonus?: number
    speedBonus?: number
    healthBonus?: number
    intelligenceBonus?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    strengthBonus?: IntFieldUpdateOperationsInput | number
    agilityBonus?: IntFieldUpdateOperationsInput | number
    speedBonus?: IntFieldUpdateOperationsInput | number
    healthBonus?: IntFieldUpdateOperationsInput | number
    intelligenceBonus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    strengthBonus?: IntFieldUpdateOperationsInput | number
    agilityBonus?: IntFieldUpdateOperationsInput | number
    speedBonus?: IntFieldUpdateOperationsInput | number
    healthBonus?: IntFieldUpdateOperationsInput | number
    intelligenceBonus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteItemCreateInput = {
    id?: string
    equipped?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    brute: BruteCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutBruteItemsInput
  }

  export type BruteItemUncheckedCreateInput = {
    id?: string
    bruteId: string
    itemId: string
    equipped?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BruteItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brute?: BruteUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutBruteItemsNestedInput
  }

  export type BruteItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bruteId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteItemCreateManyInput = {
    id?: string
    bruteId: string
    itemId: string
    equipped?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BruteItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bruteId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CombatCreateInput = {
    id?: string
    winnerId?: string | null
    logs: string
    createdAt?: Date | string
    brute: BruteCreateNestedOneWithoutCombatsInput
    opponent: BruteCreateNestedOneWithoutOpponentCombatsInput
  }

  export type CombatUncheckedCreateInput = {
    id?: string
    bruteId: string
    opponentId: string
    winnerId?: string | null
    logs: string
    createdAt?: Date | string
  }

  export type CombatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brute?: BruteUpdateOneRequiredWithoutCombatsNestedInput
    opponent?: BruteUpdateOneRequiredWithoutOpponentCombatsNestedInput
  }

  export type CombatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bruteId?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CombatCreateManyInput = {
    id?: string
    bruteId: string
    opponentId: string
    winnerId?: string | null
    logs: string
    createdAt?: Date | string
  }

  export type CombatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CombatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bruteId?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BruteListRelationFilter = {
    every?: BruteWhereInput
    some?: BruteWhereInput
    none?: BruteWhereInput
  }

  export type BruteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BruteItemListRelationFilter = {
    every?: BruteItemWhereInput
    some?: BruteItemWhereInput
    none?: BruteItemWhereInput
  }

  export type CombatListRelationFilter = {
    every?: CombatWhereInput
    some?: CombatWhereInput
    none?: CombatWhereInput
  }

  export type BruteItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CombatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BruteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    strength?: SortOrder
    agility?: SortOrder
    speed?: SortOrder
    health?: SortOrder
    intelligence?: SortOrder
    victories?: SortOrder
    defeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BruteAvgOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
    strength?: SortOrder
    agility?: SortOrder
    speed?: SortOrder
    health?: SortOrder
    intelligence?: SortOrder
    victories?: SortOrder
    defeats?: SortOrder
  }

  export type BruteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    strength?: SortOrder
    agility?: SortOrder
    speed?: SortOrder
    health?: SortOrder
    intelligence?: SortOrder
    victories?: SortOrder
    defeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BruteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    strength?: SortOrder
    agility?: SortOrder
    speed?: SortOrder
    health?: SortOrder
    intelligence?: SortOrder
    victories?: SortOrder
    defeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BruteSumOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
    strength?: SortOrder
    agility?: SortOrder
    speed?: SortOrder
    health?: SortOrder
    intelligence?: SortOrder
    victories?: SortOrder
    defeats?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rarity?: SortOrder
    strengthBonus?: SortOrder
    agilityBonus?: SortOrder
    speedBonus?: SortOrder
    healthBonus?: SortOrder
    intelligenceBonus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    strengthBonus?: SortOrder
    agilityBonus?: SortOrder
    speedBonus?: SortOrder
    healthBonus?: SortOrder
    intelligenceBonus?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rarity?: SortOrder
    strengthBonus?: SortOrder
    agilityBonus?: SortOrder
    speedBonus?: SortOrder
    healthBonus?: SortOrder
    intelligenceBonus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rarity?: SortOrder
    strengthBonus?: SortOrder
    agilityBonus?: SortOrder
    speedBonus?: SortOrder
    healthBonus?: SortOrder
    intelligenceBonus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    strengthBonus?: SortOrder
    agilityBonus?: SortOrder
    speedBonus?: SortOrder
    healthBonus?: SortOrder
    intelligenceBonus?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BruteScalarRelationFilter = {
    is?: BruteWhereInput
    isNot?: BruteWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type BruteItemBruteIdItemIdCompoundUniqueInput = {
    bruteId: string
    itemId: string
  }

  export type BruteItemCountOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    itemId?: SortOrder
    equipped?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BruteItemMaxOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    itemId?: SortOrder
    equipped?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BruteItemMinOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    itemId?: SortOrder
    equipped?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CombatCountOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    opponentId?: SortOrder
    winnerId?: SortOrder
    logs?: SortOrder
    createdAt?: SortOrder
  }

  export type CombatMaxOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    opponentId?: SortOrder
    winnerId?: SortOrder
    logs?: SortOrder
    createdAt?: SortOrder
  }

  export type CombatMinOrderByAggregateInput = {
    id?: SortOrder
    bruteId?: SortOrder
    opponentId?: SortOrder
    winnerId?: SortOrder
    logs?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BruteCreateNestedManyWithoutUserInput = {
    create?: XOR<BruteCreateWithoutUserInput, BruteUncheckedCreateWithoutUserInput> | BruteCreateWithoutUserInput[] | BruteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BruteCreateOrConnectWithoutUserInput | BruteCreateOrConnectWithoutUserInput[]
    createMany?: BruteCreateManyUserInputEnvelope
    connect?: BruteWhereUniqueInput | BruteWhereUniqueInput[]
  }

  export type BruteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BruteCreateWithoutUserInput, BruteUncheckedCreateWithoutUserInput> | BruteCreateWithoutUserInput[] | BruteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BruteCreateOrConnectWithoutUserInput | BruteCreateOrConnectWithoutUserInput[]
    createMany?: BruteCreateManyUserInputEnvelope
    connect?: BruteWhereUniqueInput | BruteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BruteUpdateManyWithoutUserNestedInput = {
    create?: XOR<BruteCreateWithoutUserInput, BruteUncheckedCreateWithoutUserInput> | BruteCreateWithoutUserInput[] | BruteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BruteCreateOrConnectWithoutUserInput | BruteCreateOrConnectWithoutUserInput[]
    upsert?: BruteUpsertWithWhereUniqueWithoutUserInput | BruteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BruteCreateManyUserInputEnvelope
    set?: BruteWhereUniqueInput | BruteWhereUniqueInput[]
    disconnect?: BruteWhereUniqueInput | BruteWhereUniqueInput[]
    delete?: BruteWhereUniqueInput | BruteWhereUniqueInput[]
    connect?: BruteWhereUniqueInput | BruteWhereUniqueInput[]
    update?: BruteUpdateWithWhereUniqueWithoutUserInput | BruteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BruteUpdateManyWithWhereWithoutUserInput | BruteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BruteScalarWhereInput | BruteScalarWhereInput[]
  }

  export type BruteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BruteCreateWithoutUserInput, BruteUncheckedCreateWithoutUserInput> | BruteCreateWithoutUserInput[] | BruteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BruteCreateOrConnectWithoutUserInput | BruteCreateOrConnectWithoutUserInput[]
    upsert?: BruteUpsertWithWhereUniqueWithoutUserInput | BruteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BruteCreateManyUserInputEnvelope
    set?: BruteWhereUniqueInput | BruteWhereUniqueInput[]
    disconnect?: BruteWhereUniqueInput | BruteWhereUniqueInput[]
    delete?: BruteWhereUniqueInput | BruteWhereUniqueInput[]
    connect?: BruteWhereUniqueInput | BruteWhereUniqueInput[]
    update?: BruteUpdateWithWhereUniqueWithoutUserInput | BruteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BruteUpdateManyWithWhereWithoutUserInput | BruteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BruteScalarWhereInput | BruteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBrutesInput = {
    create?: XOR<UserCreateWithoutBrutesInput, UserUncheckedCreateWithoutBrutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrutesInput
    connect?: UserWhereUniqueInput
  }

  export type BruteItemCreateNestedManyWithoutBruteInput = {
    create?: XOR<BruteItemCreateWithoutBruteInput, BruteItemUncheckedCreateWithoutBruteInput> | BruteItemCreateWithoutBruteInput[] | BruteItemUncheckedCreateWithoutBruteInput[]
    connectOrCreate?: BruteItemCreateOrConnectWithoutBruteInput | BruteItemCreateOrConnectWithoutBruteInput[]
    createMany?: BruteItemCreateManyBruteInputEnvelope
    connect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
  }

  export type CombatCreateNestedManyWithoutBruteInput = {
    create?: XOR<CombatCreateWithoutBruteInput, CombatUncheckedCreateWithoutBruteInput> | CombatCreateWithoutBruteInput[] | CombatUncheckedCreateWithoutBruteInput[]
    connectOrCreate?: CombatCreateOrConnectWithoutBruteInput | CombatCreateOrConnectWithoutBruteInput[]
    createMany?: CombatCreateManyBruteInputEnvelope
    connect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
  }

  export type CombatCreateNestedManyWithoutOpponentInput = {
    create?: XOR<CombatCreateWithoutOpponentInput, CombatUncheckedCreateWithoutOpponentInput> | CombatCreateWithoutOpponentInput[] | CombatUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: CombatCreateOrConnectWithoutOpponentInput | CombatCreateOrConnectWithoutOpponentInput[]
    createMany?: CombatCreateManyOpponentInputEnvelope
    connect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
  }

  export type BruteItemUncheckedCreateNestedManyWithoutBruteInput = {
    create?: XOR<BruteItemCreateWithoutBruteInput, BruteItemUncheckedCreateWithoutBruteInput> | BruteItemCreateWithoutBruteInput[] | BruteItemUncheckedCreateWithoutBruteInput[]
    connectOrCreate?: BruteItemCreateOrConnectWithoutBruteInput | BruteItemCreateOrConnectWithoutBruteInput[]
    createMany?: BruteItemCreateManyBruteInputEnvelope
    connect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
  }

  export type CombatUncheckedCreateNestedManyWithoutBruteInput = {
    create?: XOR<CombatCreateWithoutBruteInput, CombatUncheckedCreateWithoutBruteInput> | CombatCreateWithoutBruteInput[] | CombatUncheckedCreateWithoutBruteInput[]
    connectOrCreate?: CombatCreateOrConnectWithoutBruteInput | CombatCreateOrConnectWithoutBruteInput[]
    createMany?: CombatCreateManyBruteInputEnvelope
    connect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
  }

  export type CombatUncheckedCreateNestedManyWithoutOpponentInput = {
    create?: XOR<CombatCreateWithoutOpponentInput, CombatUncheckedCreateWithoutOpponentInput> | CombatCreateWithoutOpponentInput[] | CombatUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: CombatCreateOrConnectWithoutOpponentInput | CombatCreateOrConnectWithoutOpponentInput[]
    createMany?: CombatCreateManyOpponentInputEnvelope
    connect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBrutesNestedInput = {
    create?: XOR<UserCreateWithoutBrutesInput, UserUncheckedCreateWithoutBrutesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrutesInput
    upsert?: UserUpsertWithoutBrutesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBrutesInput, UserUpdateWithoutBrutesInput>, UserUncheckedUpdateWithoutBrutesInput>
  }

  export type BruteItemUpdateManyWithoutBruteNestedInput = {
    create?: XOR<BruteItemCreateWithoutBruteInput, BruteItemUncheckedCreateWithoutBruteInput> | BruteItemCreateWithoutBruteInput[] | BruteItemUncheckedCreateWithoutBruteInput[]
    connectOrCreate?: BruteItemCreateOrConnectWithoutBruteInput | BruteItemCreateOrConnectWithoutBruteInput[]
    upsert?: BruteItemUpsertWithWhereUniqueWithoutBruteInput | BruteItemUpsertWithWhereUniqueWithoutBruteInput[]
    createMany?: BruteItemCreateManyBruteInputEnvelope
    set?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    disconnect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    delete?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    connect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    update?: BruteItemUpdateWithWhereUniqueWithoutBruteInput | BruteItemUpdateWithWhereUniqueWithoutBruteInput[]
    updateMany?: BruteItemUpdateManyWithWhereWithoutBruteInput | BruteItemUpdateManyWithWhereWithoutBruteInput[]
    deleteMany?: BruteItemScalarWhereInput | BruteItemScalarWhereInput[]
  }

  export type CombatUpdateManyWithoutBruteNestedInput = {
    create?: XOR<CombatCreateWithoutBruteInput, CombatUncheckedCreateWithoutBruteInput> | CombatCreateWithoutBruteInput[] | CombatUncheckedCreateWithoutBruteInput[]
    connectOrCreate?: CombatCreateOrConnectWithoutBruteInput | CombatCreateOrConnectWithoutBruteInput[]
    upsert?: CombatUpsertWithWhereUniqueWithoutBruteInput | CombatUpsertWithWhereUniqueWithoutBruteInput[]
    createMany?: CombatCreateManyBruteInputEnvelope
    set?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    disconnect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    delete?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    connect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    update?: CombatUpdateWithWhereUniqueWithoutBruteInput | CombatUpdateWithWhereUniqueWithoutBruteInput[]
    updateMany?: CombatUpdateManyWithWhereWithoutBruteInput | CombatUpdateManyWithWhereWithoutBruteInput[]
    deleteMany?: CombatScalarWhereInput | CombatScalarWhereInput[]
  }

  export type CombatUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<CombatCreateWithoutOpponentInput, CombatUncheckedCreateWithoutOpponentInput> | CombatCreateWithoutOpponentInput[] | CombatUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: CombatCreateOrConnectWithoutOpponentInput | CombatCreateOrConnectWithoutOpponentInput[]
    upsert?: CombatUpsertWithWhereUniqueWithoutOpponentInput | CombatUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: CombatCreateManyOpponentInputEnvelope
    set?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    disconnect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    delete?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    connect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    update?: CombatUpdateWithWhereUniqueWithoutOpponentInput | CombatUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: CombatUpdateManyWithWhereWithoutOpponentInput | CombatUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: CombatScalarWhereInput | CombatScalarWhereInput[]
  }

  export type BruteItemUncheckedUpdateManyWithoutBruteNestedInput = {
    create?: XOR<BruteItemCreateWithoutBruteInput, BruteItemUncheckedCreateWithoutBruteInput> | BruteItemCreateWithoutBruteInput[] | BruteItemUncheckedCreateWithoutBruteInput[]
    connectOrCreate?: BruteItemCreateOrConnectWithoutBruteInput | BruteItemCreateOrConnectWithoutBruteInput[]
    upsert?: BruteItemUpsertWithWhereUniqueWithoutBruteInput | BruteItemUpsertWithWhereUniqueWithoutBruteInput[]
    createMany?: BruteItemCreateManyBruteInputEnvelope
    set?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    disconnect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    delete?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    connect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    update?: BruteItemUpdateWithWhereUniqueWithoutBruteInput | BruteItemUpdateWithWhereUniqueWithoutBruteInput[]
    updateMany?: BruteItemUpdateManyWithWhereWithoutBruteInput | BruteItemUpdateManyWithWhereWithoutBruteInput[]
    deleteMany?: BruteItemScalarWhereInput | BruteItemScalarWhereInput[]
  }

  export type CombatUncheckedUpdateManyWithoutBruteNestedInput = {
    create?: XOR<CombatCreateWithoutBruteInput, CombatUncheckedCreateWithoutBruteInput> | CombatCreateWithoutBruteInput[] | CombatUncheckedCreateWithoutBruteInput[]
    connectOrCreate?: CombatCreateOrConnectWithoutBruteInput | CombatCreateOrConnectWithoutBruteInput[]
    upsert?: CombatUpsertWithWhereUniqueWithoutBruteInput | CombatUpsertWithWhereUniqueWithoutBruteInput[]
    createMany?: CombatCreateManyBruteInputEnvelope
    set?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    disconnect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    delete?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    connect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    update?: CombatUpdateWithWhereUniqueWithoutBruteInput | CombatUpdateWithWhereUniqueWithoutBruteInput[]
    updateMany?: CombatUpdateManyWithWhereWithoutBruteInput | CombatUpdateManyWithWhereWithoutBruteInput[]
    deleteMany?: CombatScalarWhereInput | CombatScalarWhereInput[]
  }

  export type CombatUncheckedUpdateManyWithoutOpponentNestedInput = {
    create?: XOR<CombatCreateWithoutOpponentInput, CombatUncheckedCreateWithoutOpponentInput> | CombatCreateWithoutOpponentInput[] | CombatUncheckedCreateWithoutOpponentInput[]
    connectOrCreate?: CombatCreateOrConnectWithoutOpponentInput | CombatCreateOrConnectWithoutOpponentInput[]
    upsert?: CombatUpsertWithWhereUniqueWithoutOpponentInput | CombatUpsertWithWhereUniqueWithoutOpponentInput[]
    createMany?: CombatCreateManyOpponentInputEnvelope
    set?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    disconnect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    delete?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    connect?: CombatWhereUniqueInput | CombatWhereUniqueInput[]
    update?: CombatUpdateWithWhereUniqueWithoutOpponentInput | CombatUpdateWithWhereUniqueWithoutOpponentInput[]
    updateMany?: CombatUpdateManyWithWhereWithoutOpponentInput | CombatUpdateManyWithWhereWithoutOpponentInput[]
    deleteMany?: CombatScalarWhereInput | CombatScalarWhereInput[]
  }

  export type BruteItemCreateNestedManyWithoutItemInput = {
    create?: XOR<BruteItemCreateWithoutItemInput, BruteItemUncheckedCreateWithoutItemInput> | BruteItemCreateWithoutItemInput[] | BruteItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BruteItemCreateOrConnectWithoutItemInput | BruteItemCreateOrConnectWithoutItemInput[]
    createMany?: BruteItemCreateManyItemInputEnvelope
    connect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
  }

  export type BruteItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<BruteItemCreateWithoutItemInput, BruteItemUncheckedCreateWithoutItemInput> | BruteItemCreateWithoutItemInput[] | BruteItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BruteItemCreateOrConnectWithoutItemInput | BruteItemCreateOrConnectWithoutItemInput[]
    createMany?: BruteItemCreateManyItemInputEnvelope
    connect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
  }

  export type BruteItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<BruteItemCreateWithoutItemInput, BruteItemUncheckedCreateWithoutItemInput> | BruteItemCreateWithoutItemInput[] | BruteItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BruteItemCreateOrConnectWithoutItemInput | BruteItemCreateOrConnectWithoutItemInput[]
    upsert?: BruteItemUpsertWithWhereUniqueWithoutItemInput | BruteItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: BruteItemCreateManyItemInputEnvelope
    set?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    disconnect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    delete?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    connect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    update?: BruteItemUpdateWithWhereUniqueWithoutItemInput | BruteItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: BruteItemUpdateManyWithWhereWithoutItemInput | BruteItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: BruteItemScalarWhereInput | BruteItemScalarWhereInput[]
  }

  export type BruteItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<BruteItemCreateWithoutItemInput, BruteItemUncheckedCreateWithoutItemInput> | BruteItemCreateWithoutItemInput[] | BruteItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BruteItemCreateOrConnectWithoutItemInput | BruteItemCreateOrConnectWithoutItemInput[]
    upsert?: BruteItemUpsertWithWhereUniqueWithoutItemInput | BruteItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: BruteItemCreateManyItemInputEnvelope
    set?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    disconnect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    delete?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    connect?: BruteItemWhereUniqueInput | BruteItemWhereUniqueInput[]
    update?: BruteItemUpdateWithWhereUniqueWithoutItemInput | BruteItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: BruteItemUpdateManyWithWhereWithoutItemInput | BruteItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: BruteItemScalarWhereInput | BruteItemScalarWhereInput[]
  }

  export type BruteCreateNestedOneWithoutItemsInput = {
    create?: XOR<BruteCreateWithoutItemsInput, BruteUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutItemsInput
    connect?: BruteWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutBruteItemsInput = {
    create?: XOR<ItemCreateWithoutBruteItemsInput, ItemUncheckedCreateWithoutBruteItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutBruteItemsInput
    connect?: ItemWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BruteUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<BruteCreateWithoutItemsInput, BruteUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutItemsInput
    upsert?: BruteUpsertWithoutItemsInput
    connect?: BruteWhereUniqueInput
    update?: XOR<XOR<BruteUpdateToOneWithWhereWithoutItemsInput, BruteUpdateWithoutItemsInput>, BruteUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutBruteItemsNestedInput = {
    create?: XOR<ItemCreateWithoutBruteItemsInput, ItemUncheckedCreateWithoutBruteItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutBruteItemsInput
    upsert?: ItemUpsertWithoutBruteItemsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutBruteItemsInput, ItemUpdateWithoutBruteItemsInput>, ItemUncheckedUpdateWithoutBruteItemsInput>
  }

  export type BruteCreateNestedOneWithoutCombatsInput = {
    create?: XOR<BruteCreateWithoutCombatsInput, BruteUncheckedCreateWithoutCombatsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutCombatsInput
    connect?: BruteWhereUniqueInput
  }

  export type BruteCreateNestedOneWithoutOpponentCombatsInput = {
    create?: XOR<BruteCreateWithoutOpponentCombatsInput, BruteUncheckedCreateWithoutOpponentCombatsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutOpponentCombatsInput
    connect?: BruteWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BruteUpdateOneRequiredWithoutCombatsNestedInput = {
    create?: XOR<BruteCreateWithoutCombatsInput, BruteUncheckedCreateWithoutCombatsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutCombatsInput
    upsert?: BruteUpsertWithoutCombatsInput
    connect?: BruteWhereUniqueInput
    update?: XOR<XOR<BruteUpdateToOneWithWhereWithoutCombatsInput, BruteUpdateWithoutCombatsInput>, BruteUncheckedUpdateWithoutCombatsInput>
  }

  export type BruteUpdateOneRequiredWithoutOpponentCombatsNestedInput = {
    create?: XOR<BruteCreateWithoutOpponentCombatsInput, BruteUncheckedCreateWithoutOpponentCombatsInput>
    connectOrCreate?: BruteCreateOrConnectWithoutOpponentCombatsInput
    upsert?: BruteUpsertWithoutOpponentCombatsInput
    connect?: BruteWhereUniqueInput
    update?: XOR<XOR<BruteUpdateToOneWithWhereWithoutOpponentCombatsInput, BruteUpdateWithoutOpponentCombatsInput>, BruteUncheckedUpdateWithoutOpponentCombatsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BruteCreateWithoutUserInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BruteItemCreateNestedManyWithoutBruteInput
    combats?: CombatCreateNestedManyWithoutBruteInput
    opponentCombats?: CombatCreateNestedManyWithoutOpponentInput
  }

  export type BruteUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BruteItemUncheckedCreateNestedManyWithoutBruteInput
    combats?: CombatUncheckedCreateNestedManyWithoutBruteInput
    opponentCombats?: CombatUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type BruteCreateOrConnectWithoutUserInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutUserInput, BruteUncheckedCreateWithoutUserInput>
  }

  export type BruteCreateManyUserInputEnvelope = {
    data: BruteCreateManyUserInput | BruteCreateManyUserInput[]
  }

  export type BruteUpsertWithWhereUniqueWithoutUserInput = {
    where: BruteWhereUniqueInput
    update: XOR<BruteUpdateWithoutUserInput, BruteUncheckedUpdateWithoutUserInput>
    create: XOR<BruteCreateWithoutUserInput, BruteUncheckedCreateWithoutUserInput>
  }

  export type BruteUpdateWithWhereUniqueWithoutUserInput = {
    where: BruteWhereUniqueInput
    data: XOR<BruteUpdateWithoutUserInput, BruteUncheckedUpdateWithoutUserInput>
  }

  export type BruteUpdateManyWithWhereWithoutUserInput = {
    where: BruteScalarWhereInput
    data: XOR<BruteUpdateManyMutationInput, BruteUncheckedUpdateManyWithoutUserInput>
  }

  export type BruteScalarWhereInput = {
    AND?: BruteScalarWhereInput | BruteScalarWhereInput[]
    OR?: BruteScalarWhereInput[]
    NOT?: BruteScalarWhereInput | BruteScalarWhereInput[]
    id?: StringFilter<"Brute"> | string
    name?: StringFilter<"Brute"> | string
    level?: IntFilter<"Brute"> | number
    experience?: IntFilter<"Brute"> | number
    strength?: IntFilter<"Brute"> | number
    agility?: IntFilter<"Brute"> | number
    speed?: IntFilter<"Brute"> | number
    health?: IntFilter<"Brute"> | number
    intelligence?: IntFilter<"Brute"> | number
    victories?: IntFilter<"Brute"> | number
    defeats?: IntFilter<"Brute"> | number
    createdAt?: DateTimeFilter<"Brute"> | Date | string
    updatedAt?: DateTimeFilter<"Brute"> | Date | string
    userId?: StringFilter<"Brute"> | string
  }

  export type UserCreateWithoutBrutesInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBrutesInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBrutesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBrutesInput, UserUncheckedCreateWithoutBrutesInput>
  }

  export type BruteItemCreateWithoutBruteInput = {
    id?: string
    equipped?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutBruteItemsInput
  }

  export type BruteItemUncheckedCreateWithoutBruteInput = {
    id?: string
    itemId: string
    equipped?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BruteItemCreateOrConnectWithoutBruteInput = {
    where: BruteItemWhereUniqueInput
    create: XOR<BruteItemCreateWithoutBruteInput, BruteItemUncheckedCreateWithoutBruteInput>
  }

  export type BruteItemCreateManyBruteInputEnvelope = {
    data: BruteItemCreateManyBruteInput | BruteItemCreateManyBruteInput[]
  }

  export type CombatCreateWithoutBruteInput = {
    id?: string
    winnerId?: string | null
    logs: string
    createdAt?: Date | string
    opponent: BruteCreateNestedOneWithoutOpponentCombatsInput
  }

  export type CombatUncheckedCreateWithoutBruteInput = {
    id?: string
    opponentId: string
    winnerId?: string | null
    logs: string
    createdAt?: Date | string
  }

  export type CombatCreateOrConnectWithoutBruteInput = {
    where: CombatWhereUniqueInput
    create: XOR<CombatCreateWithoutBruteInput, CombatUncheckedCreateWithoutBruteInput>
  }

  export type CombatCreateManyBruteInputEnvelope = {
    data: CombatCreateManyBruteInput | CombatCreateManyBruteInput[]
  }

  export type CombatCreateWithoutOpponentInput = {
    id?: string
    winnerId?: string | null
    logs: string
    createdAt?: Date | string
    brute: BruteCreateNestedOneWithoutCombatsInput
  }

  export type CombatUncheckedCreateWithoutOpponentInput = {
    id?: string
    bruteId: string
    winnerId?: string | null
    logs: string
    createdAt?: Date | string
  }

  export type CombatCreateOrConnectWithoutOpponentInput = {
    where: CombatWhereUniqueInput
    create: XOR<CombatCreateWithoutOpponentInput, CombatUncheckedCreateWithoutOpponentInput>
  }

  export type CombatCreateManyOpponentInputEnvelope = {
    data: CombatCreateManyOpponentInput | CombatCreateManyOpponentInput[]
  }

  export type UserUpsertWithoutBrutesInput = {
    update: XOR<UserUpdateWithoutBrutesInput, UserUncheckedUpdateWithoutBrutesInput>
    create: XOR<UserCreateWithoutBrutesInput, UserUncheckedCreateWithoutBrutesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBrutesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBrutesInput, UserUncheckedUpdateWithoutBrutesInput>
  }

  export type UserUpdateWithoutBrutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBrutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteItemUpsertWithWhereUniqueWithoutBruteInput = {
    where: BruteItemWhereUniqueInput
    update: XOR<BruteItemUpdateWithoutBruteInput, BruteItemUncheckedUpdateWithoutBruteInput>
    create: XOR<BruteItemCreateWithoutBruteInput, BruteItemUncheckedCreateWithoutBruteInput>
  }

  export type BruteItemUpdateWithWhereUniqueWithoutBruteInput = {
    where: BruteItemWhereUniqueInput
    data: XOR<BruteItemUpdateWithoutBruteInput, BruteItemUncheckedUpdateWithoutBruteInput>
  }

  export type BruteItemUpdateManyWithWhereWithoutBruteInput = {
    where: BruteItemScalarWhereInput
    data: XOR<BruteItemUpdateManyMutationInput, BruteItemUncheckedUpdateManyWithoutBruteInput>
  }

  export type BruteItemScalarWhereInput = {
    AND?: BruteItemScalarWhereInput | BruteItemScalarWhereInput[]
    OR?: BruteItemScalarWhereInput[]
    NOT?: BruteItemScalarWhereInput | BruteItemScalarWhereInput[]
    id?: StringFilter<"BruteItem"> | string
    bruteId?: StringFilter<"BruteItem"> | string
    itemId?: StringFilter<"BruteItem"> | string
    equipped?: BoolFilter<"BruteItem"> | boolean
    createdAt?: DateTimeFilter<"BruteItem"> | Date | string
    updatedAt?: DateTimeFilter<"BruteItem"> | Date | string
  }

  export type CombatUpsertWithWhereUniqueWithoutBruteInput = {
    where: CombatWhereUniqueInput
    update: XOR<CombatUpdateWithoutBruteInput, CombatUncheckedUpdateWithoutBruteInput>
    create: XOR<CombatCreateWithoutBruteInput, CombatUncheckedCreateWithoutBruteInput>
  }

  export type CombatUpdateWithWhereUniqueWithoutBruteInput = {
    where: CombatWhereUniqueInput
    data: XOR<CombatUpdateWithoutBruteInput, CombatUncheckedUpdateWithoutBruteInput>
  }

  export type CombatUpdateManyWithWhereWithoutBruteInput = {
    where: CombatScalarWhereInput
    data: XOR<CombatUpdateManyMutationInput, CombatUncheckedUpdateManyWithoutBruteInput>
  }

  export type CombatScalarWhereInput = {
    AND?: CombatScalarWhereInput | CombatScalarWhereInput[]
    OR?: CombatScalarWhereInput[]
    NOT?: CombatScalarWhereInput | CombatScalarWhereInput[]
    id?: StringFilter<"Combat"> | string
    bruteId?: StringFilter<"Combat"> | string
    opponentId?: StringFilter<"Combat"> | string
    winnerId?: StringNullableFilter<"Combat"> | string | null
    logs?: StringFilter<"Combat"> | string
    createdAt?: DateTimeFilter<"Combat"> | Date | string
  }

  export type CombatUpsertWithWhereUniqueWithoutOpponentInput = {
    where: CombatWhereUniqueInput
    update: XOR<CombatUpdateWithoutOpponentInput, CombatUncheckedUpdateWithoutOpponentInput>
    create: XOR<CombatCreateWithoutOpponentInput, CombatUncheckedCreateWithoutOpponentInput>
  }

  export type CombatUpdateWithWhereUniqueWithoutOpponentInput = {
    where: CombatWhereUniqueInput
    data: XOR<CombatUpdateWithoutOpponentInput, CombatUncheckedUpdateWithoutOpponentInput>
  }

  export type CombatUpdateManyWithWhereWithoutOpponentInput = {
    where: CombatScalarWhereInput
    data: XOR<CombatUpdateManyMutationInput, CombatUncheckedUpdateManyWithoutOpponentInput>
  }

  export type BruteItemCreateWithoutItemInput = {
    id?: string
    equipped?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    brute: BruteCreateNestedOneWithoutItemsInput
  }

  export type BruteItemUncheckedCreateWithoutItemInput = {
    id?: string
    bruteId: string
    equipped?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BruteItemCreateOrConnectWithoutItemInput = {
    where: BruteItemWhereUniqueInput
    create: XOR<BruteItemCreateWithoutItemInput, BruteItemUncheckedCreateWithoutItemInput>
  }

  export type BruteItemCreateManyItemInputEnvelope = {
    data: BruteItemCreateManyItemInput | BruteItemCreateManyItemInput[]
  }

  export type BruteItemUpsertWithWhereUniqueWithoutItemInput = {
    where: BruteItemWhereUniqueInput
    update: XOR<BruteItemUpdateWithoutItemInput, BruteItemUncheckedUpdateWithoutItemInput>
    create: XOR<BruteItemCreateWithoutItemInput, BruteItemUncheckedCreateWithoutItemInput>
  }

  export type BruteItemUpdateWithWhereUniqueWithoutItemInput = {
    where: BruteItemWhereUniqueInput
    data: XOR<BruteItemUpdateWithoutItemInput, BruteItemUncheckedUpdateWithoutItemInput>
  }

  export type BruteItemUpdateManyWithWhereWithoutItemInput = {
    where: BruteItemScalarWhereInput
    data: XOR<BruteItemUpdateManyMutationInput, BruteItemUncheckedUpdateManyWithoutItemInput>
  }

  export type BruteCreateWithoutItemsInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBrutesInput
    combats?: CombatCreateNestedManyWithoutBruteInput
    opponentCombats?: CombatCreateNestedManyWithoutOpponentInput
  }

  export type BruteUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    combats?: CombatUncheckedCreateNestedManyWithoutBruteInput
    opponentCombats?: CombatUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type BruteCreateOrConnectWithoutItemsInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutItemsInput, BruteUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutBruteItemsInput = {
    id?: string
    name: string
    description: string
    rarity?: string
    strengthBonus?: number
    agilityBonus?: number
    speedBonus?: number
    healthBonus?: number
    intelligenceBonus?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateWithoutBruteItemsInput = {
    id?: string
    name: string
    description: string
    rarity?: string
    strengthBonus?: number
    agilityBonus?: number
    speedBonus?: number
    healthBonus?: number
    intelligenceBonus?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutBruteItemsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutBruteItemsInput, ItemUncheckedCreateWithoutBruteItemsInput>
  }

  export type BruteUpsertWithoutItemsInput = {
    update: XOR<BruteUpdateWithoutItemsInput, BruteUncheckedUpdateWithoutItemsInput>
    create: XOR<BruteCreateWithoutItemsInput, BruteUncheckedCreateWithoutItemsInput>
    where?: BruteWhereInput
  }

  export type BruteUpdateToOneWithWhereWithoutItemsInput = {
    where?: BruteWhereInput
    data: XOR<BruteUpdateWithoutItemsInput, BruteUncheckedUpdateWithoutItemsInput>
  }

  export type BruteUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBrutesNestedInput
    combats?: CombatUpdateManyWithoutBruteNestedInput
    opponentCombats?: CombatUpdateManyWithoutOpponentNestedInput
  }

  export type BruteUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    combats?: CombatUncheckedUpdateManyWithoutBruteNestedInput
    opponentCombats?: CombatUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type ItemUpsertWithoutBruteItemsInput = {
    update: XOR<ItemUpdateWithoutBruteItemsInput, ItemUncheckedUpdateWithoutBruteItemsInput>
    create: XOR<ItemCreateWithoutBruteItemsInput, ItemUncheckedCreateWithoutBruteItemsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutBruteItemsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutBruteItemsInput, ItemUncheckedUpdateWithoutBruteItemsInput>
  }

  export type ItemUpdateWithoutBruteItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    strengthBonus?: IntFieldUpdateOperationsInput | number
    agilityBonus?: IntFieldUpdateOperationsInput | number
    speedBonus?: IntFieldUpdateOperationsInput | number
    healthBonus?: IntFieldUpdateOperationsInput | number
    intelligenceBonus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutBruteItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    strengthBonus?: IntFieldUpdateOperationsInput | number
    agilityBonus?: IntFieldUpdateOperationsInput | number
    speedBonus?: IntFieldUpdateOperationsInput | number
    healthBonus?: IntFieldUpdateOperationsInput | number
    intelligenceBonus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteCreateWithoutCombatsInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBrutesInput
    items?: BruteItemCreateNestedManyWithoutBruteInput
    opponentCombats?: CombatCreateNestedManyWithoutOpponentInput
  }

  export type BruteUncheckedCreateWithoutCombatsInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    items?: BruteItemUncheckedCreateNestedManyWithoutBruteInput
    opponentCombats?: CombatUncheckedCreateNestedManyWithoutOpponentInput
  }

  export type BruteCreateOrConnectWithoutCombatsInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutCombatsInput, BruteUncheckedCreateWithoutCombatsInput>
  }

  export type BruteCreateWithoutOpponentCombatsInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBrutesInput
    items?: BruteItemCreateNestedManyWithoutBruteInput
    combats?: CombatCreateNestedManyWithoutBruteInput
  }

  export type BruteUncheckedCreateWithoutOpponentCombatsInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    items?: BruteItemUncheckedCreateNestedManyWithoutBruteInput
    combats?: CombatUncheckedCreateNestedManyWithoutBruteInput
  }

  export type BruteCreateOrConnectWithoutOpponentCombatsInput = {
    where: BruteWhereUniqueInput
    create: XOR<BruteCreateWithoutOpponentCombatsInput, BruteUncheckedCreateWithoutOpponentCombatsInput>
  }

  export type BruteUpsertWithoutCombatsInput = {
    update: XOR<BruteUpdateWithoutCombatsInput, BruteUncheckedUpdateWithoutCombatsInput>
    create: XOR<BruteCreateWithoutCombatsInput, BruteUncheckedCreateWithoutCombatsInput>
    where?: BruteWhereInput
  }

  export type BruteUpdateToOneWithWhereWithoutCombatsInput = {
    where?: BruteWhereInput
    data: XOR<BruteUpdateWithoutCombatsInput, BruteUncheckedUpdateWithoutCombatsInput>
  }

  export type BruteUpdateWithoutCombatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBrutesNestedInput
    items?: BruteItemUpdateManyWithoutBruteNestedInput
    opponentCombats?: CombatUpdateManyWithoutOpponentNestedInput
  }

  export type BruteUncheckedUpdateWithoutCombatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    items?: BruteItemUncheckedUpdateManyWithoutBruteNestedInput
    opponentCombats?: CombatUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type BruteUpsertWithoutOpponentCombatsInput = {
    update: XOR<BruteUpdateWithoutOpponentCombatsInput, BruteUncheckedUpdateWithoutOpponentCombatsInput>
    create: XOR<BruteCreateWithoutOpponentCombatsInput, BruteUncheckedCreateWithoutOpponentCombatsInput>
    where?: BruteWhereInput
  }

  export type BruteUpdateToOneWithWhereWithoutOpponentCombatsInput = {
    where?: BruteWhereInput
    data: XOR<BruteUpdateWithoutOpponentCombatsInput, BruteUncheckedUpdateWithoutOpponentCombatsInput>
  }

  export type BruteUpdateWithoutOpponentCombatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBrutesNestedInput
    items?: BruteItemUpdateManyWithoutBruteNestedInput
    combats?: CombatUpdateManyWithoutBruteNestedInput
  }

  export type BruteUncheckedUpdateWithoutOpponentCombatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    items?: BruteItemUncheckedUpdateManyWithoutBruteNestedInput
    combats?: CombatUncheckedUpdateManyWithoutBruteNestedInput
  }

  export type BruteCreateManyUserInput = {
    id?: string
    name: string
    level?: number
    experience?: number
    strength?: number
    agility?: number
    speed?: number
    health?: number
    intelligence?: number
    victories?: number
    defeats?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BruteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BruteItemUpdateManyWithoutBruteNestedInput
    combats?: CombatUpdateManyWithoutBruteNestedInput
    opponentCombats?: CombatUpdateManyWithoutOpponentNestedInput
  }

  export type BruteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BruteItemUncheckedUpdateManyWithoutBruteNestedInput
    combats?: CombatUncheckedUpdateManyWithoutBruteNestedInput
    opponentCombats?: CombatUncheckedUpdateManyWithoutOpponentNestedInput
  }

  export type BruteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    strength?: IntFieldUpdateOperationsInput | number
    agility?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    health?: IntFieldUpdateOperationsInput | number
    intelligence?: IntFieldUpdateOperationsInput | number
    victories?: IntFieldUpdateOperationsInput | number
    defeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteItemCreateManyBruteInput = {
    id?: string
    itemId: string
    equipped?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CombatCreateManyBruteInput = {
    id?: string
    opponentId: string
    winnerId?: string | null
    logs: string
    createdAt?: Date | string
  }

  export type CombatCreateManyOpponentInput = {
    id?: string
    bruteId: string
    winnerId?: string | null
    logs: string
    createdAt?: Date | string
  }

  export type BruteItemUpdateWithoutBruteInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutBruteItemsNestedInput
  }

  export type BruteItemUncheckedUpdateWithoutBruteInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteItemUncheckedUpdateManyWithoutBruteInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CombatUpdateWithoutBruteInput = {
    id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opponent?: BruteUpdateOneRequiredWithoutOpponentCombatsNestedInput
  }

  export type CombatUncheckedUpdateWithoutBruteInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CombatUncheckedUpdateManyWithoutBruteInput = {
    id?: StringFieldUpdateOperationsInput | string
    opponentId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CombatUpdateWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brute?: BruteUpdateOneRequiredWithoutCombatsNestedInput
  }

  export type CombatUncheckedUpdateWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    bruteId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CombatUncheckedUpdateManyWithoutOpponentInput = {
    id?: StringFieldUpdateOperationsInput | string
    bruteId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteItemCreateManyItemInput = {
    id?: string
    bruteId: string
    equipped?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BruteItemUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brute?: BruteUpdateOneRequiredWithoutItemsNestedInput
  }

  export type BruteItemUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    bruteId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BruteItemUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    bruteId?: StringFieldUpdateOperationsInput | string
    equipped?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}