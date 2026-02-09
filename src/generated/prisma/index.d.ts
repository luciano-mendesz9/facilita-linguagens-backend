
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model AccountVerificationToken
 * 
 */
export type AccountVerificationToken = $Result.DefaultSelection<Prisma.$AccountVerificationTokenPayload>
/**
 * Model TextInfo
 * 
 */
export type TextInfo = $Result.DefaultSelection<Prisma.$TextInfoPayload>
/**
 * Model TextContent
 * 
 */
export type TextContent = $Result.DefaultSelection<Prisma.$TextContentPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model TextualGenre
 * 
 */
export type TextualGenre = $Result.DefaultSelection<Prisma.$TextualGenrePayload>
/**
 * Model AdminActivityLog
 * 
 */
export type AdminActivityLog = $Result.DefaultSelection<Prisma.$AdminActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING',
  BLOCKED: 'BLOCKED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const UserRoles: {
  PROFESSOR: 'PROFESSOR',
  DESENVOLVEDOR: 'DESENVOLVEDOR',
  ADMINISTRADOR: 'ADMINISTRADOR',
  USUARIO: 'USUARIO'
};

export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles]


export const AuthProvider: {
  CREDENTIALS: 'CREDENTIALS',
  GOOGLE: 'GOOGLE'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type UserRoles = $Enums.UserRoles

export const UserRoles: typeof $Enums.UserRoles

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

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
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountVerificationToken`: Exposes CRUD operations for the **AccountVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountVerificationTokens
    * const accountVerificationTokens = await prisma.accountVerificationToken.findMany()
    * ```
    */
  get accountVerificationToken(): Prisma.AccountVerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.textInfo`: Exposes CRUD operations for the **TextInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TextInfos
    * const textInfos = await prisma.textInfo.findMany()
    * ```
    */
  get textInfo(): Prisma.TextInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.textContent`: Exposes CRUD operations for the **TextContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TextContents
    * const textContents = await prisma.textContent.findMany()
    * ```
    */
  get textContent(): Prisma.TextContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.textualGenre`: Exposes CRUD operations for the **TextualGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TextualGenres
    * const textualGenres = await prisma.textualGenre.findMany()
    * ```
    */
  get textualGenre(): Prisma.TextualGenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminActivityLog`: Exposes CRUD operations for the **AdminActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminActivityLogs
    * const adminActivityLogs = await prisma.adminActivityLog.findMany()
    * ```
    */
  get adminActivityLog(): Prisma.AdminActivityLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Account: 'Account',
    AccountVerificationToken: 'AccountVerificationToken',
    TextInfo: 'TextInfo',
    TextContent: 'TextContent',
    Image: 'Image',
    TextualGenre: 'TextualGenre',
    AdminActivityLog: 'AdminActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "accountVerificationToken" | "textInfo" | "textContent" | "image" | "textualGenre" | "adminActivityLog"
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
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      AccountVerificationToken: {
        payload: Prisma.$AccountVerificationTokenPayload<ExtArgs>
        fields: Prisma.AccountVerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountVerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountVerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.AccountVerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountVerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.AccountVerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.AccountVerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.AccountVerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountVerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.AccountVerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload>
          }
          update: {
            args: Prisma.AccountVerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.AccountVerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountVerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountVerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.AccountVerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.AccountVerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountVerificationToken>
          }
          groupBy: {
            args: Prisma.AccountVerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountVerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<AccountVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      TextInfo: {
        payload: Prisma.$TextInfoPayload<ExtArgs>
        fields: Prisma.TextInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload>
          }
          findFirst: {
            args: Prisma.TextInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload>
          }
          findMany: {
            args: Prisma.TextInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload>[]
          }
          create: {
            args: Prisma.TextInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload>
          }
          createMany: {
            args: Prisma.TextInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TextInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload>[]
          }
          delete: {
            args: Prisma.TextInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload>
          }
          update: {
            args: Prisma.TextInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload>
          }
          deleteMany: {
            args: Prisma.TextInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TextInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload>[]
          }
          upsert: {
            args: Prisma.TextInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextInfoPayload>
          }
          aggregate: {
            args: Prisma.TextInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTextInfo>
          }
          groupBy: {
            args: Prisma.TextInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextInfoCountArgs<ExtArgs>
            result: $Utils.Optional<TextInfoCountAggregateOutputType> | number
          }
        }
      }
      TextContent: {
        payload: Prisma.$TextContentPayload<ExtArgs>
        fields: Prisma.TextContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          findFirst: {
            args: Prisma.TextContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          findMany: {
            args: Prisma.TextContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>[]
          }
          create: {
            args: Prisma.TextContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          createMany: {
            args: Prisma.TextContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TextContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>[]
          }
          delete: {
            args: Prisma.TextContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          update: {
            args: Prisma.TextContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          deleteMany: {
            args: Prisma.TextContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TextContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>[]
          }
          upsert: {
            args: Prisma.TextContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextContentPayload>
          }
          aggregate: {
            args: Prisma.TextContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTextContent>
          }
          groupBy: {
            args: Prisma.TextContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextContentCountArgs<ExtArgs>
            result: $Utils.Optional<TextContentCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      TextualGenre: {
        payload: Prisma.$TextualGenrePayload<ExtArgs>
        fields: Prisma.TextualGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TextualGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TextualGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload>
          }
          findFirst: {
            args: Prisma.TextualGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TextualGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload>
          }
          findMany: {
            args: Prisma.TextualGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload>[]
          }
          create: {
            args: Prisma.TextualGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload>
          }
          createMany: {
            args: Prisma.TextualGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TextualGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload>[]
          }
          delete: {
            args: Prisma.TextualGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload>
          }
          update: {
            args: Prisma.TextualGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload>
          }
          deleteMany: {
            args: Prisma.TextualGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TextualGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TextualGenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload>[]
          }
          upsert: {
            args: Prisma.TextualGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TextualGenrePayload>
          }
          aggregate: {
            args: Prisma.TextualGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTextualGenre>
          }
          groupBy: {
            args: Prisma.TextualGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<TextualGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.TextualGenreCountArgs<ExtArgs>
            result: $Utils.Optional<TextualGenreCountAggregateOutputType> | number
          }
        }
      }
      AdminActivityLog: {
        payload: Prisma.$AdminActivityLogPayload<ExtArgs>
        fields: Prisma.AdminActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload>
          }
          findFirst: {
            args: Prisma.AdminActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload>
          }
          findMany: {
            args: Prisma.AdminActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload>[]
          }
          create: {
            args: Prisma.AdminActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload>
          }
          createMany: {
            args: Prisma.AdminActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload>[]
          }
          delete: {
            args: Prisma.AdminActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload>
          }
          update: {
            args: Prisma.AdminActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.AdminActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.AdminActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityLogPayload>
          }
          aggregate: {
            args: Prisma.AdminActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminActivityLog>
          }
          groupBy: {
            args: Prisma.AdminActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdminActivityLogCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    accountVerificationToken?: AccountVerificationTokenOmit
    textInfo?: TextInfoOmit
    textContent?: TextContentOmit
    image?: ImageOmit
    textualGenre?: TextualGenreOmit
    adminActivityLog?: AdminActivityLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    accounts: number
    activityLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminActivityLogWhereInput
  }


  /**
   * Count Type TextInfoCountOutputType
   */

  export type TextInfoCountOutputType = {
    images: number
  }

  export type TextInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | TextInfoCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * TextInfoCountOutputType without action
   */
  export type TextInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfoCountOutputType
     */
    select?: TextInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TextInfoCountOutputType without action
   */
  export type TextInfoCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type TextualGenreCountOutputType
   */

  export type TextualGenreCountOutputType = {
    texts: number
  }

  export type TextualGenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    texts?: boolean | TextualGenreCountOutputTypeCountTextsArgs
  }

  // Custom InputTypes
  /**
   * TextualGenreCountOutputType without action
   */
  export type TextualGenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenreCountOutputType
     */
    select?: TextualGenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TextualGenreCountOutputType without action
   */
  export type TextualGenreCountOutputTypeCountTextsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextInfoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    publicId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    image: string | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRoles | null
    isSuperAdmin: boolean | null
    isCollaborator: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    publicId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    image: string | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRoles | null
    isSuperAdmin: boolean | null
    isCollaborator: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    publicId: number
    email: number
    firstName: number
    lastName: number
    image: number
    status: number
    role: number
    isSuperAdmin: number
    isCollaborator: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    publicId?: true
    email?: true
    firstName?: true
    lastName?: true
    image?: true
    status?: true
    role?: true
    isSuperAdmin?: true
    isCollaborator?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    publicId?: true
    email?: true
    firstName?: true
    lastName?: true
    image?: true
    status?: true
    role?: true
    isSuperAdmin?: true
    isCollaborator?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    publicId?: true
    email?: true
    firstName?: true
    lastName?: true
    image?: true
    status?: true
    role?: true
    isSuperAdmin?: true
    isCollaborator?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    publicId: string
    email: string
    firstName: string
    lastName: string
    image: string | null
    status: $Enums.UserStatus
    role: $Enums.UserRoles
    isSuperAdmin: boolean
    isCollaborator: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    publicId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    image?: boolean
    status?: boolean
    role?: boolean
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    image?: boolean
    status?: boolean
    role?: boolean
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    image?: boolean
    status?: boolean
    role?: boolean
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    publicId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    image?: boolean
    status?: boolean
    role?: boolean
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicId" | "email" | "firstName" | "lastName" | "image" | "status" | "role" | "isSuperAdmin" | "isCollaborator" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      activityLogs: Prisma.$AdminActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      publicId: string
      email: string
      firstName: string
      lastName: string
      image: string | null
      status: $Enums.UserStatus
      role: $Enums.UserRoles
      isSuperAdmin: boolean
      isCollaborator: boolean
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly publicId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly role: FieldRef<"User", 'UserRoles'>
    readonly isSuperAdmin: FieldRef<"User", 'Boolean'>
    readonly isCollaborator: FieldRef<"User", 'Boolean'>
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
    where?: AdminActivityLogWhereInput
    orderBy?: AdminActivityLogOrderByWithRelationInput | AdminActivityLogOrderByWithRelationInput[]
    cursor?: AdminActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminActivityLogScalarFieldEnum | AdminActivityLogScalarFieldEnum[]
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
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    userId: number | null
    provider: $Enums.AuthProvider | null
    providerAccountId: string | null
    password: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    provider: $Enums.AuthProvider | null
    providerAccountId: string | null
    password: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerAccountId: number
    password: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    password?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    password?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    password?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    userId: number
    provider: $Enums.AuthProvider
    providerAccountId: string
    password: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    password?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    password?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    password?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    password?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerAccountId" | "password" | "accessToken" | "refreshToken" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      provider: $Enums.AuthProvider
      providerAccountId: string
      password: string | null
      accessToken: string | null
      refreshToken: string | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly userId: FieldRef<"Account", 'Int'>
    readonly provider: FieldRef<"Account", 'AuthProvider'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'DateTime'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model AccountVerificationToken
   */

  export type AggregateAccountVerificationToken = {
    _count: AccountVerificationTokenCountAggregateOutputType | null
    _min: AccountVerificationTokenMinAggregateOutputType | null
    _max: AccountVerificationTokenMaxAggregateOutputType | null
  }

  export type AccountVerificationTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type AccountVerificationTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type AccountVerificationTokenCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type AccountVerificationTokenMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type AccountVerificationTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type AccountVerificationTokenCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type AccountVerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountVerificationToken to aggregate.
     */
    where?: AccountVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountVerificationTokens to fetch.
     */
    orderBy?: AccountVerificationTokenOrderByWithRelationInput | AccountVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountVerificationTokens
    **/
    _count?: true | AccountVerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountVerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountVerificationTokenMaxAggregateInputType
  }

  export type GetAccountVerificationTokenAggregateType<T extends AccountVerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountVerificationToken[P]>
      : GetScalarType<T[P], AggregateAccountVerificationToken[P]>
  }




  export type AccountVerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountVerificationTokenWhereInput
    orderBy?: AccountVerificationTokenOrderByWithAggregationInput | AccountVerificationTokenOrderByWithAggregationInput[]
    by: AccountVerificationTokenScalarFieldEnum[] | AccountVerificationTokenScalarFieldEnum
    having?: AccountVerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountVerificationTokenCountAggregateInputType | true
    _min?: AccountVerificationTokenMinAggregateInputType
    _max?: AccountVerificationTokenMaxAggregateInputType
  }

  export type AccountVerificationTokenGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    expiresAt: Date
    _count: AccountVerificationTokenCountAggregateOutputType | null
    _min: AccountVerificationTokenMinAggregateOutputType | null
    _max: AccountVerificationTokenMaxAggregateOutputType | null
  }

  type GetAccountVerificationTokenGroupByPayload<T extends AccountVerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AccountVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type AccountVerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["accountVerificationToken"]>

  export type AccountVerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["accountVerificationToken"]>

  export type AccountVerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["accountVerificationToken"]>

  export type AccountVerificationTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type AccountVerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "expiresAt", ExtArgs["result"]["accountVerificationToken"]>

  export type $AccountVerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountVerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["accountVerificationToken"]>
    composites: {}
  }

  type AccountVerificationTokenGetPayload<S extends boolean | null | undefined | AccountVerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$AccountVerificationTokenPayload, S>

  type AccountVerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountVerificationTokenCountAggregateInputType | true
    }

  export interface AccountVerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountVerificationToken'], meta: { name: 'AccountVerificationToken' } }
    /**
     * Find zero or one AccountVerificationToken that matches the filter.
     * @param {AccountVerificationTokenFindUniqueArgs} args - Arguments to find a AccountVerificationToken
     * @example
     * // Get one AccountVerificationToken
     * const accountVerificationToken = await prisma.accountVerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountVerificationTokenFindUniqueArgs>(args: SelectSubset<T, AccountVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__AccountVerificationTokenClient<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountVerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a AccountVerificationToken
     * @example
     * // Get one AccountVerificationToken
     * const accountVerificationToken = await prisma.accountVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountVerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountVerificationTokenClient<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountVerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountVerificationTokenFindFirstArgs} args - Arguments to find a AccountVerificationToken
     * @example
     * // Get one AccountVerificationToken
     * const accountVerificationToken = await prisma.accountVerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountVerificationTokenFindFirstArgs>(args?: SelectSubset<T, AccountVerificationTokenFindFirstArgs<ExtArgs>>): Prisma__AccountVerificationTokenClient<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountVerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountVerificationTokenFindFirstOrThrowArgs} args - Arguments to find a AccountVerificationToken
     * @example
     * // Get one AccountVerificationToken
     * const accountVerificationToken = await prisma.accountVerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountVerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountVerificationTokenClient<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountVerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountVerificationTokens
     * const accountVerificationTokens = await prisma.accountVerificationToken.findMany()
     * 
     * // Get first 10 AccountVerificationTokens
     * const accountVerificationTokens = await prisma.accountVerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountVerificationTokenWithIdOnly = await prisma.accountVerificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountVerificationTokenFindManyArgs>(args?: SelectSubset<T, AccountVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountVerificationToken.
     * @param {AccountVerificationTokenCreateArgs} args - Arguments to create a AccountVerificationToken.
     * @example
     * // Create one AccountVerificationToken
     * const AccountVerificationToken = await prisma.accountVerificationToken.create({
     *   data: {
     *     // ... data to create a AccountVerificationToken
     *   }
     * })
     * 
     */
    create<T extends AccountVerificationTokenCreateArgs>(args: SelectSubset<T, AccountVerificationTokenCreateArgs<ExtArgs>>): Prisma__AccountVerificationTokenClient<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountVerificationTokens.
     * @param {AccountVerificationTokenCreateManyArgs} args - Arguments to create many AccountVerificationTokens.
     * @example
     * // Create many AccountVerificationTokens
     * const accountVerificationToken = await prisma.accountVerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountVerificationTokenCreateManyArgs>(args?: SelectSubset<T, AccountVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountVerificationTokens and returns the data saved in the database.
     * @param {AccountVerificationTokenCreateManyAndReturnArgs} args - Arguments to create many AccountVerificationTokens.
     * @example
     * // Create many AccountVerificationTokens
     * const accountVerificationToken = await prisma.accountVerificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountVerificationTokens and only return the `id`
     * const accountVerificationTokenWithIdOnly = await prisma.accountVerificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountVerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountVerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountVerificationToken.
     * @param {AccountVerificationTokenDeleteArgs} args - Arguments to delete one AccountVerificationToken.
     * @example
     * // Delete one AccountVerificationToken
     * const AccountVerificationToken = await prisma.accountVerificationToken.delete({
     *   where: {
     *     // ... filter to delete one AccountVerificationToken
     *   }
     * })
     * 
     */
    delete<T extends AccountVerificationTokenDeleteArgs>(args: SelectSubset<T, AccountVerificationTokenDeleteArgs<ExtArgs>>): Prisma__AccountVerificationTokenClient<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountVerificationToken.
     * @param {AccountVerificationTokenUpdateArgs} args - Arguments to update one AccountVerificationToken.
     * @example
     * // Update one AccountVerificationToken
     * const accountVerificationToken = await prisma.accountVerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountVerificationTokenUpdateArgs>(args: SelectSubset<T, AccountVerificationTokenUpdateArgs<ExtArgs>>): Prisma__AccountVerificationTokenClient<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountVerificationTokens.
     * @param {AccountVerificationTokenDeleteManyArgs} args - Arguments to filter AccountVerificationTokens to delete.
     * @example
     * // Delete a few AccountVerificationTokens
     * const { count } = await prisma.accountVerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountVerificationTokenDeleteManyArgs>(args?: SelectSubset<T, AccountVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountVerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountVerificationTokens
     * const accountVerificationToken = await prisma.accountVerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountVerificationTokenUpdateManyArgs>(args: SelectSubset<T, AccountVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountVerificationTokens and returns the data updated in the database.
     * @param {AccountVerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many AccountVerificationTokens.
     * @example
     * // Update many AccountVerificationTokens
     * const accountVerificationToken = await prisma.accountVerificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountVerificationTokens and only return the `id`
     * const accountVerificationTokenWithIdOnly = await prisma.accountVerificationToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountVerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountVerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountVerificationToken.
     * @param {AccountVerificationTokenUpsertArgs} args - Arguments to update or create a AccountVerificationToken.
     * @example
     * // Update or create a AccountVerificationToken
     * const accountVerificationToken = await prisma.accountVerificationToken.upsert({
     *   create: {
     *     // ... data to create a AccountVerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountVerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends AccountVerificationTokenUpsertArgs>(args: SelectSubset<T, AccountVerificationTokenUpsertArgs<ExtArgs>>): Prisma__AccountVerificationTokenClient<$Result.GetResult<Prisma.$AccountVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountVerificationTokenCountArgs} args - Arguments to filter AccountVerificationTokens to count.
     * @example
     * // Count the number of AccountVerificationTokens
     * const count = await prisma.accountVerificationToken.count({
     *   where: {
     *     // ... the filter for the AccountVerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends AccountVerificationTokenCountArgs>(
      args?: Subset<T, AccountVerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountVerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountVerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountVerificationTokenAggregateArgs>(args: Subset<T, AccountVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetAccountVerificationTokenAggregateType<T>>

    /**
     * Group by AccountVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountVerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends AccountVerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountVerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: AccountVerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountVerificationToken model
   */
  readonly fields: AccountVerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AccountVerificationToken model
   */
  interface AccountVerificationTokenFieldRefs {
    readonly id: FieldRef<"AccountVerificationToken", 'String'>
    readonly userId: FieldRef<"AccountVerificationToken", 'String'>
    readonly createdAt: FieldRef<"AccountVerificationToken", 'DateTime'>
    readonly expiresAt: FieldRef<"AccountVerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountVerificationToken findUnique
   */
  export type AccountVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which AccountVerificationToken to fetch.
     */
    where: AccountVerificationTokenWhereUniqueInput
  }

  /**
   * AccountVerificationToken findUniqueOrThrow
   */
  export type AccountVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which AccountVerificationToken to fetch.
     */
    where: AccountVerificationTokenWhereUniqueInput
  }

  /**
   * AccountVerificationToken findFirst
   */
  export type AccountVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which AccountVerificationToken to fetch.
     */
    where?: AccountVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountVerificationTokens to fetch.
     */
    orderBy?: AccountVerificationTokenOrderByWithRelationInput | AccountVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountVerificationTokens.
     */
    cursor?: AccountVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountVerificationTokens.
     */
    distinct?: AccountVerificationTokenScalarFieldEnum | AccountVerificationTokenScalarFieldEnum[]
  }

  /**
   * AccountVerificationToken findFirstOrThrow
   */
  export type AccountVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which AccountVerificationToken to fetch.
     */
    where?: AccountVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountVerificationTokens to fetch.
     */
    orderBy?: AccountVerificationTokenOrderByWithRelationInput | AccountVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountVerificationTokens.
     */
    cursor?: AccountVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountVerificationTokens.
     */
    distinct?: AccountVerificationTokenScalarFieldEnum | AccountVerificationTokenScalarFieldEnum[]
  }

  /**
   * AccountVerificationToken findMany
   */
  export type AccountVerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which AccountVerificationTokens to fetch.
     */
    where?: AccountVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountVerificationTokens to fetch.
     */
    orderBy?: AccountVerificationTokenOrderByWithRelationInput | AccountVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountVerificationTokens.
     */
    cursor?: AccountVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountVerificationTokens.
     */
    skip?: number
    distinct?: AccountVerificationTokenScalarFieldEnum | AccountVerificationTokenScalarFieldEnum[]
  }

  /**
   * AccountVerificationToken create
   */
  export type AccountVerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a AccountVerificationToken.
     */
    data: XOR<AccountVerificationTokenCreateInput, AccountVerificationTokenUncheckedCreateInput>
  }

  /**
   * AccountVerificationToken createMany
   */
  export type AccountVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountVerificationTokens.
     */
    data: AccountVerificationTokenCreateManyInput | AccountVerificationTokenCreateManyInput[]
  }

  /**
   * AccountVerificationToken createManyAndReturn
   */
  export type AccountVerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many AccountVerificationTokens.
     */
    data: AccountVerificationTokenCreateManyInput | AccountVerificationTokenCreateManyInput[]
  }

  /**
   * AccountVerificationToken update
   */
  export type AccountVerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a AccountVerificationToken.
     */
    data: XOR<AccountVerificationTokenUpdateInput, AccountVerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which AccountVerificationToken to update.
     */
    where: AccountVerificationTokenWhereUniqueInput
  }

  /**
   * AccountVerificationToken updateMany
   */
  export type AccountVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountVerificationTokens.
     */
    data: XOR<AccountVerificationTokenUpdateManyMutationInput, AccountVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which AccountVerificationTokens to update
     */
    where?: AccountVerificationTokenWhereInput
    /**
     * Limit how many AccountVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * AccountVerificationToken updateManyAndReturn
   */
  export type AccountVerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update AccountVerificationTokens.
     */
    data: XOR<AccountVerificationTokenUpdateManyMutationInput, AccountVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which AccountVerificationTokens to update
     */
    where?: AccountVerificationTokenWhereInput
    /**
     * Limit how many AccountVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * AccountVerificationToken upsert
   */
  export type AccountVerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the AccountVerificationToken to update in case it exists.
     */
    where: AccountVerificationTokenWhereUniqueInput
    /**
     * In case the AccountVerificationToken found by the `where` argument doesn't exist, create a new AccountVerificationToken with this data.
     */
    create: XOR<AccountVerificationTokenCreateInput, AccountVerificationTokenUncheckedCreateInput>
    /**
     * In case the AccountVerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountVerificationTokenUpdateInput, AccountVerificationTokenUncheckedUpdateInput>
  }

  /**
   * AccountVerificationToken delete
   */
  export type AccountVerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which AccountVerificationToken to delete.
     */
    where: AccountVerificationTokenWhereUniqueInput
  }

  /**
   * AccountVerificationToken deleteMany
   */
  export type AccountVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountVerificationTokens to delete
     */
    where?: AccountVerificationTokenWhereInput
    /**
     * Limit how many AccountVerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * AccountVerificationToken without action
   */
  export type AccountVerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountVerificationToken
     */
    select?: AccountVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountVerificationToken
     */
    omit?: AccountVerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model TextInfo
   */

  export type AggregateTextInfo = {
    _count: TextInfoCountAggregateOutputType | null
    _avg: TextInfoAvgAggregateOutputType | null
    _sum: TextInfoSumAggregateOutputType | null
    _min: TextInfoMinAggregateOutputType | null
    _max: TextInfoMaxAggregateOutputType | null
  }

  export type TextInfoAvgAggregateOutputType = {
    id: number | null
    genreId: number | null
  }

  export type TextInfoSumAggregateOutputType = {
    id: number | null
    genreId: number | null
  }

  export type TextInfoMinAggregateOutputType = {
    id: number | null
    publicId: string | null
    title: string | null
    isImageOnly: boolean | null
    authorName: string | null
    referenceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    genreId: number | null
  }

  export type TextInfoMaxAggregateOutputType = {
    id: number | null
    publicId: string | null
    title: string | null
    isImageOnly: boolean | null
    authorName: string | null
    referenceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    genreId: number | null
  }

  export type TextInfoCountAggregateOutputType = {
    id: number
    publicId: number
    title: number
    isImageOnly: number
    authorName: number
    referenceUrl: number
    createdAt: number
    updatedAt: number
    genreId: number
    _all: number
  }


  export type TextInfoAvgAggregateInputType = {
    id?: true
    genreId?: true
  }

  export type TextInfoSumAggregateInputType = {
    id?: true
    genreId?: true
  }

  export type TextInfoMinAggregateInputType = {
    id?: true
    publicId?: true
    title?: true
    isImageOnly?: true
    authorName?: true
    referenceUrl?: true
    createdAt?: true
    updatedAt?: true
    genreId?: true
  }

  export type TextInfoMaxAggregateInputType = {
    id?: true
    publicId?: true
    title?: true
    isImageOnly?: true
    authorName?: true
    referenceUrl?: true
    createdAt?: true
    updatedAt?: true
    genreId?: true
  }

  export type TextInfoCountAggregateInputType = {
    id?: true
    publicId?: true
    title?: true
    isImageOnly?: true
    authorName?: true
    referenceUrl?: true
    createdAt?: true
    updatedAt?: true
    genreId?: true
    _all?: true
  }

  export type TextInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextInfo to aggregate.
     */
    where?: TextInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextInfos to fetch.
     */
    orderBy?: TextInfoOrderByWithRelationInput | TextInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TextInfos
    **/
    _count?: true | TextInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextInfoMaxAggregateInputType
  }

  export type GetTextInfoAggregateType<T extends TextInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateTextInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTextInfo[P]>
      : GetScalarType<T[P], AggregateTextInfo[P]>
  }




  export type TextInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextInfoWhereInput
    orderBy?: TextInfoOrderByWithAggregationInput | TextInfoOrderByWithAggregationInput[]
    by: TextInfoScalarFieldEnum[] | TextInfoScalarFieldEnum
    having?: TextInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextInfoCountAggregateInputType | true
    _avg?: TextInfoAvgAggregateInputType
    _sum?: TextInfoSumAggregateInputType
    _min?: TextInfoMinAggregateInputType
    _max?: TextInfoMaxAggregateInputType
  }

  export type TextInfoGroupByOutputType = {
    id: number
    publicId: string
    title: string
    isImageOnly: boolean
    authorName: string
    referenceUrl: string | null
    createdAt: Date
    updatedAt: Date
    genreId: number
    _count: TextInfoCountAggregateOutputType | null
    _avg: TextInfoAvgAggregateOutputType | null
    _sum: TextInfoSumAggregateOutputType | null
    _min: TextInfoMinAggregateOutputType | null
    _max: TextInfoMaxAggregateOutputType | null
  }

  type GetTextInfoGroupByPayload<T extends TextInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextInfoGroupByOutputType[P]>
            : GetScalarType<T[P], TextInfoGroupByOutputType[P]>
        }
      >
    >


  export type TextInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    title?: boolean
    isImageOnly?: boolean
    authorName?: boolean
    referenceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genreId?: boolean
    content?: boolean | TextInfo$contentArgs<ExtArgs>
    images?: boolean | TextInfo$imagesArgs<ExtArgs>
    genre?: boolean | TextualGenreDefaultArgs<ExtArgs>
    _count?: boolean | TextInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textInfo"]>

  export type TextInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    title?: boolean
    isImageOnly?: boolean
    authorName?: boolean
    referenceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genreId?: boolean
    genre?: boolean | TextualGenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textInfo"]>

  export type TextInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    title?: boolean
    isImageOnly?: boolean
    authorName?: boolean
    referenceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genreId?: boolean
    genre?: boolean | TextualGenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textInfo"]>

  export type TextInfoSelectScalar = {
    id?: boolean
    publicId?: boolean
    title?: boolean
    isImageOnly?: boolean
    authorName?: boolean
    referenceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genreId?: boolean
  }

  export type TextInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicId" | "title" | "isImageOnly" | "authorName" | "referenceUrl" | "createdAt" | "updatedAt" | "genreId", ExtArgs["result"]["textInfo"]>
  export type TextInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | TextInfo$contentArgs<ExtArgs>
    images?: boolean | TextInfo$imagesArgs<ExtArgs>
    genre?: boolean | TextualGenreDefaultArgs<ExtArgs>
    _count?: boolean | TextInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TextInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | TextualGenreDefaultArgs<ExtArgs>
  }
  export type TextInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | TextualGenreDefaultArgs<ExtArgs>
  }

  export type $TextInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TextInfo"
    objects: {
      content: Prisma.$TextContentPayload<ExtArgs> | null
      images: Prisma.$ImagePayload<ExtArgs>[]
      genre: Prisma.$TextualGenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      publicId: string
      title: string
      isImageOnly: boolean
      authorName: string
      referenceUrl: string | null
      createdAt: Date
      updatedAt: Date
      genreId: number
    }, ExtArgs["result"]["textInfo"]>
    composites: {}
  }

  type TextInfoGetPayload<S extends boolean | null | undefined | TextInfoDefaultArgs> = $Result.GetResult<Prisma.$TextInfoPayload, S>

  type TextInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextInfoCountAggregateInputType | true
    }

  export interface TextInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TextInfo'], meta: { name: 'TextInfo' } }
    /**
     * Find zero or one TextInfo that matches the filter.
     * @param {TextInfoFindUniqueArgs} args - Arguments to find a TextInfo
     * @example
     * // Get one TextInfo
     * const textInfo = await prisma.textInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextInfoFindUniqueArgs>(args: SelectSubset<T, TextInfoFindUniqueArgs<ExtArgs>>): Prisma__TextInfoClient<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TextInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextInfoFindUniqueOrThrowArgs} args - Arguments to find a TextInfo
     * @example
     * // Get one TextInfo
     * const textInfo = await prisma.textInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, TextInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextInfoClient<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextInfoFindFirstArgs} args - Arguments to find a TextInfo
     * @example
     * // Get one TextInfo
     * const textInfo = await prisma.textInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextInfoFindFirstArgs>(args?: SelectSubset<T, TextInfoFindFirstArgs<ExtArgs>>): Prisma__TextInfoClient<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextInfoFindFirstOrThrowArgs} args - Arguments to find a TextInfo
     * @example
     * // Get one TextInfo
     * const textInfo = await prisma.textInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, TextInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextInfoClient<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TextInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TextInfos
     * const textInfos = await prisma.textInfo.findMany()
     * 
     * // Get first 10 TextInfos
     * const textInfos = await prisma.textInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textInfoWithIdOnly = await prisma.textInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextInfoFindManyArgs>(args?: SelectSubset<T, TextInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TextInfo.
     * @param {TextInfoCreateArgs} args - Arguments to create a TextInfo.
     * @example
     * // Create one TextInfo
     * const TextInfo = await prisma.textInfo.create({
     *   data: {
     *     // ... data to create a TextInfo
     *   }
     * })
     * 
     */
    create<T extends TextInfoCreateArgs>(args: SelectSubset<T, TextInfoCreateArgs<ExtArgs>>): Prisma__TextInfoClient<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TextInfos.
     * @param {TextInfoCreateManyArgs} args - Arguments to create many TextInfos.
     * @example
     * // Create many TextInfos
     * const textInfo = await prisma.textInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextInfoCreateManyArgs>(args?: SelectSubset<T, TextInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TextInfos and returns the data saved in the database.
     * @param {TextInfoCreateManyAndReturnArgs} args - Arguments to create many TextInfos.
     * @example
     * // Create many TextInfos
     * const textInfo = await prisma.textInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TextInfos and only return the `id`
     * const textInfoWithIdOnly = await prisma.textInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TextInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, TextInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TextInfo.
     * @param {TextInfoDeleteArgs} args - Arguments to delete one TextInfo.
     * @example
     * // Delete one TextInfo
     * const TextInfo = await prisma.textInfo.delete({
     *   where: {
     *     // ... filter to delete one TextInfo
     *   }
     * })
     * 
     */
    delete<T extends TextInfoDeleteArgs>(args: SelectSubset<T, TextInfoDeleteArgs<ExtArgs>>): Prisma__TextInfoClient<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TextInfo.
     * @param {TextInfoUpdateArgs} args - Arguments to update one TextInfo.
     * @example
     * // Update one TextInfo
     * const textInfo = await prisma.textInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextInfoUpdateArgs>(args: SelectSubset<T, TextInfoUpdateArgs<ExtArgs>>): Prisma__TextInfoClient<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TextInfos.
     * @param {TextInfoDeleteManyArgs} args - Arguments to filter TextInfos to delete.
     * @example
     * // Delete a few TextInfos
     * const { count } = await prisma.textInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextInfoDeleteManyArgs>(args?: SelectSubset<T, TextInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TextInfos
     * const textInfo = await prisma.textInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextInfoUpdateManyArgs>(args: SelectSubset<T, TextInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextInfos and returns the data updated in the database.
     * @param {TextInfoUpdateManyAndReturnArgs} args - Arguments to update many TextInfos.
     * @example
     * // Update many TextInfos
     * const textInfo = await prisma.textInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TextInfos and only return the `id`
     * const textInfoWithIdOnly = await prisma.textInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends TextInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, TextInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TextInfo.
     * @param {TextInfoUpsertArgs} args - Arguments to update or create a TextInfo.
     * @example
     * // Update or create a TextInfo
     * const textInfo = await prisma.textInfo.upsert({
     *   create: {
     *     // ... data to create a TextInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TextInfo we want to update
     *   }
     * })
     */
    upsert<T extends TextInfoUpsertArgs>(args: SelectSubset<T, TextInfoUpsertArgs<ExtArgs>>): Prisma__TextInfoClient<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TextInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextInfoCountArgs} args - Arguments to filter TextInfos to count.
     * @example
     * // Count the number of TextInfos
     * const count = await prisma.textInfo.count({
     *   where: {
     *     // ... the filter for the TextInfos we want to count
     *   }
     * })
    **/
    count<T extends TextInfoCountArgs>(
      args?: Subset<T, TextInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TextInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextInfoAggregateArgs>(args: Subset<T, TextInfoAggregateArgs>): Prisma.PrismaPromise<GetTextInfoAggregateType<T>>

    /**
     * Group by TextInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextInfoGroupByArgs} args - Group by arguments.
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
      T extends TextInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextInfoGroupByArgs['orderBy'] }
        : { orderBy?: TextInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TextInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TextInfo model
   */
  readonly fields: TextInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TextInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends TextInfo$contentArgs<ExtArgs> = {}>(args?: Subset<T, TextInfo$contentArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    images<T extends TextInfo$imagesArgs<ExtArgs> = {}>(args?: Subset<T, TextInfo$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genre<T extends TextualGenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TextualGenreDefaultArgs<ExtArgs>>): Prisma__TextualGenreClient<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TextInfo model
   */
  interface TextInfoFieldRefs {
    readonly id: FieldRef<"TextInfo", 'Int'>
    readonly publicId: FieldRef<"TextInfo", 'String'>
    readonly title: FieldRef<"TextInfo", 'String'>
    readonly isImageOnly: FieldRef<"TextInfo", 'Boolean'>
    readonly authorName: FieldRef<"TextInfo", 'String'>
    readonly referenceUrl: FieldRef<"TextInfo", 'String'>
    readonly createdAt: FieldRef<"TextInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"TextInfo", 'DateTime'>
    readonly genreId: FieldRef<"TextInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TextInfo findUnique
   */
  export type TextInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
    /**
     * Filter, which TextInfo to fetch.
     */
    where: TextInfoWhereUniqueInput
  }

  /**
   * TextInfo findUniqueOrThrow
   */
  export type TextInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
    /**
     * Filter, which TextInfo to fetch.
     */
    where: TextInfoWhereUniqueInput
  }

  /**
   * TextInfo findFirst
   */
  export type TextInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
    /**
     * Filter, which TextInfo to fetch.
     */
    where?: TextInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextInfos to fetch.
     */
    orderBy?: TextInfoOrderByWithRelationInput | TextInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextInfos.
     */
    cursor?: TextInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextInfos.
     */
    distinct?: TextInfoScalarFieldEnum | TextInfoScalarFieldEnum[]
  }

  /**
   * TextInfo findFirstOrThrow
   */
  export type TextInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
    /**
     * Filter, which TextInfo to fetch.
     */
    where?: TextInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextInfos to fetch.
     */
    orderBy?: TextInfoOrderByWithRelationInput | TextInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextInfos.
     */
    cursor?: TextInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextInfos.
     */
    distinct?: TextInfoScalarFieldEnum | TextInfoScalarFieldEnum[]
  }

  /**
   * TextInfo findMany
   */
  export type TextInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
    /**
     * Filter, which TextInfos to fetch.
     */
    where?: TextInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextInfos to fetch.
     */
    orderBy?: TextInfoOrderByWithRelationInput | TextInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TextInfos.
     */
    cursor?: TextInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextInfos.
     */
    skip?: number
    distinct?: TextInfoScalarFieldEnum | TextInfoScalarFieldEnum[]
  }

  /**
   * TextInfo create
   */
  export type TextInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a TextInfo.
     */
    data: XOR<TextInfoCreateInput, TextInfoUncheckedCreateInput>
  }

  /**
   * TextInfo createMany
   */
  export type TextInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TextInfos.
     */
    data: TextInfoCreateManyInput | TextInfoCreateManyInput[]
  }

  /**
   * TextInfo createManyAndReturn
   */
  export type TextInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * The data used to create many TextInfos.
     */
    data: TextInfoCreateManyInput | TextInfoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TextInfo update
   */
  export type TextInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a TextInfo.
     */
    data: XOR<TextInfoUpdateInput, TextInfoUncheckedUpdateInput>
    /**
     * Choose, which TextInfo to update.
     */
    where: TextInfoWhereUniqueInput
  }

  /**
   * TextInfo updateMany
   */
  export type TextInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TextInfos.
     */
    data: XOR<TextInfoUpdateManyMutationInput, TextInfoUncheckedUpdateManyInput>
    /**
     * Filter which TextInfos to update
     */
    where?: TextInfoWhereInput
    /**
     * Limit how many TextInfos to update.
     */
    limit?: number
  }

  /**
   * TextInfo updateManyAndReturn
   */
  export type TextInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * The data used to update TextInfos.
     */
    data: XOR<TextInfoUpdateManyMutationInput, TextInfoUncheckedUpdateManyInput>
    /**
     * Filter which TextInfos to update
     */
    where?: TextInfoWhereInput
    /**
     * Limit how many TextInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TextInfo upsert
   */
  export type TextInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the TextInfo to update in case it exists.
     */
    where: TextInfoWhereUniqueInput
    /**
     * In case the TextInfo found by the `where` argument doesn't exist, create a new TextInfo with this data.
     */
    create: XOR<TextInfoCreateInput, TextInfoUncheckedCreateInput>
    /**
     * In case the TextInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextInfoUpdateInput, TextInfoUncheckedUpdateInput>
  }

  /**
   * TextInfo delete
   */
  export type TextInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
    /**
     * Filter which TextInfo to delete.
     */
    where: TextInfoWhereUniqueInput
  }

  /**
   * TextInfo deleteMany
   */
  export type TextInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextInfos to delete
     */
    where?: TextInfoWhereInput
    /**
     * Limit how many TextInfos to delete.
     */
    limit?: number
  }

  /**
   * TextInfo.content
   */
  export type TextInfo$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    where?: TextContentWhereInput
  }

  /**
   * TextInfo.images
   */
  export type TextInfo$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * TextInfo without action
   */
  export type TextInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
  }


  /**
   * Model TextContent
   */

  export type AggregateTextContent = {
    _count: TextContentCountAggregateOutputType | null
    _avg: TextContentAvgAggregateOutputType | null
    _sum: TextContentSumAggregateOutputType | null
    _min: TextContentMinAggregateOutputType | null
    _max: TextContentMaxAggregateOutputType | null
  }

  export type TextContentAvgAggregateOutputType = {
    textInfoId: number | null
  }

  export type TextContentSumAggregateOutputType = {
    textInfoId: number | null
  }

  export type TextContentMinAggregateOutputType = {
    id: string | null
    textInfoId: number | null
    content: string | null
  }

  export type TextContentMaxAggregateOutputType = {
    id: string | null
    textInfoId: number | null
    content: string | null
  }

  export type TextContentCountAggregateOutputType = {
    id: number
    textInfoId: number
    content: number
    _all: number
  }


  export type TextContentAvgAggregateInputType = {
    textInfoId?: true
  }

  export type TextContentSumAggregateInputType = {
    textInfoId?: true
  }

  export type TextContentMinAggregateInputType = {
    id?: true
    textInfoId?: true
    content?: true
  }

  export type TextContentMaxAggregateInputType = {
    id?: true
    textInfoId?: true
    content?: true
  }

  export type TextContentCountAggregateInputType = {
    id?: true
    textInfoId?: true
    content?: true
    _all?: true
  }

  export type TextContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextContent to aggregate.
     */
    where?: TextContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextContents to fetch.
     */
    orderBy?: TextContentOrderByWithRelationInput | TextContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TextContents
    **/
    _count?: true | TextContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextContentMaxAggregateInputType
  }

  export type GetTextContentAggregateType<T extends TextContentAggregateArgs> = {
        [P in keyof T & keyof AggregateTextContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTextContent[P]>
      : GetScalarType<T[P], AggregateTextContent[P]>
  }




  export type TextContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextContentWhereInput
    orderBy?: TextContentOrderByWithAggregationInput | TextContentOrderByWithAggregationInput[]
    by: TextContentScalarFieldEnum[] | TextContentScalarFieldEnum
    having?: TextContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextContentCountAggregateInputType | true
    _avg?: TextContentAvgAggregateInputType
    _sum?: TextContentSumAggregateInputType
    _min?: TextContentMinAggregateInputType
    _max?: TextContentMaxAggregateInputType
  }

  export type TextContentGroupByOutputType = {
    id: string
    textInfoId: number
    content: string
    _count: TextContentCountAggregateOutputType | null
    _avg: TextContentAvgAggregateOutputType | null
    _sum: TextContentSumAggregateOutputType | null
    _min: TextContentMinAggregateOutputType | null
    _max: TextContentMaxAggregateOutputType | null
  }

  type GetTextContentGroupByPayload<T extends TextContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextContentGroupByOutputType[P]>
            : GetScalarType<T[P], TextContentGroupByOutputType[P]>
        }
      >
    >


  export type TextContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    textInfoId?: boolean
    content?: boolean
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textContent"]>

  export type TextContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    textInfoId?: boolean
    content?: boolean
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textContent"]>

  export type TextContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    textInfoId?: boolean
    content?: boolean
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textContent"]>

  export type TextContentSelectScalar = {
    id?: boolean
    textInfoId?: boolean
    content?: boolean
  }

  export type TextContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "textInfoId" | "content", ExtArgs["result"]["textContent"]>
  export type TextContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }
  export type TextContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }
  export type TextContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }

  export type $TextContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TextContent"
    objects: {
      textInfo: Prisma.$TextInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      textInfoId: number
      content: string
    }, ExtArgs["result"]["textContent"]>
    composites: {}
  }

  type TextContentGetPayload<S extends boolean | null | undefined | TextContentDefaultArgs> = $Result.GetResult<Prisma.$TextContentPayload, S>

  type TextContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextContentCountAggregateInputType | true
    }

  export interface TextContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TextContent'], meta: { name: 'TextContent' } }
    /**
     * Find zero or one TextContent that matches the filter.
     * @param {TextContentFindUniqueArgs} args - Arguments to find a TextContent
     * @example
     * // Get one TextContent
     * const textContent = await prisma.textContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextContentFindUniqueArgs>(args: SelectSubset<T, TextContentFindUniqueArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TextContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextContentFindUniqueOrThrowArgs} args - Arguments to find a TextContent
     * @example
     * // Get one TextContent
     * const textContent = await prisma.textContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextContentFindUniqueOrThrowArgs>(args: SelectSubset<T, TextContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentFindFirstArgs} args - Arguments to find a TextContent
     * @example
     * // Get one TextContent
     * const textContent = await prisma.textContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextContentFindFirstArgs>(args?: SelectSubset<T, TextContentFindFirstArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentFindFirstOrThrowArgs} args - Arguments to find a TextContent
     * @example
     * // Get one TextContent
     * const textContent = await prisma.textContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextContentFindFirstOrThrowArgs>(args?: SelectSubset<T, TextContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TextContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TextContents
     * const textContents = await prisma.textContent.findMany()
     * 
     * // Get first 10 TextContents
     * const textContents = await prisma.textContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textContentWithIdOnly = await prisma.textContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextContentFindManyArgs>(args?: SelectSubset<T, TextContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TextContent.
     * @param {TextContentCreateArgs} args - Arguments to create a TextContent.
     * @example
     * // Create one TextContent
     * const TextContent = await prisma.textContent.create({
     *   data: {
     *     // ... data to create a TextContent
     *   }
     * })
     * 
     */
    create<T extends TextContentCreateArgs>(args: SelectSubset<T, TextContentCreateArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TextContents.
     * @param {TextContentCreateManyArgs} args - Arguments to create many TextContents.
     * @example
     * // Create many TextContents
     * const textContent = await prisma.textContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextContentCreateManyArgs>(args?: SelectSubset<T, TextContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TextContents and returns the data saved in the database.
     * @param {TextContentCreateManyAndReturnArgs} args - Arguments to create many TextContents.
     * @example
     * // Create many TextContents
     * const textContent = await prisma.textContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TextContents and only return the `id`
     * const textContentWithIdOnly = await prisma.textContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TextContentCreateManyAndReturnArgs>(args?: SelectSubset<T, TextContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TextContent.
     * @param {TextContentDeleteArgs} args - Arguments to delete one TextContent.
     * @example
     * // Delete one TextContent
     * const TextContent = await prisma.textContent.delete({
     *   where: {
     *     // ... filter to delete one TextContent
     *   }
     * })
     * 
     */
    delete<T extends TextContentDeleteArgs>(args: SelectSubset<T, TextContentDeleteArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TextContent.
     * @param {TextContentUpdateArgs} args - Arguments to update one TextContent.
     * @example
     * // Update one TextContent
     * const textContent = await prisma.textContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextContentUpdateArgs>(args: SelectSubset<T, TextContentUpdateArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TextContents.
     * @param {TextContentDeleteManyArgs} args - Arguments to filter TextContents to delete.
     * @example
     * // Delete a few TextContents
     * const { count } = await prisma.textContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextContentDeleteManyArgs>(args?: SelectSubset<T, TextContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TextContents
     * const textContent = await prisma.textContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextContentUpdateManyArgs>(args: SelectSubset<T, TextContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextContents and returns the data updated in the database.
     * @param {TextContentUpdateManyAndReturnArgs} args - Arguments to update many TextContents.
     * @example
     * // Update many TextContents
     * const textContent = await prisma.textContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TextContents and only return the `id`
     * const textContentWithIdOnly = await prisma.textContent.updateManyAndReturn({
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
    updateManyAndReturn<T extends TextContentUpdateManyAndReturnArgs>(args: SelectSubset<T, TextContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TextContent.
     * @param {TextContentUpsertArgs} args - Arguments to update or create a TextContent.
     * @example
     * // Update or create a TextContent
     * const textContent = await prisma.textContent.upsert({
     *   create: {
     *     // ... data to create a TextContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TextContent we want to update
     *   }
     * })
     */
    upsert<T extends TextContentUpsertArgs>(args: SelectSubset<T, TextContentUpsertArgs<ExtArgs>>): Prisma__TextContentClient<$Result.GetResult<Prisma.$TextContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TextContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentCountArgs} args - Arguments to filter TextContents to count.
     * @example
     * // Count the number of TextContents
     * const count = await prisma.textContent.count({
     *   where: {
     *     // ... the filter for the TextContents we want to count
     *   }
     * })
    **/
    count<T extends TextContentCountArgs>(
      args?: Subset<T, TextContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TextContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextContentAggregateArgs>(args: Subset<T, TextContentAggregateArgs>): Prisma.PrismaPromise<GetTextContentAggregateType<T>>

    /**
     * Group by TextContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextContentGroupByArgs} args - Group by arguments.
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
      T extends TextContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextContentGroupByArgs['orderBy'] }
        : { orderBy?: TextContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TextContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TextContent model
   */
  readonly fields: TextContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TextContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    textInfo<T extends TextInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TextInfoDefaultArgs<ExtArgs>>): Prisma__TextInfoClient<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TextContent model
   */
  interface TextContentFieldRefs {
    readonly id: FieldRef<"TextContent", 'String'>
    readonly textInfoId: FieldRef<"TextContent", 'Int'>
    readonly content: FieldRef<"TextContent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TextContent findUnique
   */
  export type TextContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter, which TextContent to fetch.
     */
    where: TextContentWhereUniqueInput
  }

  /**
   * TextContent findUniqueOrThrow
   */
  export type TextContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter, which TextContent to fetch.
     */
    where: TextContentWhereUniqueInput
  }

  /**
   * TextContent findFirst
   */
  export type TextContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter, which TextContent to fetch.
     */
    where?: TextContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextContents to fetch.
     */
    orderBy?: TextContentOrderByWithRelationInput | TextContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextContents.
     */
    cursor?: TextContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextContents.
     */
    distinct?: TextContentScalarFieldEnum | TextContentScalarFieldEnum[]
  }

  /**
   * TextContent findFirstOrThrow
   */
  export type TextContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter, which TextContent to fetch.
     */
    where?: TextContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextContents to fetch.
     */
    orderBy?: TextContentOrderByWithRelationInput | TextContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextContents.
     */
    cursor?: TextContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextContents.
     */
    distinct?: TextContentScalarFieldEnum | TextContentScalarFieldEnum[]
  }

  /**
   * TextContent findMany
   */
  export type TextContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter, which TextContents to fetch.
     */
    where?: TextContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextContents to fetch.
     */
    orderBy?: TextContentOrderByWithRelationInput | TextContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TextContents.
     */
    cursor?: TextContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextContents.
     */
    skip?: number
    distinct?: TextContentScalarFieldEnum | TextContentScalarFieldEnum[]
  }

  /**
   * TextContent create
   */
  export type TextContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * The data needed to create a TextContent.
     */
    data: XOR<TextContentCreateInput, TextContentUncheckedCreateInput>
  }

  /**
   * TextContent createMany
   */
  export type TextContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TextContents.
     */
    data: TextContentCreateManyInput | TextContentCreateManyInput[]
  }

  /**
   * TextContent createManyAndReturn
   */
  export type TextContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * The data used to create many TextContents.
     */
    data: TextContentCreateManyInput | TextContentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TextContent update
   */
  export type TextContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * The data needed to update a TextContent.
     */
    data: XOR<TextContentUpdateInput, TextContentUncheckedUpdateInput>
    /**
     * Choose, which TextContent to update.
     */
    where: TextContentWhereUniqueInput
  }

  /**
   * TextContent updateMany
   */
  export type TextContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TextContents.
     */
    data: XOR<TextContentUpdateManyMutationInput, TextContentUncheckedUpdateManyInput>
    /**
     * Filter which TextContents to update
     */
    where?: TextContentWhereInput
    /**
     * Limit how many TextContents to update.
     */
    limit?: number
  }

  /**
   * TextContent updateManyAndReturn
   */
  export type TextContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * The data used to update TextContents.
     */
    data: XOR<TextContentUpdateManyMutationInput, TextContentUncheckedUpdateManyInput>
    /**
     * Filter which TextContents to update
     */
    where?: TextContentWhereInput
    /**
     * Limit how many TextContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TextContent upsert
   */
  export type TextContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * The filter to search for the TextContent to update in case it exists.
     */
    where: TextContentWhereUniqueInput
    /**
     * In case the TextContent found by the `where` argument doesn't exist, create a new TextContent with this data.
     */
    create: XOR<TextContentCreateInput, TextContentUncheckedCreateInput>
    /**
     * In case the TextContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextContentUpdateInput, TextContentUncheckedUpdateInput>
  }

  /**
   * TextContent delete
   */
  export type TextContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
    /**
     * Filter which TextContent to delete.
     */
    where: TextContentWhereUniqueInput
  }

  /**
   * TextContent deleteMany
   */
  export type TextContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextContents to delete
     */
    where?: TextContentWhereInput
    /**
     * Limit how many TextContents to delete.
     */
    limit?: number
  }

  /**
   * TextContent without action
   */
  export type TextContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextContent
     */
    select?: TextContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextContent
     */
    omit?: TextContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextContentInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    textInfoId: number | null
  }

  export type ImageSumAggregateOutputType = {
    textInfoId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    textInfoId: number | null
    url: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    textInfoId: number | null
    url: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    textInfoId: number
    url: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    textInfoId?: true
  }

  export type ImageSumAggregateInputType = {
    textInfoId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    textInfoId?: true
    url?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    textInfoId?: true
    url?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    textInfoId?: true
    url?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    textInfoId: number
    url: string
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    textInfoId?: boolean
    url?: boolean
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    textInfoId?: boolean
    url?: boolean
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    textInfoId?: boolean
    url?: boolean
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    textInfoId?: boolean
    url?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "textInfoId" | "url", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    textInfo?: boolean | TextInfoDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      textInfo: Prisma.$TextInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      textInfoId: number
      url: string
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    textInfo<T extends TextInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TextInfoDefaultArgs<ExtArgs>>): Prisma__TextInfoClient<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly textInfoId: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model TextualGenre
   */

  export type AggregateTextualGenre = {
    _count: TextualGenreCountAggregateOutputType | null
    _avg: TextualGenreAvgAggregateOutputType | null
    _sum: TextualGenreSumAggregateOutputType | null
    _min: TextualGenreMinAggregateOutputType | null
    _max: TextualGenreMaxAggregateOutputType | null
  }

  export type TextualGenreAvgAggregateOutputType = {
    id: number | null
  }

  export type TextualGenreSumAggregateOutputType = {
    id: number | null
  }

  export type TextualGenreMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorName: string | null
  }

  export type TextualGenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorName: string | null
  }

  export type TextualGenreCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    creatorName: number
    _all: number
  }


  export type TextualGenreAvgAggregateInputType = {
    id?: true
  }

  export type TextualGenreSumAggregateInputType = {
    id?: true
  }

  export type TextualGenreMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    creatorName?: true
  }

  export type TextualGenreMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    creatorName?: true
  }

  export type TextualGenreCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    creatorName?: true
    _all?: true
  }

  export type TextualGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextualGenre to aggregate.
     */
    where?: TextualGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextualGenres to fetch.
     */
    orderBy?: TextualGenreOrderByWithRelationInput | TextualGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextualGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextualGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextualGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TextualGenres
    **/
    _count?: true | TextualGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextualGenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextualGenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextualGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextualGenreMaxAggregateInputType
  }

  export type GetTextualGenreAggregateType<T extends TextualGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateTextualGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTextualGenre[P]>
      : GetScalarType<T[P], AggregateTextualGenre[P]>
  }




  export type TextualGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TextualGenreWhereInput
    orderBy?: TextualGenreOrderByWithAggregationInput | TextualGenreOrderByWithAggregationInput[]
    by: TextualGenreScalarFieldEnum[] | TextualGenreScalarFieldEnum
    having?: TextualGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextualGenreCountAggregateInputType | true
    _avg?: TextualGenreAvgAggregateInputType
    _sum?: TextualGenreSumAggregateInputType
    _min?: TextualGenreMinAggregateInputType
    _max?: TextualGenreMaxAggregateInputType
  }

  export type TextualGenreGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    creatorName: string
    _count: TextualGenreCountAggregateOutputType | null
    _avg: TextualGenreAvgAggregateOutputType | null
    _sum: TextualGenreSumAggregateOutputType | null
    _min: TextualGenreMinAggregateOutputType | null
    _max: TextualGenreMaxAggregateOutputType | null
  }

  type GetTextualGenreGroupByPayload<T extends TextualGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TextualGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextualGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextualGenreGroupByOutputType[P]>
            : GetScalarType<T[P], TextualGenreGroupByOutputType[P]>
        }
      >
    >


  export type TextualGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorName?: boolean
    texts?: boolean | TextualGenre$textsArgs<ExtArgs>
    _count?: boolean | TextualGenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["textualGenre"]>

  export type TextualGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorName?: boolean
  }, ExtArgs["result"]["textualGenre"]>

  export type TextualGenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorName?: boolean
  }, ExtArgs["result"]["textualGenre"]>

  export type TextualGenreSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorName?: boolean
  }

  export type TextualGenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "creatorName", ExtArgs["result"]["textualGenre"]>
  export type TextualGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    texts?: boolean | TextualGenre$textsArgs<ExtArgs>
    _count?: boolean | TextualGenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TextualGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TextualGenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TextualGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TextualGenre"
    objects: {
      texts: Prisma.$TextInfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      creatorName: string
    }, ExtArgs["result"]["textualGenre"]>
    composites: {}
  }

  type TextualGenreGetPayload<S extends boolean | null | undefined | TextualGenreDefaultArgs> = $Result.GetResult<Prisma.$TextualGenrePayload, S>

  type TextualGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TextualGenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TextualGenreCountAggregateInputType | true
    }

  export interface TextualGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TextualGenre'], meta: { name: 'TextualGenre' } }
    /**
     * Find zero or one TextualGenre that matches the filter.
     * @param {TextualGenreFindUniqueArgs} args - Arguments to find a TextualGenre
     * @example
     * // Get one TextualGenre
     * const textualGenre = await prisma.textualGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TextualGenreFindUniqueArgs>(args: SelectSubset<T, TextualGenreFindUniqueArgs<ExtArgs>>): Prisma__TextualGenreClient<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TextualGenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TextualGenreFindUniqueOrThrowArgs} args - Arguments to find a TextualGenre
     * @example
     * // Get one TextualGenre
     * const textualGenre = await prisma.textualGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TextualGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, TextualGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TextualGenreClient<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextualGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextualGenreFindFirstArgs} args - Arguments to find a TextualGenre
     * @example
     * // Get one TextualGenre
     * const textualGenre = await prisma.textualGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TextualGenreFindFirstArgs>(args?: SelectSubset<T, TextualGenreFindFirstArgs<ExtArgs>>): Prisma__TextualGenreClient<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TextualGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextualGenreFindFirstOrThrowArgs} args - Arguments to find a TextualGenre
     * @example
     * // Get one TextualGenre
     * const textualGenre = await prisma.textualGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TextualGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, TextualGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__TextualGenreClient<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TextualGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextualGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TextualGenres
     * const textualGenres = await prisma.textualGenre.findMany()
     * 
     * // Get first 10 TextualGenres
     * const textualGenres = await prisma.textualGenre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textualGenreWithIdOnly = await prisma.textualGenre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TextualGenreFindManyArgs>(args?: SelectSubset<T, TextualGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TextualGenre.
     * @param {TextualGenreCreateArgs} args - Arguments to create a TextualGenre.
     * @example
     * // Create one TextualGenre
     * const TextualGenre = await prisma.textualGenre.create({
     *   data: {
     *     // ... data to create a TextualGenre
     *   }
     * })
     * 
     */
    create<T extends TextualGenreCreateArgs>(args: SelectSubset<T, TextualGenreCreateArgs<ExtArgs>>): Prisma__TextualGenreClient<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TextualGenres.
     * @param {TextualGenreCreateManyArgs} args - Arguments to create many TextualGenres.
     * @example
     * // Create many TextualGenres
     * const textualGenre = await prisma.textualGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TextualGenreCreateManyArgs>(args?: SelectSubset<T, TextualGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TextualGenres and returns the data saved in the database.
     * @param {TextualGenreCreateManyAndReturnArgs} args - Arguments to create many TextualGenres.
     * @example
     * // Create many TextualGenres
     * const textualGenre = await prisma.textualGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TextualGenres and only return the `id`
     * const textualGenreWithIdOnly = await prisma.textualGenre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TextualGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, TextualGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TextualGenre.
     * @param {TextualGenreDeleteArgs} args - Arguments to delete one TextualGenre.
     * @example
     * // Delete one TextualGenre
     * const TextualGenre = await prisma.textualGenre.delete({
     *   where: {
     *     // ... filter to delete one TextualGenre
     *   }
     * })
     * 
     */
    delete<T extends TextualGenreDeleteArgs>(args: SelectSubset<T, TextualGenreDeleteArgs<ExtArgs>>): Prisma__TextualGenreClient<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TextualGenre.
     * @param {TextualGenreUpdateArgs} args - Arguments to update one TextualGenre.
     * @example
     * // Update one TextualGenre
     * const textualGenre = await prisma.textualGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TextualGenreUpdateArgs>(args: SelectSubset<T, TextualGenreUpdateArgs<ExtArgs>>): Prisma__TextualGenreClient<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TextualGenres.
     * @param {TextualGenreDeleteManyArgs} args - Arguments to filter TextualGenres to delete.
     * @example
     * // Delete a few TextualGenres
     * const { count } = await prisma.textualGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TextualGenreDeleteManyArgs>(args?: SelectSubset<T, TextualGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextualGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextualGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TextualGenres
     * const textualGenre = await prisma.textualGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TextualGenreUpdateManyArgs>(args: SelectSubset<T, TextualGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextualGenres and returns the data updated in the database.
     * @param {TextualGenreUpdateManyAndReturnArgs} args - Arguments to update many TextualGenres.
     * @example
     * // Update many TextualGenres
     * const textualGenre = await prisma.textualGenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TextualGenres and only return the `id`
     * const textualGenreWithIdOnly = await prisma.textualGenre.updateManyAndReturn({
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
    updateManyAndReturn<T extends TextualGenreUpdateManyAndReturnArgs>(args: SelectSubset<T, TextualGenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TextualGenre.
     * @param {TextualGenreUpsertArgs} args - Arguments to update or create a TextualGenre.
     * @example
     * // Update or create a TextualGenre
     * const textualGenre = await prisma.textualGenre.upsert({
     *   create: {
     *     // ... data to create a TextualGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TextualGenre we want to update
     *   }
     * })
     */
    upsert<T extends TextualGenreUpsertArgs>(args: SelectSubset<T, TextualGenreUpsertArgs<ExtArgs>>): Prisma__TextualGenreClient<$Result.GetResult<Prisma.$TextualGenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TextualGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextualGenreCountArgs} args - Arguments to filter TextualGenres to count.
     * @example
     * // Count the number of TextualGenres
     * const count = await prisma.textualGenre.count({
     *   where: {
     *     // ... the filter for the TextualGenres we want to count
     *   }
     * })
    **/
    count<T extends TextualGenreCountArgs>(
      args?: Subset<T, TextualGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextualGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TextualGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextualGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextualGenreAggregateArgs>(args: Subset<T, TextualGenreAggregateArgs>): Prisma.PrismaPromise<GetTextualGenreAggregateType<T>>

    /**
     * Group by TextualGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextualGenreGroupByArgs} args - Group by arguments.
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
      T extends TextualGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextualGenreGroupByArgs['orderBy'] }
        : { orderBy?: TextualGenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TextualGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextualGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TextualGenre model
   */
  readonly fields: TextualGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TextualGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TextualGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    texts<T extends TextualGenre$textsArgs<ExtArgs> = {}>(args?: Subset<T, TextualGenre$textsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TextInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TextualGenre model
   */
  interface TextualGenreFieldRefs {
    readonly id: FieldRef<"TextualGenre", 'Int'>
    readonly name: FieldRef<"TextualGenre", 'String'>
    readonly createdAt: FieldRef<"TextualGenre", 'DateTime'>
    readonly updatedAt: FieldRef<"TextualGenre", 'DateTime'>
    readonly creatorName: FieldRef<"TextualGenre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TextualGenre findUnique
   */
  export type TextualGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextualGenreInclude<ExtArgs> | null
    /**
     * Filter, which TextualGenre to fetch.
     */
    where: TextualGenreWhereUniqueInput
  }

  /**
   * TextualGenre findUniqueOrThrow
   */
  export type TextualGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextualGenreInclude<ExtArgs> | null
    /**
     * Filter, which TextualGenre to fetch.
     */
    where: TextualGenreWhereUniqueInput
  }

  /**
   * TextualGenre findFirst
   */
  export type TextualGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextualGenreInclude<ExtArgs> | null
    /**
     * Filter, which TextualGenre to fetch.
     */
    where?: TextualGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextualGenres to fetch.
     */
    orderBy?: TextualGenreOrderByWithRelationInput | TextualGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextualGenres.
     */
    cursor?: TextualGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextualGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextualGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextualGenres.
     */
    distinct?: TextualGenreScalarFieldEnum | TextualGenreScalarFieldEnum[]
  }

  /**
   * TextualGenre findFirstOrThrow
   */
  export type TextualGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextualGenreInclude<ExtArgs> | null
    /**
     * Filter, which TextualGenre to fetch.
     */
    where?: TextualGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextualGenres to fetch.
     */
    orderBy?: TextualGenreOrderByWithRelationInput | TextualGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextualGenres.
     */
    cursor?: TextualGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextualGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextualGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextualGenres.
     */
    distinct?: TextualGenreScalarFieldEnum | TextualGenreScalarFieldEnum[]
  }

  /**
   * TextualGenre findMany
   */
  export type TextualGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextualGenreInclude<ExtArgs> | null
    /**
     * Filter, which TextualGenres to fetch.
     */
    where?: TextualGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextualGenres to fetch.
     */
    orderBy?: TextualGenreOrderByWithRelationInput | TextualGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TextualGenres.
     */
    cursor?: TextualGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextualGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextualGenres.
     */
    skip?: number
    distinct?: TextualGenreScalarFieldEnum | TextualGenreScalarFieldEnum[]
  }

  /**
   * TextualGenre create
   */
  export type TextualGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextualGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a TextualGenre.
     */
    data: XOR<TextualGenreCreateInput, TextualGenreUncheckedCreateInput>
  }

  /**
   * TextualGenre createMany
   */
  export type TextualGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TextualGenres.
     */
    data: TextualGenreCreateManyInput | TextualGenreCreateManyInput[]
  }

  /**
   * TextualGenre createManyAndReturn
   */
  export type TextualGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * The data used to create many TextualGenres.
     */
    data: TextualGenreCreateManyInput | TextualGenreCreateManyInput[]
  }

  /**
   * TextualGenre update
   */
  export type TextualGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextualGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a TextualGenre.
     */
    data: XOR<TextualGenreUpdateInput, TextualGenreUncheckedUpdateInput>
    /**
     * Choose, which TextualGenre to update.
     */
    where: TextualGenreWhereUniqueInput
  }

  /**
   * TextualGenre updateMany
   */
  export type TextualGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TextualGenres.
     */
    data: XOR<TextualGenreUpdateManyMutationInput, TextualGenreUncheckedUpdateManyInput>
    /**
     * Filter which TextualGenres to update
     */
    where?: TextualGenreWhereInput
    /**
     * Limit how many TextualGenres to update.
     */
    limit?: number
  }

  /**
   * TextualGenre updateManyAndReturn
   */
  export type TextualGenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * The data used to update TextualGenres.
     */
    data: XOR<TextualGenreUpdateManyMutationInput, TextualGenreUncheckedUpdateManyInput>
    /**
     * Filter which TextualGenres to update
     */
    where?: TextualGenreWhereInput
    /**
     * Limit how many TextualGenres to update.
     */
    limit?: number
  }

  /**
   * TextualGenre upsert
   */
  export type TextualGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextualGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the TextualGenre to update in case it exists.
     */
    where: TextualGenreWhereUniqueInput
    /**
     * In case the TextualGenre found by the `where` argument doesn't exist, create a new TextualGenre with this data.
     */
    create: XOR<TextualGenreCreateInput, TextualGenreUncheckedCreateInput>
    /**
     * In case the TextualGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextualGenreUpdateInput, TextualGenreUncheckedUpdateInput>
  }

  /**
   * TextualGenre delete
   */
  export type TextualGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextualGenreInclude<ExtArgs> | null
    /**
     * Filter which TextualGenre to delete.
     */
    where: TextualGenreWhereUniqueInput
  }

  /**
   * TextualGenre deleteMany
   */
  export type TextualGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TextualGenres to delete
     */
    where?: TextualGenreWhereInput
    /**
     * Limit how many TextualGenres to delete.
     */
    limit?: number
  }

  /**
   * TextualGenre.texts
   */
  export type TextualGenre$textsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextInfo
     */
    select?: TextInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextInfo
     */
    omit?: TextInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextInfoInclude<ExtArgs> | null
    where?: TextInfoWhereInput
    orderBy?: TextInfoOrderByWithRelationInput | TextInfoOrderByWithRelationInput[]
    cursor?: TextInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TextInfoScalarFieldEnum | TextInfoScalarFieldEnum[]
  }

  /**
   * TextualGenre without action
   */
  export type TextualGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TextualGenre
     */
    select?: TextualGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TextualGenre
     */
    omit?: TextualGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TextualGenreInclude<ExtArgs> | null
  }


  /**
   * Model AdminActivityLog
   */

  export type AggregateAdminActivityLog = {
    _count: AdminActivityLogCountAggregateOutputType | null
    _avg: AdminActivityLogAvgAggregateOutputType | null
    _sum: AdminActivityLogSumAggregateOutputType | null
    _min: AdminActivityLogMinAggregateOutputType | null
    _max: AdminActivityLogMaxAggregateOutputType | null
  }

  export type AdminActivityLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AdminActivityLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AdminActivityLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    createAt: Date | null
  }

  export type AdminActivityLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    createAt: Date | null
  }

  export type AdminActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    createAt: number
    _all: number
  }


  export type AdminActivityLogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminActivityLogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    createAt?: true
  }

  export type AdminActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    createAt?: true
  }

  export type AdminActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    createAt?: true
    _all?: true
  }

  export type AdminActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminActivityLog to aggregate.
     */
    where?: AdminActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivityLogs to fetch.
     */
    orderBy?: AdminActivityLogOrderByWithRelationInput | AdminActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminActivityLogs
    **/
    _count?: true | AdminActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminActivityLogMaxAggregateInputType
  }

  export type GetAdminActivityLogAggregateType<T extends AdminActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminActivityLog[P]>
      : GetScalarType<T[P], AggregateAdminActivityLog[P]>
  }




  export type AdminActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminActivityLogWhereInput
    orderBy?: AdminActivityLogOrderByWithAggregationInput | AdminActivityLogOrderByWithAggregationInput[]
    by: AdminActivityLogScalarFieldEnum[] | AdminActivityLogScalarFieldEnum
    having?: AdminActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminActivityLogCountAggregateInputType | true
    _avg?: AdminActivityLogAvgAggregateInputType
    _sum?: AdminActivityLogSumAggregateInputType
    _min?: AdminActivityLogMinAggregateInputType
    _max?: AdminActivityLogMaxAggregateInputType
  }

  export type AdminActivityLogGroupByOutputType = {
    id: number
    userId: number
    action: string
    createAt: Date
    _count: AdminActivityLogCountAggregateOutputType | null
    _avg: AdminActivityLogAvgAggregateOutputType | null
    _sum: AdminActivityLogSumAggregateOutputType | null
    _min: AdminActivityLogMinAggregateOutputType | null
    _max: AdminActivityLogMaxAggregateOutputType | null
  }

  type GetAdminActivityLogGroupByPayload<T extends AdminActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdminActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type AdminActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminActivityLog"]>

  export type AdminActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminActivityLog"]>

  export type AdminActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminActivityLog"]>

  export type AdminActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    createAt?: boolean
  }

  export type AdminActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "createAt", ExtArgs["result"]["adminActivityLog"]>
  export type AdminActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      action: string
      createAt: Date
    }, ExtArgs["result"]["adminActivityLog"]>
    composites: {}
  }

  type AdminActivityLogGetPayload<S extends boolean | null | undefined | AdminActivityLogDefaultArgs> = $Result.GetResult<Prisma.$AdminActivityLogPayload, S>

  type AdminActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminActivityLogCountAggregateInputType | true
    }

  export interface AdminActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminActivityLog'], meta: { name: 'AdminActivityLog' } }
    /**
     * Find zero or one AdminActivityLog that matches the filter.
     * @param {AdminActivityLogFindUniqueArgs} args - Arguments to find a AdminActivityLog
     * @example
     * // Get one AdminActivityLog
     * const adminActivityLog = await prisma.adminActivityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminActivityLogFindUniqueArgs>(args: SelectSubset<T, AdminActivityLogFindUniqueArgs<ExtArgs>>): Prisma__AdminActivityLogClient<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminActivityLogFindUniqueOrThrowArgs} args - Arguments to find a AdminActivityLog
     * @example
     * // Get one AdminActivityLog
     * const adminActivityLog = await prisma.adminActivityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminActivityLogClient<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityLogFindFirstArgs} args - Arguments to find a AdminActivityLog
     * @example
     * // Get one AdminActivityLog
     * const adminActivityLog = await prisma.adminActivityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminActivityLogFindFirstArgs>(args?: SelectSubset<T, AdminActivityLogFindFirstArgs<ExtArgs>>): Prisma__AdminActivityLogClient<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityLogFindFirstOrThrowArgs} args - Arguments to find a AdminActivityLog
     * @example
     * // Get one AdminActivityLog
     * const adminActivityLog = await prisma.adminActivityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminActivityLogClient<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminActivityLogs
     * const adminActivityLogs = await prisma.adminActivityLog.findMany()
     * 
     * // Get first 10 AdminActivityLogs
     * const adminActivityLogs = await prisma.adminActivityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminActivityLogWithIdOnly = await prisma.adminActivityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminActivityLogFindManyArgs>(args?: SelectSubset<T, AdminActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminActivityLog.
     * @param {AdminActivityLogCreateArgs} args - Arguments to create a AdminActivityLog.
     * @example
     * // Create one AdminActivityLog
     * const AdminActivityLog = await prisma.adminActivityLog.create({
     *   data: {
     *     // ... data to create a AdminActivityLog
     *   }
     * })
     * 
     */
    create<T extends AdminActivityLogCreateArgs>(args: SelectSubset<T, AdminActivityLogCreateArgs<ExtArgs>>): Prisma__AdminActivityLogClient<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminActivityLogs.
     * @param {AdminActivityLogCreateManyArgs} args - Arguments to create many AdminActivityLogs.
     * @example
     * // Create many AdminActivityLogs
     * const adminActivityLog = await prisma.adminActivityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminActivityLogCreateManyArgs>(args?: SelectSubset<T, AdminActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminActivityLogs and returns the data saved in the database.
     * @param {AdminActivityLogCreateManyAndReturnArgs} args - Arguments to create many AdminActivityLogs.
     * @example
     * // Create many AdminActivityLogs
     * const adminActivityLog = await prisma.adminActivityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminActivityLogs and only return the `id`
     * const adminActivityLogWithIdOnly = await prisma.adminActivityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminActivityLog.
     * @param {AdminActivityLogDeleteArgs} args - Arguments to delete one AdminActivityLog.
     * @example
     * // Delete one AdminActivityLog
     * const AdminActivityLog = await prisma.adminActivityLog.delete({
     *   where: {
     *     // ... filter to delete one AdminActivityLog
     *   }
     * })
     * 
     */
    delete<T extends AdminActivityLogDeleteArgs>(args: SelectSubset<T, AdminActivityLogDeleteArgs<ExtArgs>>): Prisma__AdminActivityLogClient<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminActivityLog.
     * @param {AdminActivityLogUpdateArgs} args - Arguments to update one AdminActivityLog.
     * @example
     * // Update one AdminActivityLog
     * const adminActivityLog = await prisma.adminActivityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminActivityLogUpdateArgs>(args: SelectSubset<T, AdminActivityLogUpdateArgs<ExtArgs>>): Prisma__AdminActivityLogClient<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminActivityLogs.
     * @param {AdminActivityLogDeleteManyArgs} args - Arguments to filter AdminActivityLogs to delete.
     * @example
     * // Delete a few AdminActivityLogs
     * const { count } = await prisma.adminActivityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminActivityLogDeleteManyArgs>(args?: SelectSubset<T, AdminActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminActivityLogs
     * const adminActivityLog = await prisma.adminActivityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminActivityLogUpdateManyArgs>(args: SelectSubset<T, AdminActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminActivityLogs and returns the data updated in the database.
     * @param {AdminActivityLogUpdateManyAndReturnArgs} args - Arguments to update many AdminActivityLogs.
     * @example
     * // Update many AdminActivityLogs
     * const adminActivityLog = await prisma.adminActivityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminActivityLogs and only return the `id`
     * const adminActivityLogWithIdOnly = await prisma.adminActivityLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminActivityLog.
     * @param {AdminActivityLogUpsertArgs} args - Arguments to update or create a AdminActivityLog.
     * @example
     * // Update or create a AdminActivityLog
     * const adminActivityLog = await prisma.adminActivityLog.upsert({
     *   create: {
     *     // ... data to create a AdminActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends AdminActivityLogUpsertArgs>(args: SelectSubset<T, AdminActivityLogUpsertArgs<ExtArgs>>): Prisma__AdminActivityLogClient<$Result.GetResult<Prisma.$AdminActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityLogCountArgs} args - Arguments to filter AdminActivityLogs to count.
     * @example
     * // Count the number of AdminActivityLogs
     * const count = await prisma.adminActivityLog.count({
     *   where: {
     *     // ... the filter for the AdminActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends AdminActivityLogCountArgs>(
      args?: Subset<T, AdminActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminActivityLogAggregateArgs>(args: Subset<T, AdminActivityLogAggregateArgs>): Prisma.PrismaPromise<GetAdminActivityLogAggregateType<T>>

    /**
     * Group by AdminActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityLogGroupByArgs} args - Group by arguments.
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
      T extends AdminActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: AdminActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminActivityLog model
   */
  readonly fields: AdminActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AdminActivityLog model
   */
  interface AdminActivityLogFieldRefs {
    readonly id: FieldRef<"AdminActivityLog", 'Int'>
    readonly userId: FieldRef<"AdminActivityLog", 'Int'>
    readonly action: FieldRef<"AdminActivityLog", 'String'>
    readonly createAt: FieldRef<"AdminActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminActivityLog findUnique
   */
  export type AdminActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivityLog to fetch.
     */
    where: AdminActivityLogWhereUniqueInput
  }

  /**
   * AdminActivityLog findUniqueOrThrow
   */
  export type AdminActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivityLog to fetch.
     */
    where: AdminActivityLogWhereUniqueInput
  }

  /**
   * AdminActivityLog findFirst
   */
  export type AdminActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivityLog to fetch.
     */
    where?: AdminActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivityLogs to fetch.
     */
    orderBy?: AdminActivityLogOrderByWithRelationInput | AdminActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminActivityLogs.
     */
    cursor?: AdminActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminActivityLogs.
     */
    distinct?: AdminActivityLogScalarFieldEnum | AdminActivityLogScalarFieldEnum[]
  }

  /**
   * AdminActivityLog findFirstOrThrow
   */
  export type AdminActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivityLog to fetch.
     */
    where?: AdminActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivityLogs to fetch.
     */
    orderBy?: AdminActivityLogOrderByWithRelationInput | AdminActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminActivityLogs.
     */
    cursor?: AdminActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminActivityLogs.
     */
    distinct?: AdminActivityLogScalarFieldEnum | AdminActivityLogScalarFieldEnum[]
  }

  /**
   * AdminActivityLog findMany
   */
  export type AdminActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivityLogs to fetch.
     */
    where?: AdminActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivityLogs to fetch.
     */
    orderBy?: AdminActivityLogOrderByWithRelationInput | AdminActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminActivityLogs.
     */
    cursor?: AdminActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivityLogs.
     */
    skip?: number
    distinct?: AdminActivityLogScalarFieldEnum | AdminActivityLogScalarFieldEnum[]
  }

  /**
   * AdminActivityLog create
   */
  export type AdminActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminActivityLog.
     */
    data: XOR<AdminActivityLogCreateInput, AdminActivityLogUncheckedCreateInput>
  }

  /**
   * AdminActivityLog createMany
   */
  export type AdminActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminActivityLogs.
     */
    data: AdminActivityLogCreateManyInput | AdminActivityLogCreateManyInput[]
  }

  /**
   * AdminActivityLog createManyAndReturn
   */
  export type AdminActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many AdminActivityLogs.
     */
    data: AdminActivityLogCreateManyInput | AdminActivityLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminActivityLog update
   */
  export type AdminActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminActivityLog.
     */
    data: XOR<AdminActivityLogUpdateInput, AdminActivityLogUncheckedUpdateInput>
    /**
     * Choose, which AdminActivityLog to update.
     */
    where: AdminActivityLogWhereUniqueInput
  }

  /**
   * AdminActivityLog updateMany
   */
  export type AdminActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminActivityLogs.
     */
    data: XOR<AdminActivityLogUpdateManyMutationInput, AdminActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminActivityLogs to update
     */
    where?: AdminActivityLogWhereInput
    /**
     * Limit how many AdminActivityLogs to update.
     */
    limit?: number
  }

  /**
   * AdminActivityLog updateManyAndReturn
   */
  export type AdminActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update AdminActivityLogs.
     */
    data: XOR<AdminActivityLogUpdateManyMutationInput, AdminActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminActivityLogs to update
     */
    where?: AdminActivityLogWhereInput
    /**
     * Limit how many AdminActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminActivityLog upsert
   */
  export type AdminActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminActivityLog to update in case it exists.
     */
    where: AdminActivityLogWhereUniqueInput
    /**
     * In case the AdminActivityLog found by the `where` argument doesn't exist, create a new AdminActivityLog with this data.
     */
    create: XOR<AdminActivityLogCreateInput, AdminActivityLogUncheckedCreateInput>
    /**
     * In case the AdminActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminActivityLogUpdateInput, AdminActivityLogUncheckedUpdateInput>
  }

  /**
   * AdminActivityLog delete
   */
  export type AdminActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
    /**
     * Filter which AdminActivityLog to delete.
     */
    where: AdminActivityLogWhereUniqueInput
  }

  /**
   * AdminActivityLog deleteMany
   */
  export type AdminActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminActivityLogs to delete
     */
    where?: AdminActivityLogWhereInput
    /**
     * Limit how many AdminActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * AdminActivityLog without action
   */
  export type AdminActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivityLog
     */
    select?: AdminActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivityLog
     */
    omit?: AdminActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityLogInclude<ExtArgs> | null
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
    publicId: 'publicId',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    image: 'image',
    status: 'status',
    role: 'role',
    isSuperAdmin: 'isSuperAdmin',
    isCollaborator: 'isCollaborator',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    password: 'password',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AccountVerificationTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type AccountVerificationTokenScalarFieldEnum = (typeof AccountVerificationTokenScalarFieldEnum)[keyof typeof AccountVerificationTokenScalarFieldEnum]


  export const TextInfoScalarFieldEnum: {
    id: 'id',
    publicId: 'publicId',
    title: 'title',
    isImageOnly: 'isImageOnly',
    authorName: 'authorName',
    referenceUrl: 'referenceUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    genreId: 'genreId'
  };

  export type TextInfoScalarFieldEnum = (typeof TextInfoScalarFieldEnum)[keyof typeof TextInfoScalarFieldEnum]


  export const TextContentScalarFieldEnum: {
    id: 'id',
    textInfoId: 'textInfoId',
    content: 'content'
  };

  export type TextContentScalarFieldEnum = (typeof TextContentScalarFieldEnum)[keyof typeof TextContentScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    textInfoId: 'textInfoId',
    url: 'url'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const TextualGenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorName: 'creatorName'
  };

  export type TextualGenreScalarFieldEnum = (typeof TextualGenreScalarFieldEnum)[keyof typeof TextualGenreScalarFieldEnum]


  export const AdminActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    createAt: 'createAt'
  };

  export type AdminActivityLogScalarFieldEnum = (typeof AdminActivityLogScalarFieldEnum)[keyof typeof AdminActivityLogScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserRoles'
   */
  export type EnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


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
    id?: IntFilter<"User"> | number
    publicId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    isSuperAdmin?: BoolFilter<"User"> | boolean
    isCollaborator?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    activityLogs?: AdminActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    publicId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    image?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    isSuperAdmin?: SortOrder
    isCollaborator?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    activityLogs?: AdminActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    publicId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    isSuperAdmin?: BoolFilter<"User"> | boolean
    isCollaborator?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    activityLogs?: AdminActivityLogListRelationFilter
  }, "id" | "publicId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    publicId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    image?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    isSuperAdmin?: SortOrder
    isCollaborator?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    publicId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRolesWithAggregatesFilter<"User"> | $Enums.UserRoles
    isSuperAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    isCollaborator?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    userId?: IntFilter<"Account"> | number
    provider?: EnumAuthProviderFilter<"Account"> | $Enums.AuthProvider
    providerAccountId?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    password?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: IntFilter<"Account"> | number
    provider?: EnumAuthProviderFilter<"Account"> | $Enums.AuthProvider
    providerAccountId?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    password?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    userId?: IntWithAggregatesFilter<"Account"> | number
    provider?: EnumAuthProviderWithAggregatesFilter<"Account"> | $Enums.AuthProvider
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type AccountVerificationTokenWhereInput = {
    AND?: AccountVerificationTokenWhereInput | AccountVerificationTokenWhereInput[]
    OR?: AccountVerificationTokenWhereInput[]
    NOT?: AccountVerificationTokenWhereInput | AccountVerificationTokenWhereInput[]
    id?: StringFilter<"AccountVerificationToken"> | string
    userId?: StringFilter<"AccountVerificationToken"> | string
    createdAt?: DateTimeFilter<"AccountVerificationToken"> | Date | string
    expiresAt?: DateTimeFilter<"AccountVerificationToken"> | Date | string
  }

  export type AccountVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccountVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountVerificationTokenWhereInput | AccountVerificationTokenWhereInput[]
    OR?: AccountVerificationTokenWhereInput[]
    NOT?: AccountVerificationTokenWhereInput | AccountVerificationTokenWhereInput[]
    userId?: StringFilter<"AccountVerificationToken"> | string
    createdAt?: DateTimeFilter<"AccountVerificationToken"> | Date | string
    expiresAt?: DateTimeFilter<"AccountVerificationToken"> | Date | string
  }, "id">

  export type AccountVerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: AccountVerificationTokenCountOrderByAggregateInput
    _max?: AccountVerificationTokenMaxOrderByAggregateInput
    _min?: AccountVerificationTokenMinOrderByAggregateInput
  }

  export type AccountVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: AccountVerificationTokenScalarWhereWithAggregatesInput | AccountVerificationTokenScalarWhereWithAggregatesInput[]
    OR?: AccountVerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: AccountVerificationTokenScalarWhereWithAggregatesInput | AccountVerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountVerificationToken"> | string
    userId?: StringWithAggregatesFilter<"AccountVerificationToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AccountVerificationToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"AccountVerificationToken"> | Date | string
  }

  export type TextInfoWhereInput = {
    AND?: TextInfoWhereInput | TextInfoWhereInput[]
    OR?: TextInfoWhereInput[]
    NOT?: TextInfoWhereInput | TextInfoWhereInput[]
    id?: IntFilter<"TextInfo"> | number
    publicId?: StringFilter<"TextInfo"> | string
    title?: StringFilter<"TextInfo"> | string
    isImageOnly?: BoolFilter<"TextInfo"> | boolean
    authorName?: StringFilter<"TextInfo"> | string
    referenceUrl?: StringNullableFilter<"TextInfo"> | string | null
    createdAt?: DateTimeFilter<"TextInfo"> | Date | string
    updatedAt?: DateTimeFilter<"TextInfo"> | Date | string
    genreId?: IntFilter<"TextInfo"> | number
    content?: XOR<TextContentNullableScalarRelationFilter, TextContentWhereInput> | null
    images?: ImageListRelationFilter
    genre?: XOR<TextualGenreScalarRelationFilter, TextualGenreWhereInput>
  }

  export type TextInfoOrderByWithRelationInput = {
    id?: SortOrder
    publicId?: SortOrder
    title?: SortOrder
    isImageOnly?: SortOrder
    authorName?: SortOrder
    referenceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genreId?: SortOrder
    content?: TextContentOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
    genre?: TextualGenreOrderByWithRelationInput
  }

  export type TextInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    publicId?: string
    AND?: TextInfoWhereInput | TextInfoWhereInput[]
    OR?: TextInfoWhereInput[]
    NOT?: TextInfoWhereInput | TextInfoWhereInput[]
    title?: StringFilter<"TextInfo"> | string
    isImageOnly?: BoolFilter<"TextInfo"> | boolean
    authorName?: StringFilter<"TextInfo"> | string
    referenceUrl?: StringNullableFilter<"TextInfo"> | string | null
    createdAt?: DateTimeFilter<"TextInfo"> | Date | string
    updatedAt?: DateTimeFilter<"TextInfo"> | Date | string
    genreId?: IntFilter<"TextInfo"> | number
    content?: XOR<TextContentNullableScalarRelationFilter, TextContentWhereInput> | null
    images?: ImageListRelationFilter
    genre?: XOR<TextualGenreScalarRelationFilter, TextualGenreWhereInput>
  }, "id" | "publicId">

  export type TextInfoOrderByWithAggregationInput = {
    id?: SortOrder
    publicId?: SortOrder
    title?: SortOrder
    isImageOnly?: SortOrder
    authorName?: SortOrder
    referenceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genreId?: SortOrder
    _count?: TextInfoCountOrderByAggregateInput
    _avg?: TextInfoAvgOrderByAggregateInput
    _max?: TextInfoMaxOrderByAggregateInput
    _min?: TextInfoMinOrderByAggregateInput
    _sum?: TextInfoSumOrderByAggregateInput
  }

  export type TextInfoScalarWhereWithAggregatesInput = {
    AND?: TextInfoScalarWhereWithAggregatesInput | TextInfoScalarWhereWithAggregatesInput[]
    OR?: TextInfoScalarWhereWithAggregatesInput[]
    NOT?: TextInfoScalarWhereWithAggregatesInput | TextInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TextInfo"> | number
    publicId?: StringWithAggregatesFilter<"TextInfo"> | string
    title?: StringWithAggregatesFilter<"TextInfo"> | string
    isImageOnly?: BoolWithAggregatesFilter<"TextInfo"> | boolean
    authorName?: StringWithAggregatesFilter<"TextInfo"> | string
    referenceUrl?: StringNullableWithAggregatesFilter<"TextInfo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TextInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TextInfo"> | Date | string
    genreId?: IntWithAggregatesFilter<"TextInfo"> | number
  }

  export type TextContentWhereInput = {
    AND?: TextContentWhereInput | TextContentWhereInput[]
    OR?: TextContentWhereInput[]
    NOT?: TextContentWhereInput | TextContentWhereInput[]
    id?: StringFilter<"TextContent"> | string
    textInfoId?: IntFilter<"TextContent"> | number
    content?: StringFilter<"TextContent"> | string
    textInfo?: XOR<TextInfoScalarRelationFilter, TextInfoWhereInput>
  }

  export type TextContentOrderByWithRelationInput = {
    id?: SortOrder
    textInfoId?: SortOrder
    content?: SortOrder
    textInfo?: TextInfoOrderByWithRelationInput
  }

  export type TextContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    textInfoId?: number
    AND?: TextContentWhereInput | TextContentWhereInput[]
    OR?: TextContentWhereInput[]
    NOT?: TextContentWhereInput | TextContentWhereInput[]
    content?: StringFilter<"TextContent"> | string
    textInfo?: XOR<TextInfoScalarRelationFilter, TextInfoWhereInput>
  }, "id" | "textInfoId">

  export type TextContentOrderByWithAggregationInput = {
    id?: SortOrder
    textInfoId?: SortOrder
    content?: SortOrder
    _count?: TextContentCountOrderByAggregateInput
    _avg?: TextContentAvgOrderByAggregateInput
    _max?: TextContentMaxOrderByAggregateInput
    _min?: TextContentMinOrderByAggregateInput
    _sum?: TextContentSumOrderByAggregateInput
  }

  export type TextContentScalarWhereWithAggregatesInput = {
    AND?: TextContentScalarWhereWithAggregatesInput | TextContentScalarWhereWithAggregatesInput[]
    OR?: TextContentScalarWhereWithAggregatesInput[]
    NOT?: TextContentScalarWhereWithAggregatesInput | TextContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TextContent"> | string
    textInfoId?: IntWithAggregatesFilter<"TextContent"> | number
    content?: StringWithAggregatesFilter<"TextContent"> | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    textInfoId?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    textInfo?: XOR<TextInfoScalarRelationFilter, TextInfoWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    textInfoId?: SortOrder
    url?: SortOrder
    textInfo?: TextInfoOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    textInfoId?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    textInfo?: XOR<TextInfoScalarRelationFilter, TextInfoWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    textInfoId?: SortOrder
    url?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    textInfoId?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
  }

  export type TextualGenreWhereInput = {
    AND?: TextualGenreWhereInput | TextualGenreWhereInput[]
    OR?: TextualGenreWhereInput[]
    NOT?: TextualGenreWhereInput | TextualGenreWhereInput[]
    id?: IntFilter<"TextualGenre"> | number
    name?: StringFilter<"TextualGenre"> | string
    createdAt?: DateTimeFilter<"TextualGenre"> | Date | string
    updatedAt?: DateTimeFilter<"TextualGenre"> | Date | string
    creatorName?: StringFilter<"TextualGenre"> | string
    texts?: TextInfoListRelationFilter
  }

  export type TextualGenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorName?: SortOrder
    texts?: TextInfoOrderByRelationAggregateInput
  }

  export type TextualGenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TextualGenreWhereInput | TextualGenreWhereInput[]
    OR?: TextualGenreWhereInput[]
    NOT?: TextualGenreWhereInput | TextualGenreWhereInput[]
    createdAt?: DateTimeFilter<"TextualGenre"> | Date | string
    updatedAt?: DateTimeFilter<"TextualGenre"> | Date | string
    creatorName?: StringFilter<"TextualGenre"> | string
    texts?: TextInfoListRelationFilter
  }, "id" | "name">

  export type TextualGenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorName?: SortOrder
    _count?: TextualGenreCountOrderByAggregateInput
    _avg?: TextualGenreAvgOrderByAggregateInput
    _max?: TextualGenreMaxOrderByAggregateInput
    _min?: TextualGenreMinOrderByAggregateInput
    _sum?: TextualGenreSumOrderByAggregateInput
  }

  export type TextualGenreScalarWhereWithAggregatesInput = {
    AND?: TextualGenreScalarWhereWithAggregatesInput | TextualGenreScalarWhereWithAggregatesInput[]
    OR?: TextualGenreScalarWhereWithAggregatesInput[]
    NOT?: TextualGenreScalarWhereWithAggregatesInput | TextualGenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TextualGenre"> | number
    name?: StringWithAggregatesFilter<"TextualGenre"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TextualGenre"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TextualGenre"> | Date | string
    creatorName?: StringWithAggregatesFilter<"TextualGenre"> | string
  }

  export type AdminActivityLogWhereInput = {
    AND?: AdminActivityLogWhereInput | AdminActivityLogWhereInput[]
    OR?: AdminActivityLogWhereInput[]
    NOT?: AdminActivityLogWhereInput | AdminActivityLogWhereInput[]
    id?: IntFilter<"AdminActivityLog"> | number
    userId?: IntFilter<"AdminActivityLog"> | number
    action?: StringFilter<"AdminActivityLog"> | string
    createAt?: DateTimeFilter<"AdminActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    createAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminActivityLogWhereInput | AdminActivityLogWhereInput[]
    OR?: AdminActivityLogWhereInput[]
    NOT?: AdminActivityLogWhereInput | AdminActivityLogWhereInput[]
    userId?: IntFilter<"AdminActivityLog"> | number
    action?: StringFilter<"AdminActivityLog"> | string
    createAt?: DateTimeFilter<"AdminActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    createAt?: SortOrder
    _count?: AdminActivityLogCountOrderByAggregateInput
    _avg?: AdminActivityLogAvgOrderByAggregateInput
    _max?: AdminActivityLogMaxOrderByAggregateInput
    _min?: AdminActivityLogMinOrderByAggregateInput
    _sum?: AdminActivityLogSumOrderByAggregateInput
  }

  export type AdminActivityLogScalarWhereWithAggregatesInput = {
    AND?: AdminActivityLogScalarWhereWithAggregatesInput | AdminActivityLogScalarWhereWithAggregatesInput[]
    OR?: AdminActivityLogScalarWhereWithAggregatesInput[]
    NOT?: AdminActivityLogScalarWhereWithAggregatesInput | AdminActivityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminActivityLog"> | number
    userId?: IntWithAggregatesFilter<"AdminActivityLog"> | number
    action?: StringWithAggregatesFilter<"AdminActivityLog"> | string
    createAt?: DateTimeWithAggregatesFilter<"AdminActivityLog"> | Date | string
  }

  export type UserCreateInput = {
    publicId?: string
    email: string
    firstName: string
    lastName: string
    image?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRoles
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    activityLogs?: AdminActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    publicId?: string
    email: string
    firstName: string
    lastName: string
    image?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRoles
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: AdminActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCollaborator?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    activityLogs?: AdminActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCollaborator?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: AdminActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    publicId?: string
    email: string
    firstName: string
    lastName: string
    image?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRoles
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCollaborator?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCollaborator?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    provider: $Enums.AuthProvider
    providerAccountId: string
    password?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    userId: number
    provider: $Enums.AuthProvider
    providerAccountId: string
    password?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: number
    userId: number
    provider: $Enums.AuthProvider
    providerAccountId: string
    password?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountVerificationTokenCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AccountVerificationTokenUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AccountVerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountVerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountVerificationTokenCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AccountVerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountVerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextInfoCreateInput = {
    publicId?: string
    title: string
    isImageOnly?: boolean
    authorName: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: TextContentCreateNestedOneWithoutTextInfoInput
    images?: ImageCreateNestedManyWithoutTextInfoInput
    genre: TextualGenreCreateNestedOneWithoutTextsInput
  }

  export type TextInfoUncheckedCreateInput = {
    id?: number
    publicId?: string
    title: string
    isImageOnly?: boolean
    authorName: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genreId: number
    content?: TextContentUncheckedCreateNestedOneWithoutTextInfoInput
    images?: ImageUncheckedCreateNestedManyWithoutTextInfoInput
  }

  export type TextInfoUpdateInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: TextContentUpdateOneWithoutTextInfoNestedInput
    images?: ImageUpdateManyWithoutTextInfoNestedInput
    genre?: TextualGenreUpdateOneRequiredWithoutTextsNestedInput
  }

  export type TextInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genreId?: IntFieldUpdateOperationsInput | number
    content?: TextContentUncheckedUpdateOneWithoutTextInfoNestedInput
    images?: ImageUncheckedUpdateManyWithoutTextInfoNestedInput
  }

  export type TextInfoCreateManyInput = {
    id?: number
    publicId?: string
    title: string
    isImageOnly?: boolean
    authorName: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genreId: number
  }

  export type TextInfoUpdateManyMutationInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type TextContentCreateInput = {
    id?: string
    content: string
    textInfo: TextInfoCreateNestedOneWithoutContentInput
  }

  export type TextContentUncheckedCreateInput = {
    id?: string
    textInfoId: number
    content: string
  }

  export type TextContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    textInfo?: TextInfoUpdateOneRequiredWithoutContentNestedInput
  }

  export type TextContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    textInfoId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TextContentCreateManyInput = {
    id?: string
    textInfoId: number
    content: string
  }

  export type TextContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TextContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    textInfoId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    textInfo: TextInfoCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    textInfoId: number
    url: string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    textInfo?: TextInfoUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    textInfoId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateManyInput = {
    id?: string
    textInfoId: number
    url: string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    textInfoId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type TextualGenreCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorName: string
    texts?: TextInfoCreateNestedManyWithoutGenreInput
  }

  export type TextualGenreUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorName: string
    texts?: TextInfoUncheckedCreateNestedManyWithoutGenreInput
  }

  export type TextualGenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
    texts?: TextInfoUpdateManyWithoutGenreNestedInput
  }

  export type TextualGenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
    texts?: TextInfoUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type TextualGenreCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorName: string
  }

  export type TextualGenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
  }

  export type TextualGenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
  }

  export type AdminActivityLogCreateInput = {
    action: string
    createAt?: Date | string
    user: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type AdminActivityLogUncheckedCreateInput = {
    id?: number
    userId: number
    action: string
    createAt?: Date | string
  }

  export type AdminActivityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type AdminActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityLogCreateManyInput = {
    id?: number
    userId: number
    action: string
    createAt?: Date | string
  }

  export type AdminActivityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[]
    notIn?: $Enums.UserRoles[]
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AdminActivityLogListRelationFilter = {
    every?: AdminActivityLogWhereInput
    some?: AdminActivityLogWhereInput
    none?: AdminActivityLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    image?: SortOrder
    status?: SortOrder
    role?: SortOrder
    isSuperAdmin?: SortOrder
    isCollaborator?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    image?: SortOrder
    status?: SortOrder
    role?: SortOrder
    isSuperAdmin?: SortOrder
    isCollaborator?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    image?: SortOrder
    status?: SortOrder
    role?: SortOrder
    isSuperAdmin?: SortOrder
    isCollaborator?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[]
    notIn?: $Enums.UserRoles[]
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: $Enums.AuthProvider
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    password?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    password?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    password?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AccountVerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccountVerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccountVerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type TextContentNullableScalarRelationFilter = {
    is?: TextContentWhereInput | null
    isNot?: TextContentWhereInput | null
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type TextualGenreScalarRelationFilter = {
    is?: TextualGenreWhereInput
    isNot?: TextualGenreWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TextInfoCountOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    title?: SortOrder
    isImageOnly?: SortOrder
    authorName?: SortOrder
    referenceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genreId?: SortOrder
  }

  export type TextInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    genreId?: SortOrder
  }

  export type TextInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    title?: SortOrder
    isImageOnly?: SortOrder
    authorName?: SortOrder
    referenceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genreId?: SortOrder
  }

  export type TextInfoMinOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    title?: SortOrder
    isImageOnly?: SortOrder
    authorName?: SortOrder
    referenceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genreId?: SortOrder
  }

  export type TextInfoSumOrderByAggregateInput = {
    id?: SortOrder
    genreId?: SortOrder
  }

  export type TextInfoScalarRelationFilter = {
    is?: TextInfoWhereInput
    isNot?: TextInfoWhereInput
  }

  export type TextContentCountOrderByAggregateInput = {
    id?: SortOrder
    textInfoId?: SortOrder
    content?: SortOrder
  }

  export type TextContentAvgOrderByAggregateInput = {
    textInfoId?: SortOrder
  }

  export type TextContentMaxOrderByAggregateInput = {
    id?: SortOrder
    textInfoId?: SortOrder
    content?: SortOrder
  }

  export type TextContentMinOrderByAggregateInput = {
    id?: SortOrder
    textInfoId?: SortOrder
    content?: SortOrder
  }

  export type TextContentSumOrderByAggregateInput = {
    textInfoId?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    textInfoId?: SortOrder
    url?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    textInfoId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    textInfoId?: SortOrder
    url?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    textInfoId?: SortOrder
    url?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    textInfoId?: SortOrder
  }

  export type TextInfoListRelationFilter = {
    every?: TextInfoWhereInput
    some?: TextInfoWhereInput
    none?: TextInfoWhereInput
  }

  export type TextInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TextualGenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorName?: SortOrder
  }

  export type TextualGenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TextualGenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorName?: SortOrder
  }

  export type TextualGenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorName?: SortOrder
  }

  export type TextualGenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    createAt?: SortOrder
  }

  export type AdminActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    createAt?: SortOrder
  }

  export type AdminActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    createAt?: SortOrder
  }

  export type AdminActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AdminActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminActivityLogCreateWithoutUserInput, AdminActivityLogUncheckedCreateWithoutUserInput> | AdminActivityLogCreateWithoutUserInput[] | AdminActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminActivityLogCreateOrConnectWithoutUserInput | AdminActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: AdminActivityLogCreateManyUserInputEnvelope
    connect?: AdminActivityLogWhereUniqueInput | AdminActivityLogWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AdminActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminActivityLogCreateWithoutUserInput, AdminActivityLogUncheckedCreateWithoutUserInput> | AdminActivityLogCreateWithoutUserInput[] | AdminActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminActivityLogCreateOrConnectWithoutUserInput | AdminActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: AdminActivityLogCreateManyUserInputEnvelope
    connect?: AdminActivityLogWhereUniqueInput | AdminActivityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumUserRolesFieldUpdateOperationsInput = {
    set?: $Enums.UserRoles
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AdminActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminActivityLogCreateWithoutUserInput, AdminActivityLogUncheckedCreateWithoutUserInput> | AdminActivityLogCreateWithoutUserInput[] | AdminActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminActivityLogCreateOrConnectWithoutUserInput | AdminActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: AdminActivityLogUpsertWithWhereUniqueWithoutUserInput | AdminActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminActivityLogCreateManyUserInputEnvelope
    set?: AdminActivityLogWhereUniqueInput | AdminActivityLogWhereUniqueInput[]
    disconnect?: AdminActivityLogWhereUniqueInput | AdminActivityLogWhereUniqueInput[]
    delete?: AdminActivityLogWhereUniqueInput | AdminActivityLogWhereUniqueInput[]
    connect?: AdminActivityLogWhereUniqueInput | AdminActivityLogWhereUniqueInput[]
    update?: AdminActivityLogUpdateWithWhereUniqueWithoutUserInput | AdminActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminActivityLogUpdateManyWithWhereWithoutUserInput | AdminActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminActivityLogScalarWhereInput | AdminActivityLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AdminActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminActivityLogCreateWithoutUserInput, AdminActivityLogUncheckedCreateWithoutUserInput> | AdminActivityLogCreateWithoutUserInput[] | AdminActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminActivityLogCreateOrConnectWithoutUserInput | AdminActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: AdminActivityLogUpsertWithWhereUniqueWithoutUserInput | AdminActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminActivityLogCreateManyUserInputEnvelope
    set?: AdminActivityLogWhereUniqueInput | AdminActivityLogWhereUniqueInput[]
    disconnect?: AdminActivityLogWhereUniqueInput | AdminActivityLogWhereUniqueInput[]
    delete?: AdminActivityLogWhereUniqueInput | AdminActivityLogWhereUniqueInput[]
    connect?: AdminActivityLogWhereUniqueInput | AdminActivityLogWhereUniqueInput[]
    update?: AdminActivityLogUpdateWithWhereUniqueWithoutUserInput | AdminActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminActivityLogUpdateManyWithWhereWithoutUserInput | AdminActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminActivityLogScalarWhereInput | AdminActivityLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type TextContentCreateNestedOneWithoutTextInfoInput = {
    create?: XOR<TextContentCreateWithoutTextInfoInput, TextContentUncheckedCreateWithoutTextInfoInput>
    connectOrCreate?: TextContentCreateOrConnectWithoutTextInfoInput
    connect?: TextContentWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutTextInfoInput = {
    create?: XOR<ImageCreateWithoutTextInfoInput, ImageUncheckedCreateWithoutTextInfoInput> | ImageCreateWithoutTextInfoInput[] | ImageUncheckedCreateWithoutTextInfoInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTextInfoInput | ImageCreateOrConnectWithoutTextInfoInput[]
    createMany?: ImageCreateManyTextInfoInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type TextualGenreCreateNestedOneWithoutTextsInput = {
    create?: XOR<TextualGenreCreateWithoutTextsInput, TextualGenreUncheckedCreateWithoutTextsInput>
    connectOrCreate?: TextualGenreCreateOrConnectWithoutTextsInput
    connect?: TextualGenreWhereUniqueInput
  }

  export type TextContentUncheckedCreateNestedOneWithoutTextInfoInput = {
    create?: XOR<TextContentCreateWithoutTextInfoInput, TextContentUncheckedCreateWithoutTextInfoInput>
    connectOrCreate?: TextContentCreateOrConnectWithoutTextInfoInput
    connect?: TextContentWhereUniqueInput
  }

  export type ImageUncheckedCreateNestedManyWithoutTextInfoInput = {
    create?: XOR<ImageCreateWithoutTextInfoInput, ImageUncheckedCreateWithoutTextInfoInput> | ImageCreateWithoutTextInfoInput[] | ImageUncheckedCreateWithoutTextInfoInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTextInfoInput | ImageCreateOrConnectWithoutTextInfoInput[]
    createMany?: ImageCreateManyTextInfoInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type TextContentUpdateOneWithoutTextInfoNestedInput = {
    create?: XOR<TextContentCreateWithoutTextInfoInput, TextContentUncheckedCreateWithoutTextInfoInput>
    connectOrCreate?: TextContentCreateOrConnectWithoutTextInfoInput
    upsert?: TextContentUpsertWithoutTextInfoInput
    disconnect?: TextContentWhereInput | boolean
    delete?: TextContentWhereInput | boolean
    connect?: TextContentWhereUniqueInput
    update?: XOR<XOR<TextContentUpdateToOneWithWhereWithoutTextInfoInput, TextContentUpdateWithoutTextInfoInput>, TextContentUncheckedUpdateWithoutTextInfoInput>
  }

  export type ImageUpdateManyWithoutTextInfoNestedInput = {
    create?: XOR<ImageCreateWithoutTextInfoInput, ImageUncheckedCreateWithoutTextInfoInput> | ImageCreateWithoutTextInfoInput[] | ImageUncheckedCreateWithoutTextInfoInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTextInfoInput | ImageCreateOrConnectWithoutTextInfoInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutTextInfoInput | ImageUpsertWithWhereUniqueWithoutTextInfoInput[]
    createMany?: ImageCreateManyTextInfoInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutTextInfoInput | ImageUpdateWithWhereUniqueWithoutTextInfoInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutTextInfoInput | ImageUpdateManyWithWhereWithoutTextInfoInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type TextualGenreUpdateOneRequiredWithoutTextsNestedInput = {
    create?: XOR<TextualGenreCreateWithoutTextsInput, TextualGenreUncheckedCreateWithoutTextsInput>
    connectOrCreate?: TextualGenreCreateOrConnectWithoutTextsInput
    upsert?: TextualGenreUpsertWithoutTextsInput
    connect?: TextualGenreWhereUniqueInput
    update?: XOR<XOR<TextualGenreUpdateToOneWithWhereWithoutTextsInput, TextualGenreUpdateWithoutTextsInput>, TextualGenreUncheckedUpdateWithoutTextsInput>
  }

  export type TextContentUncheckedUpdateOneWithoutTextInfoNestedInput = {
    create?: XOR<TextContentCreateWithoutTextInfoInput, TextContentUncheckedCreateWithoutTextInfoInput>
    connectOrCreate?: TextContentCreateOrConnectWithoutTextInfoInput
    upsert?: TextContentUpsertWithoutTextInfoInput
    disconnect?: TextContentWhereInput | boolean
    delete?: TextContentWhereInput | boolean
    connect?: TextContentWhereUniqueInput
    update?: XOR<XOR<TextContentUpdateToOneWithWhereWithoutTextInfoInput, TextContentUpdateWithoutTextInfoInput>, TextContentUncheckedUpdateWithoutTextInfoInput>
  }

  export type ImageUncheckedUpdateManyWithoutTextInfoNestedInput = {
    create?: XOR<ImageCreateWithoutTextInfoInput, ImageUncheckedCreateWithoutTextInfoInput> | ImageCreateWithoutTextInfoInput[] | ImageUncheckedCreateWithoutTextInfoInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTextInfoInput | ImageCreateOrConnectWithoutTextInfoInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutTextInfoInput | ImageUpsertWithWhereUniqueWithoutTextInfoInput[]
    createMany?: ImageCreateManyTextInfoInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutTextInfoInput | ImageUpdateWithWhereUniqueWithoutTextInfoInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutTextInfoInput | ImageUpdateManyWithWhereWithoutTextInfoInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type TextInfoCreateNestedOneWithoutContentInput = {
    create?: XOR<TextInfoCreateWithoutContentInput, TextInfoUncheckedCreateWithoutContentInput>
    connectOrCreate?: TextInfoCreateOrConnectWithoutContentInput
    connect?: TextInfoWhereUniqueInput
  }

  export type TextInfoUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<TextInfoCreateWithoutContentInput, TextInfoUncheckedCreateWithoutContentInput>
    connectOrCreate?: TextInfoCreateOrConnectWithoutContentInput
    upsert?: TextInfoUpsertWithoutContentInput
    connect?: TextInfoWhereUniqueInput
    update?: XOR<XOR<TextInfoUpdateToOneWithWhereWithoutContentInput, TextInfoUpdateWithoutContentInput>, TextInfoUncheckedUpdateWithoutContentInput>
  }

  export type TextInfoCreateNestedOneWithoutImagesInput = {
    create?: XOR<TextInfoCreateWithoutImagesInput, TextInfoUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TextInfoCreateOrConnectWithoutImagesInput
    connect?: TextInfoWhereUniqueInput
  }

  export type TextInfoUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<TextInfoCreateWithoutImagesInput, TextInfoUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TextInfoCreateOrConnectWithoutImagesInput
    upsert?: TextInfoUpsertWithoutImagesInput
    connect?: TextInfoWhereUniqueInput
    update?: XOR<XOR<TextInfoUpdateToOneWithWhereWithoutImagesInput, TextInfoUpdateWithoutImagesInput>, TextInfoUncheckedUpdateWithoutImagesInput>
  }

  export type TextInfoCreateNestedManyWithoutGenreInput = {
    create?: XOR<TextInfoCreateWithoutGenreInput, TextInfoUncheckedCreateWithoutGenreInput> | TextInfoCreateWithoutGenreInput[] | TextInfoUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TextInfoCreateOrConnectWithoutGenreInput | TextInfoCreateOrConnectWithoutGenreInput[]
    createMany?: TextInfoCreateManyGenreInputEnvelope
    connect?: TextInfoWhereUniqueInput | TextInfoWhereUniqueInput[]
  }

  export type TextInfoUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<TextInfoCreateWithoutGenreInput, TextInfoUncheckedCreateWithoutGenreInput> | TextInfoCreateWithoutGenreInput[] | TextInfoUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TextInfoCreateOrConnectWithoutGenreInput | TextInfoCreateOrConnectWithoutGenreInput[]
    createMany?: TextInfoCreateManyGenreInputEnvelope
    connect?: TextInfoWhereUniqueInput | TextInfoWhereUniqueInput[]
  }

  export type TextInfoUpdateManyWithoutGenreNestedInput = {
    create?: XOR<TextInfoCreateWithoutGenreInput, TextInfoUncheckedCreateWithoutGenreInput> | TextInfoCreateWithoutGenreInput[] | TextInfoUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TextInfoCreateOrConnectWithoutGenreInput | TextInfoCreateOrConnectWithoutGenreInput[]
    upsert?: TextInfoUpsertWithWhereUniqueWithoutGenreInput | TextInfoUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: TextInfoCreateManyGenreInputEnvelope
    set?: TextInfoWhereUniqueInput | TextInfoWhereUniqueInput[]
    disconnect?: TextInfoWhereUniqueInput | TextInfoWhereUniqueInput[]
    delete?: TextInfoWhereUniqueInput | TextInfoWhereUniqueInput[]
    connect?: TextInfoWhereUniqueInput | TextInfoWhereUniqueInput[]
    update?: TextInfoUpdateWithWhereUniqueWithoutGenreInput | TextInfoUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: TextInfoUpdateManyWithWhereWithoutGenreInput | TextInfoUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: TextInfoScalarWhereInput | TextInfoScalarWhereInput[]
  }

  export type TextInfoUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<TextInfoCreateWithoutGenreInput, TextInfoUncheckedCreateWithoutGenreInput> | TextInfoCreateWithoutGenreInput[] | TextInfoUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TextInfoCreateOrConnectWithoutGenreInput | TextInfoCreateOrConnectWithoutGenreInput[]
    upsert?: TextInfoUpsertWithWhereUniqueWithoutGenreInput | TextInfoUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: TextInfoCreateManyGenreInputEnvelope
    set?: TextInfoWhereUniqueInput | TextInfoWhereUniqueInput[]
    disconnect?: TextInfoWhereUniqueInput | TextInfoWhereUniqueInput[]
    delete?: TextInfoWhereUniqueInput | TextInfoWhereUniqueInput[]
    connect?: TextInfoWhereUniqueInput | TextInfoWhereUniqueInput[]
    update?: TextInfoUpdateWithWhereUniqueWithoutGenreInput | TextInfoUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: TextInfoUpdateManyWithWhereWithoutGenreInput | TextInfoUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: TextInfoScalarWhereInput | TextInfoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
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

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[]
    notIn?: $Enums.UserRoles[]
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[]
    notIn?: $Enums.UserRoles[]
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    provider: $Enums.AuthProvider
    providerAccountId: string
    password?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: number
    provider: $Enums.AuthProvider
    providerAccountId: string
    password?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type AdminActivityLogCreateWithoutUserInput = {
    action: string
    createAt?: Date | string
  }

  export type AdminActivityLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    createAt?: Date | string
  }

  export type AdminActivityLogCreateOrConnectWithoutUserInput = {
    where: AdminActivityLogWhereUniqueInput
    create: XOR<AdminActivityLogCreateWithoutUserInput, AdminActivityLogUncheckedCreateWithoutUserInput>
  }

  export type AdminActivityLogCreateManyUserInputEnvelope = {
    data: AdminActivityLogCreateManyUserInput | AdminActivityLogCreateManyUserInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: IntFilter<"Account"> | number
    userId?: IntFilter<"Account"> | number
    provider?: EnumAuthProviderFilter<"Account"> | $Enums.AuthProvider
    providerAccountId?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type AdminActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminActivityLogWhereUniqueInput
    update: XOR<AdminActivityLogUpdateWithoutUserInput, AdminActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<AdminActivityLogCreateWithoutUserInput, AdminActivityLogUncheckedCreateWithoutUserInput>
  }

  export type AdminActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminActivityLogWhereUniqueInput
    data: XOR<AdminActivityLogUpdateWithoutUserInput, AdminActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type AdminActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: AdminActivityLogScalarWhereInput
    data: XOR<AdminActivityLogUpdateManyMutationInput, AdminActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminActivityLogScalarWhereInput = {
    AND?: AdminActivityLogScalarWhereInput | AdminActivityLogScalarWhereInput[]
    OR?: AdminActivityLogScalarWhereInput[]
    NOT?: AdminActivityLogScalarWhereInput | AdminActivityLogScalarWhereInput[]
    id?: IntFilter<"AdminActivityLog"> | number
    userId?: IntFilter<"AdminActivityLog"> | number
    action?: StringFilter<"AdminActivityLog"> | string
    createAt?: DateTimeFilter<"AdminActivityLog"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    publicId?: string
    email: string
    firstName: string
    lastName: string
    image?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRoles
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: AdminActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    publicId?: string
    email: string
    firstName: string
    lastName: string
    image?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRoles
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: AdminActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCollaborator?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: AdminActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCollaborator?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: AdminActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TextContentCreateWithoutTextInfoInput = {
    id?: string
    content: string
  }

  export type TextContentUncheckedCreateWithoutTextInfoInput = {
    id?: string
    content: string
  }

  export type TextContentCreateOrConnectWithoutTextInfoInput = {
    where: TextContentWhereUniqueInput
    create: XOR<TextContentCreateWithoutTextInfoInput, TextContentUncheckedCreateWithoutTextInfoInput>
  }

  export type ImageCreateWithoutTextInfoInput = {
    id?: string
    url: string
  }

  export type ImageUncheckedCreateWithoutTextInfoInput = {
    id?: string
    url: string
  }

  export type ImageCreateOrConnectWithoutTextInfoInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutTextInfoInput, ImageUncheckedCreateWithoutTextInfoInput>
  }

  export type ImageCreateManyTextInfoInputEnvelope = {
    data: ImageCreateManyTextInfoInput | ImageCreateManyTextInfoInput[]
  }

  export type TextualGenreCreateWithoutTextsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorName: string
  }

  export type TextualGenreUncheckedCreateWithoutTextsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorName: string
  }

  export type TextualGenreCreateOrConnectWithoutTextsInput = {
    where: TextualGenreWhereUniqueInput
    create: XOR<TextualGenreCreateWithoutTextsInput, TextualGenreUncheckedCreateWithoutTextsInput>
  }

  export type TextContentUpsertWithoutTextInfoInput = {
    update: XOR<TextContentUpdateWithoutTextInfoInput, TextContentUncheckedUpdateWithoutTextInfoInput>
    create: XOR<TextContentCreateWithoutTextInfoInput, TextContentUncheckedCreateWithoutTextInfoInput>
    where?: TextContentWhereInput
  }

  export type TextContentUpdateToOneWithWhereWithoutTextInfoInput = {
    where?: TextContentWhereInput
    data: XOR<TextContentUpdateWithoutTextInfoInput, TextContentUncheckedUpdateWithoutTextInfoInput>
  }

  export type TextContentUpdateWithoutTextInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TextContentUncheckedUpdateWithoutTextInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUpsertWithWhereUniqueWithoutTextInfoInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutTextInfoInput, ImageUncheckedUpdateWithoutTextInfoInput>
    create: XOR<ImageCreateWithoutTextInfoInput, ImageUncheckedCreateWithoutTextInfoInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutTextInfoInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutTextInfoInput, ImageUncheckedUpdateWithoutTextInfoInput>
  }

  export type ImageUpdateManyWithWhereWithoutTextInfoInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutTextInfoInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    textInfoId?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
  }

  export type TextualGenreUpsertWithoutTextsInput = {
    update: XOR<TextualGenreUpdateWithoutTextsInput, TextualGenreUncheckedUpdateWithoutTextsInput>
    create: XOR<TextualGenreCreateWithoutTextsInput, TextualGenreUncheckedCreateWithoutTextsInput>
    where?: TextualGenreWhereInput
  }

  export type TextualGenreUpdateToOneWithWhereWithoutTextsInput = {
    where?: TextualGenreWhereInput
    data: XOR<TextualGenreUpdateWithoutTextsInput, TextualGenreUncheckedUpdateWithoutTextsInput>
  }

  export type TextualGenreUpdateWithoutTextsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
  }

  export type TextualGenreUncheckedUpdateWithoutTextsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorName?: StringFieldUpdateOperationsInput | string
  }

  export type TextInfoCreateWithoutContentInput = {
    publicId?: string
    title: string
    isImageOnly?: boolean
    authorName: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutTextInfoInput
    genre: TextualGenreCreateNestedOneWithoutTextsInput
  }

  export type TextInfoUncheckedCreateWithoutContentInput = {
    id?: number
    publicId?: string
    title: string
    isImageOnly?: boolean
    authorName: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genreId: number
    images?: ImageUncheckedCreateNestedManyWithoutTextInfoInput
  }

  export type TextInfoCreateOrConnectWithoutContentInput = {
    where: TextInfoWhereUniqueInput
    create: XOR<TextInfoCreateWithoutContentInput, TextInfoUncheckedCreateWithoutContentInput>
  }

  export type TextInfoUpsertWithoutContentInput = {
    update: XOR<TextInfoUpdateWithoutContentInput, TextInfoUncheckedUpdateWithoutContentInput>
    create: XOR<TextInfoCreateWithoutContentInput, TextInfoUncheckedCreateWithoutContentInput>
    where?: TextInfoWhereInput
  }

  export type TextInfoUpdateToOneWithWhereWithoutContentInput = {
    where?: TextInfoWhereInput
    data: XOR<TextInfoUpdateWithoutContentInput, TextInfoUncheckedUpdateWithoutContentInput>
  }

  export type TextInfoUpdateWithoutContentInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutTextInfoNestedInput
    genre?: TextualGenreUpdateOneRequiredWithoutTextsNestedInput
  }

  export type TextInfoUncheckedUpdateWithoutContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genreId?: IntFieldUpdateOperationsInput | number
    images?: ImageUncheckedUpdateManyWithoutTextInfoNestedInput
  }

  export type TextInfoCreateWithoutImagesInput = {
    publicId?: string
    title: string
    isImageOnly?: boolean
    authorName: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: TextContentCreateNestedOneWithoutTextInfoInput
    genre: TextualGenreCreateNestedOneWithoutTextsInput
  }

  export type TextInfoUncheckedCreateWithoutImagesInput = {
    id?: number
    publicId?: string
    title: string
    isImageOnly?: boolean
    authorName: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genreId: number
    content?: TextContentUncheckedCreateNestedOneWithoutTextInfoInput
  }

  export type TextInfoCreateOrConnectWithoutImagesInput = {
    where: TextInfoWhereUniqueInput
    create: XOR<TextInfoCreateWithoutImagesInput, TextInfoUncheckedCreateWithoutImagesInput>
  }

  export type TextInfoUpsertWithoutImagesInput = {
    update: XOR<TextInfoUpdateWithoutImagesInput, TextInfoUncheckedUpdateWithoutImagesInput>
    create: XOR<TextInfoCreateWithoutImagesInput, TextInfoUncheckedCreateWithoutImagesInput>
    where?: TextInfoWhereInput
  }

  export type TextInfoUpdateToOneWithWhereWithoutImagesInput = {
    where?: TextInfoWhereInput
    data: XOR<TextInfoUpdateWithoutImagesInput, TextInfoUncheckedUpdateWithoutImagesInput>
  }

  export type TextInfoUpdateWithoutImagesInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: TextContentUpdateOneWithoutTextInfoNestedInput
    genre?: TextualGenreUpdateOneRequiredWithoutTextsNestedInput
  }

  export type TextInfoUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genreId?: IntFieldUpdateOperationsInput | number
    content?: TextContentUncheckedUpdateOneWithoutTextInfoNestedInput
  }

  export type TextInfoCreateWithoutGenreInput = {
    publicId?: string
    title: string
    isImageOnly?: boolean
    authorName: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: TextContentCreateNestedOneWithoutTextInfoInput
    images?: ImageCreateNestedManyWithoutTextInfoInput
  }

  export type TextInfoUncheckedCreateWithoutGenreInput = {
    id?: number
    publicId?: string
    title: string
    isImageOnly?: boolean
    authorName: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: TextContentUncheckedCreateNestedOneWithoutTextInfoInput
    images?: ImageUncheckedCreateNestedManyWithoutTextInfoInput
  }

  export type TextInfoCreateOrConnectWithoutGenreInput = {
    where: TextInfoWhereUniqueInput
    create: XOR<TextInfoCreateWithoutGenreInput, TextInfoUncheckedCreateWithoutGenreInput>
  }

  export type TextInfoCreateManyGenreInputEnvelope = {
    data: TextInfoCreateManyGenreInput | TextInfoCreateManyGenreInput[]
  }

  export type TextInfoUpsertWithWhereUniqueWithoutGenreInput = {
    where: TextInfoWhereUniqueInput
    update: XOR<TextInfoUpdateWithoutGenreInput, TextInfoUncheckedUpdateWithoutGenreInput>
    create: XOR<TextInfoCreateWithoutGenreInput, TextInfoUncheckedCreateWithoutGenreInput>
  }

  export type TextInfoUpdateWithWhereUniqueWithoutGenreInput = {
    where: TextInfoWhereUniqueInput
    data: XOR<TextInfoUpdateWithoutGenreInput, TextInfoUncheckedUpdateWithoutGenreInput>
  }

  export type TextInfoUpdateManyWithWhereWithoutGenreInput = {
    where: TextInfoScalarWhereInput
    data: XOR<TextInfoUpdateManyMutationInput, TextInfoUncheckedUpdateManyWithoutGenreInput>
  }

  export type TextInfoScalarWhereInput = {
    AND?: TextInfoScalarWhereInput | TextInfoScalarWhereInput[]
    OR?: TextInfoScalarWhereInput[]
    NOT?: TextInfoScalarWhereInput | TextInfoScalarWhereInput[]
    id?: IntFilter<"TextInfo"> | number
    publicId?: StringFilter<"TextInfo"> | string
    title?: StringFilter<"TextInfo"> | string
    isImageOnly?: BoolFilter<"TextInfo"> | boolean
    authorName?: StringFilter<"TextInfo"> | string
    referenceUrl?: StringNullableFilter<"TextInfo"> | string | null
    createdAt?: DateTimeFilter<"TextInfo"> | Date | string
    updatedAt?: DateTimeFilter<"TextInfo"> | Date | string
    genreId?: IntFilter<"TextInfo"> | number
  }

  export type UserCreateWithoutActivityLogsInput = {
    publicId?: string
    email: string
    firstName: string
    lastName: string
    image?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRoles
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: number
    publicId?: string
    email: string
    firstName: string
    lastName: string
    image?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRoles
    isSuperAdmin?: boolean
    isCollaborator?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCollaborator?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    isCollaborator?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: number
    provider: $Enums.AuthProvider
    providerAccountId: string
    password?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminActivityLogCreateManyUserInput = {
    id?: number
    action: string
    createAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyTextInfoInput = {
    id?: string
    url: string
  }

  export type ImageUpdateWithoutTextInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateWithoutTextInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyWithoutTextInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type TextInfoCreateManyGenreInput = {
    id?: number
    publicId?: string
    title: string
    isImageOnly?: boolean
    authorName: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TextInfoUpdateWithoutGenreInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: TextContentUpdateOneWithoutTextInfoNestedInput
    images?: ImageUpdateManyWithoutTextInfoNestedInput
  }

  export type TextInfoUncheckedUpdateWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: TextContentUncheckedUpdateOneWithoutTextInfoNestedInput
    images?: ImageUncheckedUpdateManyWithoutTextInfoNestedInput
  }

  export type TextInfoUncheckedUpdateManyWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isImageOnly?: BoolFieldUpdateOperationsInput | boolean
    authorName?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
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