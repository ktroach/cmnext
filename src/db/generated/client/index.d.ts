
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Subsite
 * 
 */
export type Subsite = $Result.DefaultSelection<Prisma.$SubsitePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model ContactAddress
 * 
 */
export type ContactAddress = $Result.DefaultSelection<Prisma.$ContactAddressPayload>
/**
 * Model ContactEmail
 * 
 */
export type ContactEmail = $Result.DefaultSelection<Prisma.$ContactEmailPayload>
/**
 * Model ContactPhone
 * 
 */
export type ContactPhone = $Result.DefaultSelection<Prisma.$ContactPhonePayload>
/**
 * Model ContactWebsite
 * 
 */
export type ContactWebsite = $Result.DefaultSelection<Prisma.$ContactWebsitePayload>
/**
 * Model UserContact
 * 
 */
export type UserContact = $Result.DefaultSelection<Prisma.$UserContactPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  AUTHOR: 'AUTHOR',
  CONTRIBUTOR: 'CONTRIBUTOR',
  SUPERADMIN: 'SUPERADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ContentStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  REVIEW: 'REVIEW',
  PUBLISHED: 'PUBLISHED'
};

export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ContentStatus = $Enums.ContentStatus

export const ContentStatus: typeof $Enums.ContentStatus

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.subsite`: Exposes CRUD operations for the **Subsite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subsites
    * const subsites = await prisma.subsite.findMany()
    * ```
    */
  get subsite(): Prisma.SubsiteDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs>;

  /**
   * `prisma.contactAddress`: Exposes CRUD operations for the **ContactAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactAddresses
    * const contactAddresses = await prisma.contactAddress.findMany()
    * ```
    */
  get contactAddress(): Prisma.ContactAddressDelegate<ExtArgs>;

  /**
   * `prisma.contactEmail`: Exposes CRUD operations for the **ContactEmail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactEmails
    * const contactEmails = await prisma.contactEmail.findMany()
    * ```
    */
  get contactEmail(): Prisma.ContactEmailDelegate<ExtArgs>;

  /**
   * `prisma.contactPhone`: Exposes CRUD operations for the **ContactPhone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactPhones
    * const contactPhones = await prisma.contactPhone.findMany()
    * ```
    */
  get contactPhone(): Prisma.ContactPhoneDelegate<ExtArgs>;

  /**
   * `prisma.contactWebsite`: Exposes CRUD operations for the **ContactWebsite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactWebsites
    * const contactWebsites = await prisma.contactWebsite.findMany()
    * ```
    */
  get contactWebsite(): Prisma.ContactWebsiteDelegate<ExtArgs>;

  /**
   * `prisma.userContact`: Exposes CRUD operations for the **UserContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserContacts
    * const userContacts = await prisma.userContact.findMany()
    * ```
    */
  get userContact(): Prisma.UserContactDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Subsite: 'Subsite',
    Post: 'Post',
    Page: 'Page',
    UserProfile: 'UserProfile',
    ContactAddress: 'ContactAddress',
    ContactEmail: 'ContactEmail',
    ContactPhone: 'ContactPhone',
    ContactWebsite: 'ContactWebsite',
    UserContact: 'UserContact',
    Category: 'Category',
    Tag: 'Tag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'account' | 'subsite' | 'post' | 'page' | 'userProfile' | 'contactAddress' | 'contactEmail' | 'contactPhone' | 'contactWebsite' | 'userContact' | 'category' | 'tag'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Subsite: {
        payload: Prisma.$SubsitePayload<ExtArgs>
        fields: Prisma.SubsiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubsiteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubsitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubsiteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubsitePayload>
          }
          findFirst: {
            args: Prisma.SubsiteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubsitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubsiteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubsitePayload>
          }
          findMany: {
            args: Prisma.SubsiteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubsitePayload>[]
          }
          create: {
            args: Prisma.SubsiteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubsitePayload>
          }
          createMany: {
            args: Prisma.SubsiteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubsiteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubsitePayload>
          }
          update: {
            args: Prisma.SubsiteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubsitePayload>
          }
          deleteMany: {
            args: Prisma.SubsiteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubsiteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubsiteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubsitePayload>
          }
          aggregate: {
            args: Prisma.SubsiteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubsite>
          }
          groupBy: {
            args: Prisma.SubsiteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubsiteCountArgs<ExtArgs>,
            result: $Utils.Optional<SubsiteCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>,
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      ContactAddress: {
        payload: Prisma.$ContactAddressPayload<ExtArgs>
        fields: Prisma.ContactAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactAddressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactAddressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactAddressPayload>
          }
          findFirst: {
            args: Prisma.ContactAddressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactAddressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactAddressPayload>
          }
          findMany: {
            args: Prisma.ContactAddressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactAddressPayload>[]
          }
          create: {
            args: Prisma.ContactAddressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactAddressPayload>
          }
          createMany: {
            args: Prisma.ContactAddressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactAddressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactAddressPayload>
          }
          update: {
            args: Prisma.ContactAddressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactAddressPayload>
          }
          deleteMany: {
            args: Prisma.ContactAddressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactAddressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactAddressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactAddressPayload>
          }
          aggregate: {
            args: Prisma.ContactAddressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContactAddress>
          }
          groupBy: {
            args: Prisma.ContactAddressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactAddressCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactAddressCountAggregateOutputType> | number
          }
        }
      }
      ContactEmail: {
        payload: Prisma.$ContactEmailPayload<ExtArgs>
        fields: Prisma.ContactEmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactEmailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactEmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactEmailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactEmailPayload>
          }
          findFirst: {
            args: Prisma.ContactEmailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactEmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactEmailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactEmailPayload>
          }
          findMany: {
            args: Prisma.ContactEmailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactEmailPayload>[]
          }
          create: {
            args: Prisma.ContactEmailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactEmailPayload>
          }
          createMany: {
            args: Prisma.ContactEmailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactEmailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactEmailPayload>
          }
          update: {
            args: Prisma.ContactEmailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactEmailPayload>
          }
          deleteMany: {
            args: Prisma.ContactEmailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactEmailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactEmailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactEmailPayload>
          }
          aggregate: {
            args: Prisma.ContactEmailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContactEmail>
          }
          groupBy: {
            args: Prisma.ContactEmailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactEmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactEmailCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactEmailCountAggregateOutputType> | number
          }
        }
      }
      ContactPhone: {
        payload: Prisma.$ContactPhonePayload<ExtArgs>
        fields: Prisma.ContactPhoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactPhoneFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPhonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactPhoneFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPhonePayload>
          }
          findFirst: {
            args: Prisma.ContactPhoneFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPhonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactPhoneFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPhonePayload>
          }
          findMany: {
            args: Prisma.ContactPhoneFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPhonePayload>[]
          }
          create: {
            args: Prisma.ContactPhoneCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPhonePayload>
          }
          createMany: {
            args: Prisma.ContactPhoneCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactPhoneDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPhonePayload>
          }
          update: {
            args: Prisma.ContactPhoneUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPhonePayload>
          }
          deleteMany: {
            args: Prisma.ContactPhoneDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactPhoneUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactPhoneUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPhonePayload>
          }
          aggregate: {
            args: Prisma.ContactPhoneAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContactPhone>
          }
          groupBy: {
            args: Prisma.ContactPhoneGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactPhoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactPhoneCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactPhoneCountAggregateOutputType> | number
          }
        }
      }
      ContactWebsite: {
        payload: Prisma.$ContactWebsitePayload<ExtArgs>
        fields: Prisma.ContactWebsiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactWebsiteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactWebsitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactWebsiteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactWebsitePayload>
          }
          findFirst: {
            args: Prisma.ContactWebsiteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactWebsitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactWebsiteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactWebsitePayload>
          }
          findMany: {
            args: Prisma.ContactWebsiteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactWebsitePayload>[]
          }
          create: {
            args: Prisma.ContactWebsiteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactWebsitePayload>
          }
          createMany: {
            args: Prisma.ContactWebsiteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactWebsiteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactWebsitePayload>
          }
          update: {
            args: Prisma.ContactWebsiteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactWebsitePayload>
          }
          deleteMany: {
            args: Prisma.ContactWebsiteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactWebsiteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactWebsiteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactWebsitePayload>
          }
          aggregate: {
            args: Prisma.ContactWebsiteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContactWebsite>
          }
          groupBy: {
            args: Prisma.ContactWebsiteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactWebsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactWebsiteCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactWebsiteCountAggregateOutputType> | number
          }
        }
      }
      UserContact: {
        payload: Prisma.$UserContactPayload<ExtArgs>
        fields: Prisma.UserContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserContactFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserContactFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          findFirst: {
            args: Prisma.UserContactFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserContactFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          findMany: {
            args: Prisma.UserContactFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>[]
          }
          create: {
            args: Prisma.UserContactCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          createMany: {
            args: Prisma.UserContactCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserContactDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          update: {
            args: Prisma.UserContactUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          deleteMany: {
            args: Prisma.UserContactDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserContactUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserContactUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          aggregate: {
            args: Prisma.UserContactAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserContact>
          }
          groupBy: {
            args: Prisma.UserContactGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserContactCountArgs<ExtArgs>,
            result: $Utils.Optional<UserContactCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>,
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
    posts: number
    pages: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    pages?: boolean | UserCountOutputTypeCountPagesArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }



  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    subsites: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subsites?: boolean | AccountCountOutputTypeCountSubsitesArgs
  }

  // Custom InputTypes

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSubsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubsiteWhereInput
  }



  /**
   * Count Type SubsiteCountOutputType
   */

  export type SubsiteCountOutputType = {
    posts: number
    pages: number
  }

  export type SubsiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | SubsiteCountOutputTypeCountPostsArgs
    pages?: boolean | SubsiteCountOutputTypeCountPagesArgs
  }

  // Custom InputTypes

  /**
   * SubsiteCountOutputType without action
   */
  export type SubsiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsiteCountOutputType
     */
    select?: SubsiteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SubsiteCountOutputType without action
   */
  export type SubsiteCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * SubsiteCountOutputType without action
   */
  export type SubsiteCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
  }



  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    categories: number
    tags: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | PostCountOutputTypeCountCategoriesArgs
    tags?: boolean | PostCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }



  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    categories: number
    tags: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | PageCountOutputTypeCountCategoriesArgs
    tags?: boolean | PageCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    posts: number
    pages: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
    pages?: boolean | CategoryCountOutputTypeCountPagesArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
  }



  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    posts: number
    pages: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | TagCountOutputTypeCountPostsArgs
    pages?: boolean | TagCountOutputTypeCountPagesArgs
  }

  // Custom InputTypes

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
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
    email: string | null
    name: string | null
    description: string | null
    token: string | null
    prefix: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    suffix: string | null
    preferredName: string | null
    gender: string | null
    birthDate: Date | null
    local: string | null
    timeZone: string | null
    lastLoginTime: Date | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    description: string | null
    token: string | null
    prefix: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    suffix: string | null
    preferredName: string | null
    gender: string | null
    birthDate: Date | null
    local: string | null
    timeZone: string | null
    lastLoginTime: Date | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    description: number
    token: number
    prefix: number
    firstName: number
    middleName: number
    lastName: number
    suffix: number
    preferredName: number
    gender: number
    birthDate: number
    local: number
    timeZone: number
    lastLoginTime: number
    role: number
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
    email?: true
    name?: true
    description?: true
    token?: true
    prefix?: true
    firstName?: true
    middleName?: true
    lastName?: true
    suffix?: true
    preferredName?: true
    gender?: true
    birthDate?: true
    local?: true
    timeZone?: true
    lastLoginTime?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    description?: true
    token?: true
    prefix?: true
    firstName?: true
    middleName?: true
    lastName?: true
    suffix?: true
    preferredName?: true
    gender?: true
    birthDate?: true
    local?: true
    timeZone?: true
    lastLoginTime?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    description?: true
    token?: true
    prefix?: true
    firstName?: true
    middleName?: true
    lastName?: true
    suffix?: true
    preferredName?: true
    gender?: true
    birthDate?: true
    local?: true
    timeZone?: true
    lastLoginTime?: true
    role?: true
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
    email: string
    name: string | null
    description: string | null
    token: string | null
    prefix: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    suffix: string | null
    preferredName: string | null
    gender: string | null
    birthDate: Date | null
    local: string | null
    timeZone: string | null
    lastLoginTime: Date | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date | null
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
    email?: boolean
    name?: boolean
    description?: boolean
    token?: boolean
    prefix?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    suffix?: boolean
    preferredName?: boolean
    gender?: boolean
    birthDate?: boolean
    local?: boolean
    timeZone?: boolean
    lastLoginTime?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | User$contactArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    pages?: boolean | User$pagesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    description?: boolean
    token?: boolean
    prefix?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    suffix?: boolean
    preferredName?: boolean
    gender?: boolean
    birthDate?: boolean
    local?: boolean
    timeZone?: boolean
    lastLoginTime?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | User$contactArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    pages?: boolean | User$pagesArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      contact: Prisma.$UserContactPayload<ExtArgs> | null
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      pages: Prisma.$PagePayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      description: string | null
      token: string | null
      prefix: string | null
      firstName: string | null
      middleName: string | null
      lastName: string | null
      suffix: string | null
      preferredName: string | null
      gender: string | null
      birthDate: Date | null
      local: string | null
      timeZone: string | null
      lastLoginTime: Date | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contact<T extends User$contactArgs<ExtArgs> = {}>(args?: Subset<T, User$contactArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    pages<T extends User$pagesArgs<ExtArgs> = {}>(args?: Subset<T, User$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'findMany'> | Null>;

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly description: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly prefix: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly suffix: FieldRef<"User", 'String'>
    readonly preferredName: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly local: FieldRef<"User", 'String'>
    readonly timeZone: FieldRef<"User", 'String'>
    readonly lastLoginTime: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
    skipDuplicates?: boolean
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.contact
   */
  export type User$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
    where?: UserContactWhereInput
  }


  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.pages
   */
  export type User$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    cursor?: PageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    adminId: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    name: string | null
    accountRef: string | null
    adminId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    name: string | null
    accountRef: string | null
    adminId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    accountRef: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    accountRef?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    accountRef?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    accountRef?: true
    adminId?: true
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
    name: string
    accountRef: string
    adminId: number
    createdAt: Date
    updatedAt: Date | null
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
    name?: boolean
    accountRef?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    subsites?: boolean | Account$subsitesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    name?: boolean
    accountRef?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    subsites?: boolean | Account$subsitesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      subsites: Prisma.$SubsitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      accountRef: string
      adminId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    subsites<T extends Account$subsitesArgs<ExtArgs> = {}>(args?: Subset<T, Account$subsitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly name: FieldRef<"Account", 'String'>
    readonly accountRef: FieldRef<"Account", 'String'>
    readonly adminId: FieldRef<"Account", 'Int'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
    skipDuplicates?: boolean
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * Account.subsites
   */
  export type Account$subsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
    where?: SubsiteWhereInput
    orderBy?: SubsiteOrderByWithRelationInput | SubsiteOrderByWithRelationInput[]
    cursor?: SubsiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubsiteScalarFieldEnum | SubsiteScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Subsite
   */

  export type AggregateSubsite = {
    _count: SubsiteCountAggregateOutputType | null
    _avg: SubsiteAvgAggregateOutputType | null
    _sum: SubsiteSumAggregateOutputType | null
    _min: SubsiteMinAggregateOutputType | null
    _max: SubsiteMaxAggregateOutputType | null
  }

  export type SubsiteAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type SubsiteSumAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type SubsiteMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    subsiteRef: string | null
    logoUrl: string | null
    logoSvg: string | null
    navConfig: string | null
    headerConfig: string | null
    footerConfig: string | null
    siteVisibility: string | null
    siteLanguage: string | null
    domainName: string | null
    domainStatus: string | null
    domainCreatedAt: Date | null
    accountId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubsiteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    subsiteRef: string | null
    logoUrl: string | null
    logoSvg: string | null
    navConfig: string | null
    headerConfig: string | null
    footerConfig: string | null
    siteVisibility: string | null
    siteLanguage: string | null
    domainName: string | null
    domainStatus: string | null
    domainCreatedAt: Date | null
    accountId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubsiteCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    subsiteRef: number
    logoUrl: number
    logoSvg: number
    navConfig: number
    headerConfig: number
    footerConfig: number
    siteVisibility: number
    siteLanguage: number
    domainName: number
    domainStatus: number
    domainCreatedAt: number
    accountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubsiteAvgAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type SubsiteSumAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type SubsiteMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    subsiteRef?: true
    logoUrl?: true
    logoSvg?: true
    navConfig?: true
    headerConfig?: true
    footerConfig?: true
    siteVisibility?: true
    siteLanguage?: true
    domainName?: true
    domainStatus?: true
    domainCreatedAt?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubsiteMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    subsiteRef?: true
    logoUrl?: true
    logoSvg?: true
    navConfig?: true
    headerConfig?: true
    footerConfig?: true
    siteVisibility?: true
    siteLanguage?: true
    domainName?: true
    domainStatus?: true
    domainCreatedAt?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubsiteCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    subsiteRef?: true
    logoUrl?: true
    logoSvg?: true
    navConfig?: true
    headerConfig?: true
    footerConfig?: true
    siteVisibility?: true
    siteLanguage?: true
    domainName?: true
    domainStatus?: true
    domainCreatedAt?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subsite to aggregate.
     */
    where?: SubsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsites to fetch.
     */
    orderBy?: SubsiteOrderByWithRelationInput | SubsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subsites
    **/
    _count?: true | SubsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubsiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubsiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubsiteMaxAggregateInputType
  }

  export type GetSubsiteAggregateType<T extends SubsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSubsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubsite[P]>
      : GetScalarType<T[P], AggregateSubsite[P]>
  }




  export type SubsiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubsiteWhereInput
    orderBy?: SubsiteOrderByWithAggregationInput | SubsiteOrderByWithAggregationInput[]
    by: SubsiteScalarFieldEnum[] | SubsiteScalarFieldEnum
    having?: SubsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubsiteCountAggregateInputType | true
    _avg?: SubsiteAvgAggregateInputType
    _sum?: SubsiteSumAggregateInputType
    _min?: SubsiteMinAggregateInputType
    _max?: SubsiteMaxAggregateInputType
  }

  export type SubsiteGroupByOutputType = {
    id: number
    name: string
    slug: string | null
    subsiteRef: string
    logoUrl: string | null
    logoSvg: string | null
    navConfig: string | null
    headerConfig: string | null
    footerConfig: string | null
    siteVisibility: string | null
    siteLanguage: string | null
    domainName: string | null
    domainStatus: string | null
    domainCreatedAt: Date | null
    accountId: number
    createdAt: Date
    updatedAt: Date | null
    _count: SubsiteCountAggregateOutputType | null
    _avg: SubsiteAvgAggregateOutputType | null
    _sum: SubsiteSumAggregateOutputType | null
    _min: SubsiteMinAggregateOutputType | null
    _max: SubsiteMaxAggregateOutputType | null
  }

  type GetSubsiteGroupByPayload<T extends SubsiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubsiteGroupByOutputType[P]>
            : GetScalarType<T[P], SubsiteGroupByOutputType[P]>
        }
      >
    >


  export type SubsiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    subsiteRef?: boolean
    logoUrl?: boolean
    logoSvg?: boolean
    navConfig?: boolean
    headerConfig?: boolean
    footerConfig?: boolean
    siteVisibility?: boolean
    siteLanguage?: boolean
    domainName?: boolean
    domainStatus?: boolean
    domainCreatedAt?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Subsite$postsArgs<ExtArgs>
    pages?: boolean | Subsite$pagesArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    _count?: boolean | SubsiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subsite"]>

  export type SubsiteSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    subsiteRef?: boolean
    logoUrl?: boolean
    logoSvg?: boolean
    navConfig?: boolean
    headerConfig?: boolean
    footerConfig?: boolean
    siteVisibility?: boolean
    siteLanguage?: boolean
    domainName?: boolean
    domainStatus?: boolean
    domainCreatedAt?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubsiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Subsite$postsArgs<ExtArgs>
    pages?: boolean | Subsite$pagesArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    _count?: boolean | SubsiteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SubsitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subsite"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      pages: Prisma.$PagePayload<ExtArgs>[]
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string | null
      subsiteRef: string
      logoUrl: string | null
      logoSvg: string | null
      navConfig: string | null
      headerConfig: string | null
      footerConfig: string | null
      siteVisibility: string | null
      siteLanguage: string | null
      domainName: string | null
      domainStatus: string | null
      domainCreatedAt: Date | null
      accountId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["subsite"]>
    composites: {}
  }


  type SubsiteGetPayload<S extends boolean | null | undefined | SubsiteDefaultArgs> = $Result.GetResult<Prisma.$SubsitePayload, S>

  type SubsiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubsiteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubsiteCountAggregateInputType | true
    }

  export interface SubsiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subsite'], meta: { name: 'Subsite' } }
    /**
     * Find zero or one Subsite that matches the filter.
     * @param {SubsiteFindUniqueArgs} args - Arguments to find a Subsite
     * @example
     * // Get one Subsite
     * const subsite = await prisma.subsite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubsiteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubsiteFindUniqueArgs<ExtArgs>>
    ): Prisma__SubsiteClient<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subsite that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubsiteFindUniqueOrThrowArgs} args - Arguments to find a Subsite
     * @example
     * // Get one Subsite
     * const subsite = await prisma.subsite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubsiteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubsiteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubsiteClient<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subsite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsiteFindFirstArgs} args - Arguments to find a Subsite
     * @example
     * // Get one Subsite
     * const subsite = await prisma.subsite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubsiteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubsiteFindFirstArgs<ExtArgs>>
    ): Prisma__SubsiteClient<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subsite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsiteFindFirstOrThrowArgs} args - Arguments to find a Subsite
     * @example
     * // Get one Subsite
     * const subsite = await prisma.subsite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubsiteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubsiteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubsiteClient<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subsites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsiteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subsites
     * const subsites = await prisma.subsite.findMany()
     * 
     * // Get first 10 Subsites
     * const subsites = await prisma.subsite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subsiteWithIdOnly = await prisma.subsite.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubsiteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubsiteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subsite.
     * @param {SubsiteCreateArgs} args - Arguments to create a Subsite.
     * @example
     * // Create one Subsite
     * const Subsite = await prisma.subsite.create({
     *   data: {
     *     // ... data to create a Subsite
     *   }
     * })
     * 
    **/
    create<T extends SubsiteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubsiteCreateArgs<ExtArgs>>
    ): Prisma__SubsiteClient<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subsites.
     *     @param {SubsiteCreateManyArgs} args - Arguments to create many Subsites.
     *     @example
     *     // Create many Subsites
     *     const subsite = await prisma.subsite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubsiteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubsiteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subsite.
     * @param {SubsiteDeleteArgs} args - Arguments to delete one Subsite.
     * @example
     * // Delete one Subsite
     * const Subsite = await prisma.subsite.delete({
     *   where: {
     *     // ... filter to delete one Subsite
     *   }
     * })
     * 
    **/
    delete<T extends SubsiteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubsiteDeleteArgs<ExtArgs>>
    ): Prisma__SubsiteClient<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subsite.
     * @param {SubsiteUpdateArgs} args - Arguments to update one Subsite.
     * @example
     * // Update one Subsite
     * const subsite = await prisma.subsite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubsiteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubsiteUpdateArgs<ExtArgs>>
    ): Prisma__SubsiteClient<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subsites.
     * @param {SubsiteDeleteManyArgs} args - Arguments to filter Subsites to delete.
     * @example
     * // Delete a few Subsites
     * const { count } = await prisma.subsite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubsiteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubsiteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subsites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subsites
     * const subsite = await prisma.subsite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubsiteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubsiteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subsite.
     * @param {SubsiteUpsertArgs} args - Arguments to update or create a Subsite.
     * @example
     * // Update or create a Subsite
     * const subsite = await prisma.subsite.upsert({
     *   create: {
     *     // ... data to create a Subsite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subsite we want to update
     *   }
     * })
    **/
    upsert<T extends SubsiteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubsiteUpsertArgs<ExtArgs>>
    ): Prisma__SubsiteClient<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subsites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsiteCountArgs} args - Arguments to filter Subsites to count.
     * @example
     * // Count the number of Subsites
     * const count = await prisma.subsite.count({
     *   where: {
     *     // ... the filter for the Subsites we want to count
     *   }
     * })
    **/
    count<T extends SubsiteCountArgs>(
      args?: Subset<T, SubsiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subsite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubsiteAggregateArgs>(args: Subset<T, SubsiteAggregateArgs>): Prisma.PrismaPromise<GetSubsiteAggregateType<T>>

    /**
     * Group by Subsite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsiteGroupByArgs} args - Group by arguments.
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
      T extends SubsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubsiteGroupByArgs['orderBy'] }
        : { orderBy?: SubsiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subsite model
   */
  readonly fields: SubsiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subsite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubsiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends Subsite$postsArgs<ExtArgs> = {}>(args?: Subset<T, Subsite$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    pages<T extends Subsite$pagesArgs<ExtArgs> = {}>(args?: Subset<T, Subsite$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'findMany'> | Null>;

    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Subsite model
   */ 
  interface SubsiteFieldRefs {
    readonly id: FieldRef<"Subsite", 'Int'>
    readonly name: FieldRef<"Subsite", 'String'>
    readonly slug: FieldRef<"Subsite", 'String'>
    readonly subsiteRef: FieldRef<"Subsite", 'String'>
    readonly logoUrl: FieldRef<"Subsite", 'String'>
    readonly logoSvg: FieldRef<"Subsite", 'String'>
    readonly navConfig: FieldRef<"Subsite", 'String'>
    readonly headerConfig: FieldRef<"Subsite", 'String'>
    readonly footerConfig: FieldRef<"Subsite", 'String'>
    readonly siteVisibility: FieldRef<"Subsite", 'String'>
    readonly siteLanguage: FieldRef<"Subsite", 'String'>
    readonly domainName: FieldRef<"Subsite", 'String'>
    readonly domainStatus: FieldRef<"Subsite", 'String'>
    readonly domainCreatedAt: FieldRef<"Subsite", 'DateTime'>
    readonly accountId: FieldRef<"Subsite", 'Int'>
    readonly createdAt: FieldRef<"Subsite", 'DateTime'>
    readonly updatedAt: FieldRef<"Subsite", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Subsite findUnique
   */
  export type SubsiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
    /**
     * Filter, which Subsite to fetch.
     */
    where: SubsiteWhereUniqueInput
  }


  /**
   * Subsite findUniqueOrThrow
   */
  export type SubsiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
    /**
     * Filter, which Subsite to fetch.
     */
    where: SubsiteWhereUniqueInput
  }


  /**
   * Subsite findFirst
   */
  export type SubsiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
    /**
     * Filter, which Subsite to fetch.
     */
    where?: SubsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsites to fetch.
     */
    orderBy?: SubsiteOrderByWithRelationInput | SubsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subsites.
     */
    cursor?: SubsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subsites.
     */
    distinct?: SubsiteScalarFieldEnum | SubsiteScalarFieldEnum[]
  }


  /**
   * Subsite findFirstOrThrow
   */
  export type SubsiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
    /**
     * Filter, which Subsite to fetch.
     */
    where?: SubsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsites to fetch.
     */
    orderBy?: SubsiteOrderByWithRelationInput | SubsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subsites.
     */
    cursor?: SubsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subsites.
     */
    distinct?: SubsiteScalarFieldEnum | SubsiteScalarFieldEnum[]
  }


  /**
   * Subsite findMany
   */
  export type SubsiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
    /**
     * Filter, which Subsites to fetch.
     */
    where?: SubsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsites to fetch.
     */
    orderBy?: SubsiteOrderByWithRelationInput | SubsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subsites.
     */
    cursor?: SubsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsites.
     */
    skip?: number
    distinct?: SubsiteScalarFieldEnum | SubsiteScalarFieldEnum[]
  }


  /**
   * Subsite create
   */
  export type SubsiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Subsite.
     */
    data: XOR<SubsiteCreateInput, SubsiteUncheckedCreateInput>
  }


  /**
   * Subsite createMany
   */
  export type SubsiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subsites.
     */
    data: SubsiteCreateManyInput | SubsiteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Subsite update
   */
  export type SubsiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Subsite.
     */
    data: XOR<SubsiteUpdateInput, SubsiteUncheckedUpdateInput>
    /**
     * Choose, which Subsite to update.
     */
    where: SubsiteWhereUniqueInput
  }


  /**
   * Subsite updateMany
   */
  export type SubsiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subsites.
     */
    data: XOR<SubsiteUpdateManyMutationInput, SubsiteUncheckedUpdateManyInput>
    /**
     * Filter which Subsites to update
     */
    where?: SubsiteWhereInput
  }


  /**
   * Subsite upsert
   */
  export type SubsiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Subsite to update in case it exists.
     */
    where: SubsiteWhereUniqueInput
    /**
     * In case the Subsite found by the `where` argument doesn't exist, create a new Subsite with this data.
     */
    create: XOR<SubsiteCreateInput, SubsiteUncheckedCreateInput>
    /**
     * In case the Subsite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubsiteUpdateInput, SubsiteUncheckedUpdateInput>
  }


  /**
   * Subsite delete
   */
  export type SubsiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
    /**
     * Filter which Subsite to delete.
     */
    where: SubsiteWhereUniqueInput
  }


  /**
   * Subsite deleteMany
   */
  export type SubsiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subsites to delete
     */
    where?: SubsiteWhereInput
  }


  /**
   * Subsite.posts
   */
  export type Subsite$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Subsite.pages
   */
  export type Subsite$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    cursor?: PageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }


  /**
   * Subsite without action
   */
  export type SubsiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsite
     */
    select?: SubsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubsiteInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    subsiteId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    subsiteId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    overview: string | null
    content: string | null
    slug: string | null
    coverImage: string | null
    status: $Enums.ContentStatus | null
    published: boolean | null
    publishedAt: Date | null
    deleted: boolean | null
    authorId: number | null
    subsiteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    overview: string | null
    content: string | null
    slug: string | null
    coverImage: string | null
    status: $Enums.ContentStatus | null
    published: boolean | null
    publishedAt: Date | null
    deleted: boolean | null
    authorId: number | null
    subsiteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    overview: number
    content: number
    slug: number
    coverImage: number
    status: number
    published: number
    publishedAt: number
    deleted: number
    authorId: number
    subsiteId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
    subsiteId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
    subsiteId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    overview?: true
    content?: true
    slug?: true
    coverImage?: true
    status?: true
    published?: true
    publishedAt?: true
    deleted?: true
    authorId?: true
    subsiteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    overview?: true
    content?: true
    slug?: true
    coverImage?: true
    status?: true
    published?: true
    publishedAt?: true
    deleted?: true
    authorId?: true
    subsiteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    overview?: true
    content?: true
    slug?: true
    coverImage?: true
    status?: true
    published?: true
    publishedAt?: true
    deleted?: true
    authorId?: true
    subsiteId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    overview: string
    content: string | null
    slug: string | null
    coverImage: string | null
    status: $Enums.ContentStatus
    published: boolean
    publishedAt: Date | null
    deleted: boolean
    authorId: number
    subsiteId: number
    createdAt: Date
    updatedAt: Date | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    overview?: boolean
    content?: boolean
    slug?: boolean
    coverImage?: boolean
    status?: boolean
    published?: boolean
    publishedAt?: boolean
    deleted?: boolean
    authorId?: boolean
    subsiteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    subsite?: boolean | SubsiteDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    overview?: boolean
    content?: boolean
    slug?: boolean
    coverImage?: boolean
    status?: boolean
    published?: boolean
    publishedAt?: boolean
    deleted?: boolean
    authorId?: boolean
    subsiteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    subsite?: boolean | SubsiteDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      subsite: Prisma.$SubsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      overview: string
      content: string | null
      slug: string | null
      coverImage: string | null
      status: $Enums.ContentStatus
      published: boolean
      publishedAt: Date | null
      deleted: boolean
      authorId: number
      subsiteId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    categories<T extends Post$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Post$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    tags<T extends Post$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany'> | Null>;

    subsite<T extends SubsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubsiteDefaultArgs<ExtArgs>>): Prisma__SubsiteClient<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly overview: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly coverImage: FieldRef<"Post", 'String'>
    readonly status: FieldRef<"Post", 'ContentStatus'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly publishedAt: FieldRef<"Post", 'DateTime'>
    readonly deleted: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'Int'>
    readonly subsiteId: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.categories
   */
  export type Post$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Post.tags
   */
  export type Post$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    subsiteId: number | null
    pageOrder: number | null
    parentPageId: number | null
  }

  export type PageSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    subsiteId: number | null
    pageOrder: number | null
    parentPageId: number | null
  }

  export type PageMinAggregateOutputType = {
    id: number | null
    title: string | null
    overview: string | null
    content: string | null
    slug: string | null
    status: $Enums.ContentStatus | null
    publishedAt: Date | null
    published: boolean | null
    coverImage: string | null
    layoutTemplate: string | null
    theme: string | null
    metaData: string | null
    seoSettings: string | null
    analyticsCodes: string | null
    showOnNav: boolean | null
    deleted: boolean | null
    authorId: number | null
    subsiteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    pageOrder: number | null
    parentPageId: number | null
  }

  export type PageMaxAggregateOutputType = {
    id: number | null
    title: string | null
    overview: string | null
    content: string | null
    slug: string | null
    status: $Enums.ContentStatus | null
    publishedAt: Date | null
    published: boolean | null
    coverImage: string | null
    layoutTemplate: string | null
    theme: string | null
    metaData: string | null
    seoSettings: string | null
    analyticsCodes: string | null
    showOnNav: boolean | null
    deleted: boolean | null
    authorId: number | null
    subsiteId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    pageOrder: number | null
    parentPageId: number | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    title: number
    overview: number
    content: number
    slug: number
    status: number
    publishedAt: number
    published: number
    coverImage: number
    layoutTemplate: number
    theme: number
    metaData: number
    seoSettings: number
    analyticsCodes: number
    showOnNav: number
    deleted: number
    authorId: number
    subsiteId: number
    createdAt: number
    updatedAt: number
    pageOrder: number
    parentPageId: number
    _all: number
  }


  export type PageAvgAggregateInputType = {
    id?: true
    authorId?: true
    subsiteId?: true
    pageOrder?: true
    parentPageId?: true
  }

  export type PageSumAggregateInputType = {
    id?: true
    authorId?: true
    subsiteId?: true
    pageOrder?: true
    parentPageId?: true
  }

  export type PageMinAggregateInputType = {
    id?: true
    title?: true
    overview?: true
    content?: true
    slug?: true
    status?: true
    publishedAt?: true
    published?: true
    coverImage?: true
    layoutTemplate?: true
    theme?: true
    metaData?: true
    seoSettings?: true
    analyticsCodes?: true
    showOnNav?: true
    deleted?: true
    authorId?: true
    subsiteId?: true
    createdAt?: true
    updatedAt?: true
    pageOrder?: true
    parentPageId?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    title?: true
    overview?: true
    content?: true
    slug?: true
    status?: true
    publishedAt?: true
    published?: true
    coverImage?: true
    layoutTemplate?: true
    theme?: true
    metaData?: true
    seoSettings?: true
    analyticsCodes?: true
    showOnNav?: true
    deleted?: true
    authorId?: true
    subsiteId?: true
    createdAt?: true
    updatedAt?: true
    pageOrder?: true
    parentPageId?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    title?: true
    overview?: true
    content?: true
    slug?: true
    status?: true
    publishedAt?: true
    published?: true
    coverImage?: true
    layoutTemplate?: true
    theme?: true
    metaData?: true
    seoSettings?: true
    analyticsCodes?: true
    showOnNav?: true
    deleted?: true
    authorId?: true
    subsiteId?: true
    createdAt?: true
    updatedAt?: true
    pageOrder?: true
    parentPageId?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _avg?: PageAvgAggregateInputType
    _sum?: PageSumAggregateInputType
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: number
    title: string
    overview: string
    content: string | null
    slug: string | null
    status: $Enums.ContentStatus
    publishedAt: Date | null
    published: boolean
    coverImage: string | null
    layoutTemplate: string | null
    theme: string | null
    metaData: string | null
    seoSettings: string | null
    analyticsCodes: string | null
    showOnNav: boolean
    deleted: boolean
    authorId: number
    subsiteId: number
    createdAt: Date
    updatedAt: Date | null
    pageOrder: number
    parentPageId: number
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    overview?: boolean
    content?: boolean
    slug?: boolean
    status?: boolean
    publishedAt?: boolean
    published?: boolean
    coverImage?: boolean
    layoutTemplate?: boolean
    theme?: boolean
    metaData?: boolean
    seoSettings?: boolean
    analyticsCodes?: boolean
    showOnNav?: boolean
    deleted?: boolean
    authorId?: boolean
    subsiteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pageOrder?: boolean
    parentPageId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Page$categoriesArgs<ExtArgs>
    tags?: boolean | Page$tagsArgs<ExtArgs>
    subsite?: boolean | SubsiteDefaultArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    title?: boolean
    overview?: boolean
    content?: boolean
    slug?: boolean
    status?: boolean
    publishedAt?: boolean
    published?: boolean
    coverImage?: boolean
    layoutTemplate?: boolean
    theme?: boolean
    metaData?: boolean
    seoSettings?: boolean
    analyticsCodes?: boolean
    showOnNav?: boolean
    deleted?: boolean
    authorId?: boolean
    subsiteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pageOrder?: boolean
    parentPageId?: boolean
  }

  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | Page$categoriesArgs<ExtArgs>
    tags?: boolean | Page$tagsArgs<ExtArgs>
    subsite?: boolean | SubsiteDefaultArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      subsite: Prisma.$SubsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      overview: string
      content: string | null
      slug: string | null
      status: $Enums.ContentStatus
      publishedAt: Date | null
      published: boolean
      coverImage: string | null
      layoutTemplate: string | null
      theme: string | null
      metaData: string | null
      seoSettings: string | null
      analyticsCodes: string | null
      showOnNav: boolean
      deleted: boolean
      authorId: number
      subsiteId: number
      createdAt: Date
      updatedAt: Date | null
      pageOrder: number
      parentPageId: number
    }, ExtArgs["result"]["page"]>
    composites: {}
  }


  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>
    ): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Page that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>
    ): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
    **/
    create<T extends PageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PageCreateArgs<ExtArgs>>
    ): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pages.
     *     @param {PageCreateManyArgs} args - Arguments to create many Pages.
     *     @example
     *     // Create many Pages
     *     const page = await prisma.page.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
    **/
    delete<T extends PageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PageDeleteArgs<ExtArgs>>
    ): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PageUpdateArgs<ExtArgs>>
    ): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
    **/
    upsert<T extends PageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PageUpsertArgs<ExtArgs>>
    ): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
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
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    categories<T extends Page$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Page$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    tags<T extends Page$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Page$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany'> | Null>;

    subsite<T extends SubsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubsiteDefaultArgs<ExtArgs>>): Prisma__SubsiteClient<$Result.GetResult<Prisma.$SubsitePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Page model
   */ 
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'Int'>
    readonly title: FieldRef<"Page", 'String'>
    readonly overview: FieldRef<"Page", 'String'>
    readonly content: FieldRef<"Page", 'String'>
    readonly slug: FieldRef<"Page", 'String'>
    readonly status: FieldRef<"Page", 'ContentStatus'>
    readonly publishedAt: FieldRef<"Page", 'DateTime'>
    readonly published: FieldRef<"Page", 'Boolean'>
    readonly coverImage: FieldRef<"Page", 'String'>
    readonly layoutTemplate: FieldRef<"Page", 'String'>
    readonly theme: FieldRef<"Page", 'String'>
    readonly metaData: FieldRef<"Page", 'String'>
    readonly seoSettings: FieldRef<"Page", 'String'>
    readonly analyticsCodes: FieldRef<"Page", 'String'>
    readonly showOnNav: FieldRef<"Page", 'Boolean'>
    readonly deleted: FieldRef<"Page", 'Boolean'>
    readonly authorId: FieldRef<"Page", 'Int'>
    readonly subsiteId: FieldRef<"Page", 'Int'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
    readonly pageOrder: FieldRef<"Page", 'Int'>
    readonly parentPageId: FieldRef<"Page", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }


  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }


  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }


  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }


  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }


  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }


  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }


  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
  }


  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }


  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }


  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
  }


  /**
   * Page.categories
   */
  export type Page$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Page.tags
   */
  export type Page$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }


  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
  }



  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: number | null
    bio: string | null
    active: boolean | null
    slug: string | null
    imageUrl: string | null
    subsiteRef: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: number | null
    bio: string | null
    active: boolean | null
    slug: string | null
    imageUrl: string | null
    subsiteRef: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    bio: number
    active: number
    slug: number
    imageUrl: number
    subsiteRef: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    bio?: true
    active?: true
    slug?: true
    imageUrl?: true
    subsiteRef?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    active?: true
    slug?: true
    imageUrl?: true
    subsiteRef?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    bio?: true
    active?: true
    slug?: true
    imageUrl?: true
    subsiteRef?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: number
    bio: string | null
    active: boolean
    slug: string | null
    imageUrl: string | null
    subsiteRef: string
    userId: number
    createdAt: Date
    updatedAt: Date | null
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    active?: boolean
    slug?: boolean
    imageUrl?: boolean
    subsiteRef?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    bio?: boolean
    active?: boolean
    slug?: boolean
    imageUrl?: boolean
    subsiteRef?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bio: string | null
      active: boolean
      slug: string | null
      imageUrl: string | null
      subsiteRef: string
      userId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }


  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
    **/
    create<T extends UserProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserProfiles.
     *     @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     *     @example
     *     // Create many UserProfiles
     *     const userProfile = await prisma.userProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
    **/
    delete<T extends UserProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
    **/
    upsert<T extends UserProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserProfile model
   */ 
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'Int'>
    readonly bio: FieldRef<"UserProfile", 'String'>
    readonly active: FieldRef<"UserProfile", 'Boolean'>
    readonly slug: FieldRef<"UserProfile", 'String'>
    readonly imageUrl: FieldRef<"UserProfile", 'String'>
    readonly subsiteRef: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'Int'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }


  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }


  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
  }



  /**
   * Model ContactAddress
   */

  export type AggregateContactAddress = {
    _count: ContactAddressCountAggregateOutputType | null
    _avg: ContactAddressAvgAggregateOutputType | null
    _sum: ContactAddressSumAggregateOutputType | null
    _min: ContactAddressMinAggregateOutputType | null
    _max: ContactAddressMaxAggregateOutputType | null
  }

  export type ContactAddressAvgAggregateOutputType = {
    id: number | null
    contactId: number | null
  }

  export type ContactAddressSumAggregateOutputType = {
    id: number | null
    contactId: number | null
  }

  export type ContactAddressMinAggregateOutputType = {
    id: number | null
    line1: string | null
    line2: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    contactId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactAddressMaxAggregateOutputType = {
    id: number | null
    line1: string | null
    line2: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    contactId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactAddressCountAggregateOutputType = {
    id: number
    line1: number
    line2: number
    city: number
    state: number
    postalCode: number
    country: number
    contactId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactAddressAvgAggregateInputType = {
    id?: true
    contactId?: true
  }

  export type ContactAddressSumAggregateInputType = {
    id?: true
    contactId?: true
  }

  export type ContactAddressMinAggregateInputType = {
    id?: true
    line1?: true
    line2?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactAddressMaxAggregateInputType = {
    id?: true
    line1?: true
    line2?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactAddressCountAggregateInputType = {
    id?: true
    line1?: true
    line2?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactAddress to aggregate.
     */
    where?: ContactAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactAddresses to fetch.
     */
    orderBy?: ContactAddressOrderByWithRelationInput | ContactAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactAddresses
    **/
    _count?: true | ContactAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactAddressMaxAggregateInputType
  }

  export type GetContactAddressAggregateType<T extends ContactAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateContactAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactAddress[P]>
      : GetScalarType<T[P], AggregateContactAddress[P]>
  }




  export type ContactAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactAddressWhereInput
    orderBy?: ContactAddressOrderByWithAggregationInput | ContactAddressOrderByWithAggregationInput[]
    by: ContactAddressScalarFieldEnum[] | ContactAddressScalarFieldEnum
    having?: ContactAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactAddressCountAggregateInputType | true
    _avg?: ContactAddressAvgAggregateInputType
    _sum?: ContactAddressSumAggregateInputType
    _min?: ContactAddressMinAggregateInputType
    _max?: ContactAddressMaxAggregateInputType
  }

  export type ContactAddressGroupByOutputType = {
    id: number
    line1: string
    line2: string | null
    city: string
    state: string
    postalCode: string
    country: string
    contactId: number
    createdAt: Date
    updatedAt: Date | null
    _count: ContactAddressCountAggregateOutputType | null
    _avg: ContactAddressAvgAggregateOutputType | null
    _sum: ContactAddressSumAggregateOutputType | null
    _min: ContactAddressMinAggregateOutputType | null
    _max: ContactAddressMaxAggregateOutputType | null
  }

  type GetContactAddressGroupByPayload<T extends ContactAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactAddressGroupByOutputType[P]>
            : GetScalarType<T[P], ContactAddressGroupByOutputType[P]>
        }
      >
    >


  export type ContactAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    line1?: boolean
    line2?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | UserContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactAddress"]>

  export type ContactAddressSelectScalar = {
    id?: boolean
    line1?: boolean
    line2?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | UserContactDefaultArgs<ExtArgs>
  }


  export type $ContactAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactAddress"
    objects: {
      contact: Prisma.$UserContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      line1: string
      line2: string | null
      city: string
      state: string
      postalCode: string
      country: string
      contactId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["contactAddress"]>
    composites: {}
  }


  type ContactAddressGetPayload<S extends boolean | null | undefined | ContactAddressDefaultArgs> = $Result.GetResult<Prisma.$ContactAddressPayload, S>

  type ContactAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactAddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactAddressCountAggregateInputType | true
    }

  export interface ContactAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactAddress'], meta: { name: 'ContactAddress' } }
    /**
     * Find zero or one ContactAddress that matches the filter.
     * @param {ContactAddressFindUniqueArgs} args - Arguments to find a ContactAddress
     * @example
     * // Get one ContactAddress
     * const contactAddress = await prisma.contactAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactAddressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactAddressFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactAddressClient<$Result.GetResult<Prisma.$ContactAddressPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContactAddress that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactAddressFindUniqueOrThrowArgs} args - Arguments to find a ContactAddress
     * @example
     * // Get one ContactAddress
     * const contactAddress = await prisma.contactAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactAddressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactAddressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactAddressClient<$Result.GetResult<Prisma.$ContactAddressPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContactAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAddressFindFirstArgs} args - Arguments to find a ContactAddress
     * @example
     * // Get one ContactAddress
     * const contactAddress = await prisma.contactAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactAddressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactAddressFindFirstArgs<ExtArgs>>
    ): Prisma__ContactAddressClient<$Result.GetResult<Prisma.$ContactAddressPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContactAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAddressFindFirstOrThrowArgs} args - Arguments to find a ContactAddress
     * @example
     * // Get one ContactAddress
     * const contactAddress = await prisma.contactAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactAddressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactAddressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactAddressClient<$Result.GetResult<Prisma.$ContactAddressPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ContactAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactAddresses
     * const contactAddresses = await prisma.contactAddress.findMany()
     * 
     * // Get first 10 ContactAddresses
     * const contactAddresses = await prisma.contactAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactAddressWithIdOnly = await prisma.contactAddress.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactAddressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactAddressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactAddressPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContactAddress.
     * @param {ContactAddressCreateArgs} args - Arguments to create a ContactAddress.
     * @example
     * // Create one ContactAddress
     * const ContactAddress = await prisma.contactAddress.create({
     *   data: {
     *     // ... data to create a ContactAddress
     *   }
     * })
     * 
    **/
    create<T extends ContactAddressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactAddressCreateArgs<ExtArgs>>
    ): Prisma__ContactAddressClient<$Result.GetResult<Prisma.$ContactAddressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ContactAddresses.
     *     @param {ContactAddressCreateManyArgs} args - Arguments to create many ContactAddresses.
     *     @example
     *     // Create many ContactAddresses
     *     const contactAddress = await prisma.contactAddress.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactAddressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactAddressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactAddress.
     * @param {ContactAddressDeleteArgs} args - Arguments to delete one ContactAddress.
     * @example
     * // Delete one ContactAddress
     * const ContactAddress = await prisma.contactAddress.delete({
     *   where: {
     *     // ... filter to delete one ContactAddress
     *   }
     * })
     * 
    **/
    delete<T extends ContactAddressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactAddressDeleteArgs<ExtArgs>>
    ): Prisma__ContactAddressClient<$Result.GetResult<Prisma.$ContactAddressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContactAddress.
     * @param {ContactAddressUpdateArgs} args - Arguments to update one ContactAddress.
     * @example
     * // Update one ContactAddress
     * const contactAddress = await prisma.contactAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactAddressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactAddressUpdateArgs<ExtArgs>>
    ): Prisma__ContactAddressClient<$Result.GetResult<Prisma.$ContactAddressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ContactAddresses.
     * @param {ContactAddressDeleteManyArgs} args - Arguments to filter ContactAddresses to delete.
     * @example
     * // Delete a few ContactAddresses
     * const { count } = await prisma.contactAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactAddressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactAddressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactAddresses
     * const contactAddress = await prisma.contactAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactAddressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactAddressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactAddress.
     * @param {ContactAddressUpsertArgs} args - Arguments to update or create a ContactAddress.
     * @example
     * // Update or create a ContactAddress
     * const contactAddress = await prisma.contactAddress.upsert({
     *   create: {
     *     // ... data to create a ContactAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactAddress we want to update
     *   }
     * })
    **/
    upsert<T extends ContactAddressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactAddressUpsertArgs<ExtArgs>>
    ): Prisma__ContactAddressClient<$Result.GetResult<Prisma.$ContactAddressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ContactAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAddressCountArgs} args - Arguments to filter ContactAddresses to count.
     * @example
     * // Count the number of ContactAddresses
     * const count = await prisma.contactAddress.count({
     *   where: {
     *     // ... the filter for the ContactAddresses we want to count
     *   }
     * })
    **/
    count<T extends ContactAddressCountArgs>(
      args?: Subset<T, ContactAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAddressAggregateArgs>(args: Subset<T, ContactAddressAggregateArgs>): Prisma.PrismaPromise<GetContactAddressAggregateType<T>>

    /**
     * Group by ContactAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAddressGroupByArgs} args - Group by arguments.
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
      T extends ContactAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactAddressGroupByArgs['orderBy'] }
        : { orderBy?: ContactAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactAddress model
   */
  readonly fields: ContactAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contact<T extends UserContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserContactDefaultArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ContactAddress model
   */ 
  interface ContactAddressFieldRefs {
    readonly id: FieldRef<"ContactAddress", 'Int'>
    readonly line1: FieldRef<"ContactAddress", 'String'>
    readonly line2: FieldRef<"ContactAddress", 'String'>
    readonly city: FieldRef<"ContactAddress", 'String'>
    readonly state: FieldRef<"ContactAddress", 'String'>
    readonly postalCode: FieldRef<"ContactAddress", 'String'>
    readonly country: FieldRef<"ContactAddress", 'String'>
    readonly contactId: FieldRef<"ContactAddress", 'Int'>
    readonly createdAt: FieldRef<"ContactAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactAddress", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ContactAddress findUnique
   */
  export type ContactAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
    /**
     * Filter, which ContactAddress to fetch.
     */
    where: ContactAddressWhereUniqueInput
  }


  /**
   * ContactAddress findUniqueOrThrow
   */
  export type ContactAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
    /**
     * Filter, which ContactAddress to fetch.
     */
    where: ContactAddressWhereUniqueInput
  }


  /**
   * ContactAddress findFirst
   */
  export type ContactAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
    /**
     * Filter, which ContactAddress to fetch.
     */
    where?: ContactAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactAddresses to fetch.
     */
    orderBy?: ContactAddressOrderByWithRelationInput | ContactAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactAddresses.
     */
    cursor?: ContactAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactAddresses.
     */
    distinct?: ContactAddressScalarFieldEnum | ContactAddressScalarFieldEnum[]
  }


  /**
   * ContactAddress findFirstOrThrow
   */
  export type ContactAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
    /**
     * Filter, which ContactAddress to fetch.
     */
    where?: ContactAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactAddresses to fetch.
     */
    orderBy?: ContactAddressOrderByWithRelationInput | ContactAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactAddresses.
     */
    cursor?: ContactAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactAddresses.
     */
    distinct?: ContactAddressScalarFieldEnum | ContactAddressScalarFieldEnum[]
  }


  /**
   * ContactAddress findMany
   */
  export type ContactAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
    /**
     * Filter, which ContactAddresses to fetch.
     */
    where?: ContactAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactAddresses to fetch.
     */
    orderBy?: ContactAddressOrderByWithRelationInput | ContactAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactAddresses.
     */
    cursor?: ContactAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactAddresses.
     */
    skip?: number
    distinct?: ContactAddressScalarFieldEnum | ContactAddressScalarFieldEnum[]
  }


  /**
   * ContactAddress create
   */
  export type ContactAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactAddress.
     */
    data: XOR<ContactAddressCreateInput, ContactAddressUncheckedCreateInput>
  }


  /**
   * ContactAddress createMany
   */
  export type ContactAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactAddresses.
     */
    data: ContactAddressCreateManyInput | ContactAddressCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ContactAddress update
   */
  export type ContactAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactAddress.
     */
    data: XOR<ContactAddressUpdateInput, ContactAddressUncheckedUpdateInput>
    /**
     * Choose, which ContactAddress to update.
     */
    where: ContactAddressWhereUniqueInput
  }


  /**
   * ContactAddress updateMany
   */
  export type ContactAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactAddresses.
     */
    data: XOR<ContactAddressUpdateManyMutationInput, ContactAddressUncheckedUpdateManyInput>
    /**
     * Filter which ContactAddresses to update
     */
    where?: ContactAddressWhereInput
  }


  /**
   * ContactAddress upsert
   */
  export type ContactAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactAddress to update in case it exists.
     */
    where: ContactAddressWhereUniqueInput
    /**
     * In case the ContactAddress found by the `where` argument doesn't exist, create a new ContactAddress with this data.
     */
    create: XOR<ContactAddressCreateInput, ContactAddressUncheckedCreateInput>
    /**
     * In case the ContactAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactAddressUpdateInput, ContactAddressUncheckedUpdateInput>
  }


  /**
   * ContactAddress delete
   */
  export type ContactAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
    /**
     * Filter which ContactAddress to delete.
     */
    where: ContactAddressWhereUniqueInput
  }


  /**
   * ContactAddress deleteMany
   */
  export type ContactAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactAddresses to delete
     */
    where?: ContactAddressWhereInput
  }


  /**
   * ContactAddress without action
   */
  export type ContactAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
  }



  /**
   * Model ContactEmail
   */

  export type AggregateContactEmail = {
    _count: ContactEmailCountAggregateOutputType | null
    _avg: ContactEmailAvgAggregateOutputType | null
    _sum: ContactEmailSumAggregateOutputType | null
    _min: ContactEmailMinAggregateOutputType | null
    _max: ContactEmailMaxAggregateOutputType | null
  }

  export type ContactEmailAvgAggregateOutputType = {
    id: number | null
    contactId: number | null
  }

  export type ContactEmailSumAggregateOutputType = {
    id: number | null
    contactId: number | null
  }

  export type ContactEmailMinAggregateOutputType = {
    id: number | null
    primaryEmail: string | null
    primaryEmailType: string | null
    secondaryEmail: string | null
    secondaryEmailType: string | null
    tertiaryEmail: string | null
    tertiaryEmailType: string | null
    contactId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactEmailMaxAggregateOutputType = {
    id: number | null
    primaryEmail: string | null
    primaryEmailType: string | null
    secondaryEmail: string | null
    secondaryEmailType: string | null
    tertiaryEmail: string | null
    tertiaryEmailType: string | null
    contactId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactEmailCountAggregateOutputType = {
    id: number
    primaryEmail: number
    primaryEmailType: number
    secondaryEmail: number
    secondaryEmailType: number
    tertiaryEmail: number
    tertiaryEmailType: number
    contactId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactEmailAvgAggregateInputType = {
    id?: true
    contactId?: true
  }

  export type ContactEmailSumAggregateInputType = {
    id?: true
    contactId?: true
  }

  export type ContactEmailMinAggregateInputType = {
    id?: true
    primaryEmail?: true
    primaryEmailType?: true
    secondaryEmail?: true
    secondaryEmailType?: true
    tertiaryEmail?: true
    tertiaryEmailType?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactEmailMaxAggregateInputType = {
    id?: true
    primaryEmail?: true
    primaryEmailType?: true
    secondaryEmail?: true
    secondaryEmailType?: true
    tertiaryEmail?: true
    tertiaryEmailType?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactEmailCountAggregateInputType = {
    id?: true
    primaryEmail?: true
    primaryEmailType?: true
    secondaryEmail?: true
    secondaryEmailType?: true
    tertiaryEmail?: true
    tertiaryEmailType?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactEmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactEmail to aggregate.
     */
    where?: ContactEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactEmails to fetch.
     */
    orderBy?: ContactEmailOrderByWithRelationInput | ContactEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactEmails
    **/
    _count?: true | ContactEmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactEmailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactEmailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactEmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactEmailMaxAggregateInputType
  }

  export type GetContactEmailAggregateType<T extends ContactEmailAggregateArgs> = {
        [P in keyof T & keyof AggregateContactEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactEmail[P]>
      : GetScalarType<T[P], AggregateContactEmail[P]>
  }




  export type ContactEmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactEmailWhereInput
    orderBy?: ContactEmailOrderByWithAggregationInput | ContactEmailOrderByWithAggregationInput[]
    by: ContactEmailScalarFieldEnum[] | ContactEmailScalarFieldEnum
    having?: ContactEmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactEmailCountAggregateInputType | true
    _avg?: ContactEmailAvgAggregateInputType
    _sum?: ContactEmailSumAggregateInputType
    _min?: ContactEmailMinAggregateInputType
    _max?: ContactEmailMaxAggregateInputType
  }

  export type ContactEmailGroupByOutputType = {
    id: number
    primaryEmail: string
    primaryEmailType: string
    secondaryEmail: string | null
    secondaryEmailType: string | null
    tertiaryEmail: string | null
    tertiaryEmailType: string | null
    contactId: number
    createdAt: Date
    updatedAt: Date | null
    _count: ContactEmailCountAggregateOutputType | null
    _avg: ContactEmailAvgAggregateOutputType | null
    _sum: ContactEmailSumAggregateOutputType | null
    _min: ContactEmailMinAggregateOutputType | null
    _max: ContactEmailMaxAggregateOutputType | null
  }

  type GetContactEmailGroupByPayload<T extends ContactEmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactEmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactEmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactEmailGroupByOutputType[P]>
            : GetScalarType<T[P], ContactEmailGroupByOutputType[P]>
        }
      >
    >


  export type ContactEmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    primaryEmail?: boolean
    primaryEmailType?: boolean
    secondaryEmail?: boolean
    secondaryEmailType?: boolean
    tertiaryEmail?: boolean
    tertiaryEmailType?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | UserContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactEmail"]>

  export type ContactEmailSelectScalar = {
    id?: boolean
    primaryEmail?: boolean
    primaryEmailType?: boolean
    secondaryEmail?: boolean
    secondaryEmailType?: boolean
    tertiaryEmail?: boolean
    tertiaryEmailType?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactEmailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | UserContactDefaultArgs<ExtArgs>
  }


  export type $ContactEmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactEmail"
    objects: {
      contact: Prisma.$UserContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      primaryEmail: string
      primaryEmailType: string
      secondaryEmail: string | null
      secondaryEmailType: string | null
      tertiaryEmail: string | null
      tertiaryEmailType: string | null
      contactId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["contactEmail"]>
    composites: {}
  }


  type ContactEmailGetPayload<S extends boolean | null | undefined | ContactEmailDefaultArgs> = $Result.GetResult<Prisma.$ContactEmailPayload, S>

  type ContactEmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactEmailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactEmailCountAggregateInputType | true
    }

  export interface ContactEmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactEmail'], meta: { name: 'ContactEmail' } }
    /**
     * Find zero or one ContactEmail that matches the filter.
     * @param {ContactEmailFindUniqueArgs} args - Arguments to find a ContactEmail
     * @example
     * // Get one ContactEmail
     * const contactEmail = await prisma.contactEmail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactEmailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactEmailFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactEmailClient<$Result.GetResult<Prisma.$ContactEmailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContactEmail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactEmailFindUniqueOrThrowArgs} args - Arguments to find a ContactEmail
     * @example
     * // Get one ContactEmail
     * const contactEmail = await prisma.contactEmail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactEmailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactEmailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactEmailClient<$Result.GetResult<Prisma.$ContactEmailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContactEmail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmailFindFirstArgs} args - Arguments to find a ContactEmail
     * @example
     * // Get one ContactEmail
     * const contactEmail = await prisma.contactEmail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactEmailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactEmailFindFirstArgs<ExtArgs>>
    ): Prisma__ContactEmailClient<$Result.GetResult<Prisma.$ContactEmailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContactEmail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmailFindFirstOrThrowArgs} args - Arguments to find a ContactEmail
     * @example
     * // Get one ContactEmail
     * const contactEmail = await prisma.contactEmail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactEmailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactEmailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactEmailClient<$Result.GetResult<Prisma.$ContactEmailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ContactEmails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactEmails
     * const contactEmails = await prisma.contactEmail.findMany()
     * 
     * // Get first 10 ContactEmails
     * const contactEmails = await prisma.contactEmail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactEmailWithIdOnly = await prisma.contactEmail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactEmailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactEmailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactEmailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContactEmail.
     * @param {ContactEmailCreateArgs} args - Arguments to create a ContactEmail.
     * @example
     * // Create one ContactEmail
     * const ContactEmail = await prisma.contactEmail.create({
     *   data: {
     *     // ... data to create a ContactEmail
     *   }
     * })
     * 
    **/
    create<T extends ContactEmailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactEmailCreateArgs<ExtArgs>>
    ): Prisma__ContactEmailClient<$Result.GetResult<Prisma.$ContactEmailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ContactEmails.
     *     @param {ContactEmailCreateManyArgs} args - Arguments to create many ContactEmails.
     *     @example
     *     // Create many ContactEmails
     *     const contactEmail = await prisma.contactEmail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactEmailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactEmailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactEmail.
     * @param {ContactEmailDeleteArgs} args - Arguments to delete one ContactEmail.
     * @example
     * // Delete one ContactEmail
     * const ContactEmail = await prisma.contactEmail.delete({
     *   where: {
     *     // ... filter to delete one ContactEmail
     *   }
     * })
     * 
    **/
    delete<T extends ContactEmailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactEmailDeleteArgs<ExtArgs>>
    ): Prisma__ContactEmailClient<$Result.GetResult<Prisma.$ContactEmailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContactEmail.
     * @param {ContactEmailUpdateArgs} args - Arguments to update one ContactEmail.
     * @example
     * // Update one ContactEmail
     * const contactEmail = await prisma.contactEmail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactEmailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactEmailUpdateArgs<ExtArgs>>
    ): Prisma__ContactEmailClient<$Result.GetResult<Prisma.$ContactEmailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ContactEmails.
     * @param {ContactEmailDeleteManyArgs} args - Arguments to filter ContactEmails to delete.
     * @example
     * // Delete a few ContactEmails
     * const { count } = await prisma.contactEmail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactEmailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactEmailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactEmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactEmails
     * const contactEmail = await prisma.contactEmail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactEmailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactEmailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactEmail.
     * @param {ContactEmailUpsertArgs} args - Arguments to update or create a ContactEmail.
     * @example
     * // Update or create a ContactEmail
     * const contactEmail = await prisma.contactEmail.upsert({
     *   create: {
     *     // ... data to create a ContactEmail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactEmail we want to update
     *   }
     * })
    **/
    upsert<T extends ContactEmailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactEmailUpsertArgs<ExtArgs>>
    ): Prisma__ContactEmailClient<$Result.GetResult<Prisma.$ContactEmailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ContactEmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmailCountArgs} args - Arguments to filter ContactEmails to count.
     * @example
     * // Count the number of ContactEmails
     * const count = await prisma.contactEmail.count({
     *   where: {
     *     // ... the filter for the ContactEmails we want to count
     *   }
     * })
    **/
    count<T extends ContactEmailCountArgs>(
      args?: Subset<T, ContactEmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactEmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactEmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactEmailAggregateArgs>(args: Subset<T, ContactEmailAggregateArgs>): Prisma.PrismaPromise<GetContactEmailAggregateType<T>>

    /**
     * Group by ContactEmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactEmailGroupByArgs} args - Group by arguments.
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
      T extends ContactEmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactEmailGroupByArgs['orderBy'] }
        : { orderBy?: ContactEmailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactEmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactEmail model
   */
  readonly fields: ContactEmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactEmail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactEmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contact<T extends UserContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserContactDefaultArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ContactEmail model
   */ 
  interface ContactEmailFieldRefs {
    readonly id: FieldRef<"ContactEmail", 'Int'>
    readonly primaryEmail: FieldRef<"ContactEmail", 'String'>
    readonly primaryEmailType: FieldRef<"ContactEmail", 'String'>
    readonly secondaryEmail: FieldRef<"ContactEmail", 'String'>
    readonly secondaryEmailType: FieldRef<"ContactEmail", 'String'>
    readonly tertiaryEmail: FieldRef<"ContactEmail", 'String'>
    readonly tertiaryEmailType: FieldRef<"ContactEmail", 'String'>
    readonly contactId: FieldRef<"ContactEmail", 'Int'>
    readonly createdAt: FieldRef<"ContactEmail", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactEmail", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ContactEmail findUnique
   */
  export type ContactEmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
    /**
     * Filter, which ContactEmail to fetch.
     */
    where: ContactEmailWhereUniqueInput
  }


  /**
   * ContactEmail findUniqueOrThrow
   */
  export type ContactEmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
    /**
     * Filter, which ContactEmail to fetch.
     */
    where: ContactEmailWhereUniqueInput
  }


  /**
   * ContactEmail findFirst
   */
  export type ContactEmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
    /**
     * Filter, which ContactEmail to fetch.
     */
    where?: ContactEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactEmails to fetch.
     */
    orderBy?: ContactEmailOrderByWithRelationInput | ContactEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactEmails.
     */
    cursor?: ContactEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactEmails.
     */
    distinct?: ContactEmailScalarFieldEnum | ContactEmailScalarFieldEnum[]
  }


  /**
   * ContactEmail findFirstOrThrow
   */
  export type ContactEmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
    /**
     * Filter, which ContactEmail to fetch.
     */
    where?: ContactEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactEmails to fetch.
     */
    orderBy?: ContactEmailOrderByWithRelationInput | ContactEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactEmails.
     */
    cursor?: ContactEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactEmails.
     */
    distinct?: ContactEmailScalarFieldEnum | ContactEmailScalarFieldEnum[]
  }


  /**
   * ContactEmail findMany
   */
  export type ContactEmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
    /**
     * Filter, which ContactEmails to fetch.
     */
    where?: ContactEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactEmails to fetch.
     */
    orderBy?: ContactEmailOrderByWithRelationInput | ContactEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactEmails.
     */
    cursor?: ContactEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactEmails.
     */
    skip?: number
    distinct?: ContactEmailScalarFieldEnum | ContactEmailScalarFieldEnum[]
  }


  /**
   * ContactEmail create
   */
  export type ContactEmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactEmail.
     */
    data: XOR<ContactEmailCreateInput, ContactEmailUncheckedCreateInput>
  }


  /**
   * ContactEmail createMany
   */
  export type ContactEmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactEmails.
     */
    data: ContactEmailCreateManyInput | ContactEmailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ContactEmail update
   */
  export type ContactEmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactEmail.
     */
    data: XOR<ContactEmailUpdateInput, ContactEmailUncheckedUpdateInput>
    /**
     * Choose, which ContactEmail to update.
     */
    where: ContactEmailWhereUniqueInput
  }


  /**
   * ContactEmail updateMany
   */
  export type ContactEmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactEmails.
     */
    data: XOR<ContactEmailUpdateManyMutationInput, ContactEmailUncheckedUpdateManyInput>
    /**
     * Filter which ContactEmails to update
     */
    where?: ContactEmailWhereInput
  }


  /**
   * ContactEmail upsert
   */
  export type ContactEmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactEmail to update in case it exists.
     */
    where: ContactEmailWhereUniqueInput
    /**
     * In case the ContactEmail found by the `where` argument doesn't exist, create a new ContactEmail with this data.
     */
    create: XOR<ContactEmailCreateInput, ContactEmailUncheckedCreateInput>
    /**
     * In case the ContactEmail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactEmailUpdateInput, ContactEmailUncheckedUpdateInput>
  }


  /**
   * ContactEmail delete
   */
  export type ContactEmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
    /**
     * Filter which ContactEmail to delete.
     */
    where: ContactEmailWhereUniqueInput
  }


  /**
   * ContactEmail deleteMany
   */
  export type ContactEmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactEmails to delete
     */
    where?: ContactEmailWhereInput
  }


  /**
   * ContactEmail without action
   */
  export type ContactEmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
  }



  /**
   * Model ContactPhone
   */

  export type AggregateContactPhone = {
    _count: ContactPhoneCountAggregateOutputType | null
    _avg: ContactPhoneAvgAggregateOutputType | null
    _sum: ContactPhoneSumAggregateOutputType | null
    _min: ContactPhoneMinAggregateOutputType | null
    _max: ContactPhoneMaxAggregateOutputType | null
  }

  export type ContactPhoneAvgAggregateOutputType = {
    id: number | null
    contactId: number | null
  }

  export type ContactPhoneSumAggregateOutputType = {
    id: number | null
    contactId: number | null
  }

  export type ContactPhoneMinAggregateOutputType = {
    id: number | null
    primaryPhone: string | null
    primaryPhoneType: string | null
    secondaryPhone: string | null
    secondaryPhoneType: string | null
    tertiaryPhone: string | null
    tertiaryPhoneType: string | null
    contactId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactPhoneMaxAggregateOutputType = {
    id: number | null
    primaryPhone: string | null
    primaryPhoneType: string | null
    secondaryPhone: string | null
    secondaryPhoneType: string | null
    tertiaryPhone: string | null
    tertiaryPhoneType: string | null
    contactId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactPhoneCountAggregateOutputType = {
    id: number
    primaryPhone: number
    primaryPhoneType: number
    secondaryPhone: number
    secondaryPhoneType: number
    tertiaryPhone: number
    tertiaryPhoneType: number
    contactId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactPhoneAvgAggregateInputType = {
    id?: true
    contactId?: true
  }

  export type ContactPhoneSumAggregateInputType = {
    id?: true
    contactId?: true
  }

  export type ContactPhoneMinAggregateInputType = {
    id?: true
    primaryPhone?: true
    primaryPhoneType?: true
    secondaryPhone?: true
    secondaryPhoneType?: true
    tertiaryPhone?: true
    tertiaryPhoneType?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactPhoneMaxAggregateInputType = {
    id?: true
    primaryPhone?: true
    primaryPhoneType?: true
    secondaryPhone?: true
    secondaryPhoneType?: true
    tertiaryPhone?: true
    tertiaryPhoneType?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactPhoneCountAggregateInputType = {
    id?: true
    primaryPhone?: true
    primaryPhoneType?: true
    secondaryPhone?: true
    secondaryPhoneType?: true
    tertiaryPhone?: true
    tertiaryPhoneType?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactPhoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPhone to aggregate.
     */
    where?: ContactPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPhones to fetch.
     */
    orderBy?: ContactPhoneOrderByWithRelationInput | ContactPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactPhones
    **/
    _count?: true | ContactPhoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactPhoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactPhoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactPhoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactPhoneMaxAggregateInputType
  }

  export type GetContactPhoneAggregateType<T extends ContactPhoneAggregateArgs> = {
        [P in keyof T & keyof AggregateContactPhone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactPhone[P]>
      : GetScalarType<T[P], AggregateContactPhone[P]>
  }




  export type ContactPhoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactPhoneWhereInput
    orderBy?: ContactPhoneOrderByWithAggregationInput | ContactPhoneOrderByWithAggregationInput[]
    by: ContactPhoneScalarFieldEnum[] | ContactPhoneScalarFieldEnum
    having?: ContactPhoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactPhoneCountAggregateInputType | true
    _avg?: ContactPhoneAvgAggregateInputType
    _sum?: ContactPhoneSumAggregateInputType
    _min?: ContactPhoneMinAggregateInputType
    _max?: ContactPhoneMaxAggregateInputType
  }

  export type ContactPhoneGroupByOutputType = {
    id: number
    primaryPhone: string
    primaryPhoneType: string
    secondaryPhone: string | null
    secondaryPhoneType: string | null
    tertiaryPhone: string | null
    tertiaryPhoneType: string | null
    contactId: number
    createdAt: Date
    updatedAt: Date | null
    _count: ContactPhoneCountAggregateOutputType | null
    _avg: ContactPhoneAvgAggregateOutputType | null
    _sum: ContactPhoneSumAggregateOutputType | null
    _min: ContactPhoneMinAggregateOutputType | null
    _max: ContactPhoneMaxAggregateOutputType | null
  }

  type GetContactPhoneGroupByPayload<T extends ContactPhoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactPhoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactPhoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactPhoneGroupByOutputType[P]>
            : GetScalarType<T[P], ContactPhoneGroupByOutputType[P]>
        }
      >
    >


  export type ContactPhoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    primaryPhone?: boolean
    primaryPhoneType?: boolean
    secondaryPhone?: boolean
    secondaryPhoneType?: boolean
    tertiaryPhone?: boolean
    tertiaryPhoneType?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | UserContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactPhone"]>

  export type ContactPhoneSelectScalar = {
    id?: boolean
    primaryPhone?: boolean
    primaryPhoneType?: boolean
    secondaryPhone?: boolean
    secondaryPhoneType?: boolean
    tertiaryPhone?: boolean
    tertiaryPhoneType?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactPhoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | UserContactDefaultArgs<ExtArgs>
  }


  export type $ContactPhonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactPhone"
    objects: {
      contact: Prisma.$UserContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      primaryPhone: string
      primaryPhoneType: string
      secondaryPhone: string | null
      secondaryPhoneType: string | null
      tertiaryPhone: string | null
      tertiaryPhoneType: string | null
      contactId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["contactPhone"]>
    composites: {}
  }


  type ContactPhoneGetPayload<S extends boolean | null | undefined | ContactPhoneDefaultArgs> = $Result.GetResult<Prisma.$ContactPhonePayload, S>

  type ContactPhoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactPhoneFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactPhoneCountAggregateInputType | true
    }

  export interface ContactPhoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactPhone'], meta: { name: 'ContactPhone' } }
    /**
     * Find zero or one ContactPhone that matches the filter.
     * @param {ContactPhoneFindUniqueArgs} args - Arguments to find a ContactPhone
     * @example
     * // Get one ContactPhone
     * const contactPhone = await prisma.contactPhone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactPhoneFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactPhoneFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactPhoneClient<$Result.GetResult<Prisma.$ContactPhonePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContactPhone that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactPhoneFindUniqueOrThrowArgs} args - Arguments to find a ContactPhone
     * @example
     * // Get one ContactPhone
     * const contactPhone = await prisma.contactPhone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactPhoneFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactPhoneFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactPhoneClient<$Result.GetResult<Prisma.$ContactPhonePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContactPhone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneFindFirstArgs} args - Arguments to find a ContactPhone
     * @example
     * // Get one ContactPhone
     * const contactPhone = await prisma.contactPhone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactPhoneFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactPhoneFindFirstArgs<ExtArgs>>
    ): Prisma__ContactPhoneClient<$Result.GetResult<Prisma.$ContactPhonePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContactPhone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneFindFirstOrThrowArgs} args - Arguments to find a ContactPhone
     * @example
     * // Get one ContactPhone
     * const contactPhone = await prisma.contactPhone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactPhoneFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactPhoneFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactPhoneClient<$Result.GetResult<Prisma.$ContactPhonePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ContactPhones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactPhones
     * const contactPhones = await prisma.contactPhone.findMany()
     * 
     * // Get first 10 ContactPhones
     * const contactPhones = await prisma.contactPhone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactPhoneWithIdOnly = await prisma.contactPhone.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactPhoneFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactPhoneFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPhonePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContactPhone.
     * @param {ContactPhoneCreateArgs} args - Arguments to create a ContactPhone.
     * @example
     * // Create one ContactPhone
     * const ContactPhone = await prisma.contactPhone.create({
     *   data: {
     *     // ... data to create a ContactPhone
     *   }
     * })
     * 
    **/
    create<T extends ContactPhoneCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactPhoneCreateArgs<ExtArgs>>
    ): Prisma__ContactPhoneClient<$Result.GetResult<Prisma.$ContactPhonePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ContactPhones.
     *     @param {ContactPhoneCreateManyArgs} args - Arguments to create many ContactPhones.
     *     @example
     *     // Create many ContactPhones
     *     const contactPhone = await prisma.contactPhone.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactPhoneCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactPhoneCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactPhone.
     * @param {ContactPhoneDeleteArgs} args - Arguments to delete one ContactPhone.
     * @example
     * // Delete one ContactPhone
     * const ContactPhone = await prisma.contactPhone.delete({
     *   where: {
     *     // ... filter to delete one ContactPhone
     *   }
     * })
     * 
    **/
    delete<T extends ContactPhoneDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactPhoneDeleteArgs<ExtArgs>>
    ): Prisma__ContactPhoneClient<$Result.GetResult<Prisma.$ContactPhonePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContactPhone.
     * @param {ContactPhoneUpdateArgs} args - Arguments to update one ContactPhone.
     * @example
     * // Update one ContactPhone
     * const contactPhone = await prisma.contactPhone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactPhoneUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactPhoneUpdateArgs<ExtArgs>>
    ): Prisma__ContactPhoneClient<$Result.GetResult<Prisma.$ContactPhonePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ContactPhones.
     * @param {ContactPhoneDeleteManyArgs} args - Arguments to filter ContactPhones to delete.
     * @example
     * // Delete a few ContactPhones
     * const { count } = await prisma.contactPhone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactPhoneDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactPhoneDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactPhones
     * const contactPhone = await prisma.contactPhone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactPhoneUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactPhoneUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactPhone.
     * @param {ContactPhoneUpsertArgs} args - Arguments to update or create a ContactPhone.
     * @example
     * // Update or create a ContactPhone
     * const contactPhone = await prisma.contactPhone.upsert({
     *   create: {
     *     // ... data to create a ContactPhone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactPhone we want to update
     *   }
     * })
    **/
    upsert<T extends ContactPhoneUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactPhoneUpsertArgs<ExtArgs>>
    ): Prisma__ContactPhoneClient<$Result.GetResult<Prisma.$ContactPhonePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ContactPhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneCountArgs} args - Arguments to filter ContactPhones to count.
     * @example
     * // Count the number of ContactPhones
     * const count = await prisma.contactPhone.count({
     *   where: {
     *     // ... the filter for the ContactPhones we want to count
     *   }
     * })
    **/
    count<T extends ContactPhoneCountArgs>(
      args?: Subset<T, ContactPhoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactPhoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactPhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactPhoneAggregateArgs>(args: Subset<T, ContactPhoneAggregateArgs>): Prisma.PrismaPromise<GetContactPhoneAggregateType<T>>

    /**
     * Group by ContactPhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPhoneGroupByArgs} args - Group by arguments.
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
      T extends ContactPhoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactPhoneGroupByArgs['orderBy'] }
        : { orderBy?: ContactPhoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactPhoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactPhoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactPhone model
   */
  readonly fields: ContactPhoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactPhone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactPhoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contact<T extends UserContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserContactDefaultArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ContactPhone model
   */ 
  interface ContactPhoneFieldRefs {
    readonly id: FieldRef<"ContactPhone", 'Int'>
    readonly primaryPhone: FieldRef<"ContactPhone", 'String'>
    readonly primaryPhoneType: FieldRef<"ContactPhone", 'String'>
    readonly secondaryPhone: FieldRef<"ContactPhone", 'String'>
    readonly secondaryPhoneType: FieldRef<"ContactPhone", 'String'>
    readonly tertiaryPhone: FieldRef<"ContactPhone", 'String'>
    readonly tertiaryPhoneType: FieldRef<"ContactPhone", 'String'>
    readonly contactId: FieldRef<"ContactPhone", 'Int'>
    readonly createdAt: FieldRef<"ContactPhone", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactPhone", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ContactPhone findUnique
   */
  export type ContactPhoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
    /**
     * Filter, which ContactPhone to fetch.
     */
    where: ContactPhoneWhereUniqueInput
  }


  /**
   * ContactPhone findUniqueOrThrow
   */
  export type ContactPhoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
    /**
     * Filter, which ContactPhone to fetch.
     */
    where: ContactPhoneWhereUniqueInput
  }


  /**
   * ContactPhone findFirst
   */
  export type ContactPhoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
    /**
     * Filter, which ContactPhone to fetch.
     */
    where?: ContactPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPhones to fetch.
     */
    orderBy?: ContactPhoneOrderByWithRelationInput | ContactPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPhones.
     */
    cursor?: ContactPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPhones.
     */
    distinct?: ContactPhoneScalarFieldEnum | ContactPhoneScalarFieldEnum[]
  }


  /**
   * ContactPhone findFirstOrThrow
   */
  export type ContactPhoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
    /**
     * Filter, which ContactPhone to fetch.
     */
    where?: ContactPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPhones to fetch.
     */
    orderBy?: ContactPhoneOrderByWithRelationInput | ContactPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPhones.
     */
    cursor?: ContactPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPhones.
     */
    distinct?: ContactPhoneScalarFieldEnum | ContactPhoneScalarFieldEnum[]
  }


  /**
   * ContactPhone findMany
   */
  export type ContactPhoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
    /**
     * Filter, which ContactPhones to fetch.
     */
    where?: ContactPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPhones to fetch.
     */
    orderBy?: ContactPhoneOrderByWithRelationInput | ContactPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactPhones.
     */
    cursor?: ContactPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPhones.
     */
    skip?: number
    distinct?: ContactPhoneScalarFieldEnum | ContactPhoneScalarFieldEnum[]
  }


  /**
   * ContactPhone create
   */
  export type ContactPhoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactPhone.
     */
    data: XOR<ContactPhoneCreateInput, ContactPhoneUncheckedCreateInput>
  }


  /**
   * ContactPhone createMany
   */
  export type ContactPhoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactPhones.
     */
    data: ContactPhoneCreateManyInput | ContactPhoneCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ContactPhone update
   */
  export type ContactPhoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactPhone.
     */
    data: XOR<ContactPhoneUpdateInput, ContactPhoneUncheckedUpdateInput>
    /**
     * Choose, which ContactPhone to update.
     */
    where: ContactPhoneWhereUniqueInput
  }


  /**
   * ContactPhone updateMany
   */
  export type ContactPhoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactPhones.
     */
    data: XOR<ContactPhoneUpdateManyMutationInput, ContactPhoneUncheckedUpdateManyInput>
    /**
     * Filter which ContactPhones to update
     */
    where?: ContactPhoneWhereInput
  }


  /**
   * ContactPhone upsert
   */
  export type ContactPhoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactPhone to update in case it exists.
     */
    where: ContactPhoneWhereUniqueInput
    /**
     * In case the ContactPhone found by the `where` argument doesn't exist, create a new ContactPhone with this data.
     */
    create: XOR<ContactPhoneCreateInput, ContactPhoneUncheckedCreateInput>
    /**
     * In case the ContactPhone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactPhoneUpdateInput, ContactPhoneUncheckedUpdateInput>
  }


  /**
   * ContactPhone delete
   */
  export type ContactPhoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
    /**
     * Filter which ContactPhone to delete.
     */
    where: ContactPhoneWhereUniqueInput
  }


  /**
   * ContactPhone deleteMany
   */
  export type ContactPhoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPhones to delete
     */
    where?: ContactPhoneWhereInput
  }


  /**
   * ContactPhone without action
   */
  export type ContactPhoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
  }



  /**
   * Model ContactWebsite
   */

  export type AggregateContactWebsite = {
    _count: ContactWebsiteCountAggregateOutputType | null
    _avg: ContactWebsiteAvgAggregateOutputType | null
    _sum: ContactWebsiteSumAggregateOutputType | null
    _min: ContactWebsiteMinAggregateOutputType | null
    _max: ContactWebsiteMaxAggregateOutputType | null
  }

  export type ContactWebsiteAvgAggregateOutputType = {
    id: number | null
    contactId: number | null
  }

  export type ContactWebsiteSumAggregateOutputType = {
    id: number | null
    contactId: number | null
  }

  export type ContactWebsiteMinAggregateOutputType = {
    id: number | null
    primaryUrl: string | null
    primaryUrlType: string | null
    secondaryUrl: string | null
    secondaryUrlType: string | null
    tertiaryUrl: string | null
    tertiaryUrlType: string | null
    contactId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactWebsiteMaxAggregateOutputType = {
    id: number | null
    primaryUrl: string | null
    primaryUrlType: string | null
    secondaryUrl: string | null
    secondaryUrlType: string | null
    tertiaryUrl: string | null
    tertiaryUrlType: string | null
    contactId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactWebsiteCountAggregateOutputType = {
    id: number
    primaryUrl: number
    primaryUrlType: number
    secondaryUrl: number
    secondaryUrlType: number
    tertiaryUrl: number
    tertiaryUrlType: number
    contactId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactWebsiteAvgAggregateInputType = {
    id?: true
    contactId?: true
  }

  export type ContactWebsiteSumAggregateInputType = {
    id?: true
    contactId?: true
  }

  export type ContactWebsiteMinAggregateInputType = {
    id?: true
    primaryUrl?: true
    primaryUrlType?: true
    secondaryUrl?: true
    secondaryUrlType?: true
    tertiaryUrl?: true
    tertiaryUrlType?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactWebsiteMaxAggregateInputType = {
    id?: true
    primaryUrl?: true
    primaryUrlType?: true
    secondaryUrl?: true
    secondaryUrlType?: true
    tertiaryUrl?: true
    tertiaryUrlType?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactWebsiteCountAggregateInputType = {
    id?: true
    primaryUrl?: true
    primaryUrlType?: true
    secondaryUrl?: true
    secondaryUrlType?: true
    tertiaryUrl?: true
    tertiaryUrlType?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactWebsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactWebsite to aggregate.
     */
    where?: ContactWebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactWebsites to fetch.
     */
    orderBy?: ContactWebsiteOrderByWithRelationInput | ContactWebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactWebsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactWebsites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactWebsites
    **/
    _count?: true | ContactWebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactWebsiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactWebsiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactWebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactWebsiteMaxAggregateInputType
  }

  export type GetContactWebsiteAggregateType<T extends ContactWebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateContactWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactWebsite[P]>
      : GetScalarType<T[P], AggregateContactWebsite[P]>
  }




  export type ContactWebsiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWebsiteWhereInput
    orderBy?: ContactWebsiteOrderByWithAggregationInput | ContactWebsiteOrderByWithAggregationInput[]
    by: ContactWebsiteScalarFieldEnum[] | ContactWebsiteScalarFieldEnum
    having?: ContactWebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactWebsiteCountAggregateInputType | true
    _avg?: ContactWebsiteAvgAggregateInputType
    _sum?: ContactWebsiteSumAggregateInputType
    _min?: ContactWebsiteMinAggregateInputType
    _max?: ContactWebsiteMaxAggregateInputType
  }

  export type ContactWebsiteGroupByOutputType = {
    id: number
    primaryUrl: string
    primaryUrlType: string
    secondaryUrl: string | null
    secondaryUrlType: string | null
    tertiaryUrl: string | null
    tertiaryUrlType: string | null
    contactId: number
    createdAt: Date
    updatedAt: Date | null
    _count: ContactWebsiteCountAggregateOutputType | null
    _avg: ContactWebsiteAvgAggregateOutputType | null
    _sum: ContactWebsiteSumAggregateOutputType | null
    _min: ContactWebsiteMinAggregateOutputType | null
    _max: ContactWebsiteMaxAggregateOutputType | null
  }

  type GetContactWebsiteGroupByPayload<T extends ContactWebsiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactWebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactWebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactWebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], ContactWebsiteGroupByOutputType[P]>
        }
      >
    >


  export type ContactWebsiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    primaryUrl?: boolean
    primaryUrlType?: boolean
    secondaryUrl?: boolean
    secondaryUrlType?: boolean
    tertiaryUrl?: boolean
    tertiaryUrlType?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | UserContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactWebsite"]>

  export type ContactWebsiteSelectScalar = {
    id?: boolean
    primaryUrl?: boolean
    primaryUrlType?: boolean
    secondaryUrl?: boolean
    secondaryUrlType?: boolean
    tertiaryUrl?: boolean
    tertiaryUrlType?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactWebsiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | UserContactDefaultArgs<ExtArgs>
  }


  export type $ContactWebsitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactWebsite"
    objects: {
      contact: Prisma.$UserContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      primaryUrl: string
      primaryUrlType: string
      secondaryUrl: string | null
      secondaryUrlType: string | null
      tertiaryUrl: string | null
      tertiaryUrlType: string | null
      contactId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["contactWebsite"]>
    composites: {}
  }


  type ContactWebsiteGetPayload<S extends boolean | null | undefined | ContactWebsiteDefaultArgs> = $Result.GetResult<Prisma.$ContactWebsitePayload, S>

  type ContactWebsiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactWebsiteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactWebsiteCountAggregateInputType | true
    }

  export interface ContactWebsiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactWebsite'], meta: { name: 'ContactWebsite' } }
    /**
     * Find zero or one ContactWebsite that matches the filter.
     * @param {ContactWebsiteFindUniqueArgs} args - Arguments to find a ContactWebsite
     * @example
     * // Get one ContactWebsite
     * const contactWebsite = await prisma.contactWebsite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactWebsiteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactWebsiteFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactWebsiteClient<$Result.GetResult<Prisma.$ContactWebsitePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContactWebsite that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactWebsiteFindUniqueOrThrowArgs} args - Arguments to find a ContactWebsite
     * @example
     * // Get one ContactWebsite
     * const contactWebsite = await prisma.contactWebsite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactWebsiteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactWebsiteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactWebsiteClient<$Result.GetResult<Prisma.$ContactWebsitePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContactWebsite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWebsiteFindFirstArgs} args - Arguments to find a ContactWebsite
     * @example
     * // Get one ContactWebsite
     * const contactWebsite = await prisma.contactWebsite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactWebsiteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactWebsiteFindFirstArgs<ExtArgs>>
    ): Prisma__ContactWebsiteClient<$Result.GetResult<Prisma.$ContactWebsitePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContactWebsite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWebsiteFindFirstOrThrowArgs} args - Arguments to find a ContactWebsite
     * @example
     * // Get one ContactWebsite
     * const contactWebsite = await prisma.contactWebsite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactWebsiteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactWebsiteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactWebsiteClient<$Result.GetResult<Prisma.$ContactWebsitePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ContactWebsites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWebsiteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactWebsites
     * const contactWebsites = await prisma.contactWebsite.findMany()
     * 
     * // Get first 10 ContactWebsites
     * const contactWebsites = await prisma.contactWebsite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWebsiteWithIdOnly = await prisma.contactWebsite.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactWebsiteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactWebsiteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactWebsitePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContactWebsite.
     * @param {ContactWebsiteCreateArgs} args - Arguments to create a ContactWebsite.
     * @example
     * // Create one ContactWebsite
     * const ContactWebsite = await prisma.contactWebsite.create({
     *   data: {
     *     // ... data to create a ContactWebsite
     *   }
     * })
     * 
    **/
    create<T extends ContactWebsiteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactWebsiteCreateArgs<ExtArgs>>
    ): Prisma__ContactWebsiteClient<$Result.GetResult<Prisma.$ContactWebsitePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ContactWebsites.
     *     @param {ContactWebsiteCreateManyArgs} args - Arguments to create many ContactWebsites.
     *     @example
     *     // Create many ContactWebsites
     *     const contactWebsite = await prisma.contactWebsite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactWebsiteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactWebsiteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactWebsite.
     * @param {ContactWebsiteDeleteArgs} args - Arguments to delete one ContactWebsite.
     * @example
     * // Delete one ContactWebsite
     * const ContactWebsite = await prisma.contactWebsite.delete({
     *   where: {
     *     // ... filter to delete one ContactWebsite
     *   }
     * })
     * 
    **/
    delete<T extends ContactWebsiteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactWebsiteDeleteArgs<ExtArgs>>
    ): Prisma__ContactWebsiteClient<$Result.GetResult<Prisma.$ContactWebsitePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContactWebsite.
     * @param {ContactWebsiteUpdateArgs} args - Arguments to update one ContactWebsite.
     * @example
     * // Update one ContactWebsite
     * const contactWebsite = await prisma.contactWebsite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactWebsiteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactWebsiteUpdateArgs<ExtArgs>>
    ): Prisma__ContactWebsiteClient<$Result.GetResult<Prisma.$ContactWebsitePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ContactWebsites.
     * @param {ContactWebsiteDeleteManyArgs} args - Arguments to filter ContactWebsites to delete.
     * @example
     * // Delete a few ContactWebsites
     * const { count } = await prisma.contactWebsite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactWebsiteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactWebsiteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactWebsites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactWebsites
     * const contactWebsite = await prisma.contactWebsite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactWebsiteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactWebsiteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactWebsite.
     * @param {ContactWebsiteUpsertArgs} args - Arguments to update or create a ContactWebsite.
     * @example
     * // Update or create a ContactWebsite
     * const contactWebsite = await prisma.contactWebsite.upsert({
     *   create: {
     *     // ... data to create a ContactWebsite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactWebsite we want to update
     *   }
     * })
    **/
    upsert<T extends ContactWebsiteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactWebsiteUpsertArgs<ExtArgs>>
    ): Prisma__ContactWebsiteClient<$Result.GetResult<Prisma.$ContactWebsitePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ContactWebsites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWebsiteCountArgs} args - Arguments to filter ContactWebsites to count.
     * @example
     * // Count the number of ContactWebsites
     * const count = await prisma.contactWebsite.count({
     *   where: {
     *     // ... the filter for the ContactWebsites we want to count
     *   }
     * })
    **/
    count<T extends ContactWebsiteCountArgs>(
      args?: Subset<T, ContactWebsiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactWebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactWebsite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactWebsiteAggregateArgs>(args: Subset<T, ContactWebsiteAggregateArgs>): Prisma.PrismaPromise<GetContactWebsiteAggregateType<T>>

    /**
     * Group by ContactWebsite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactWebsiteGroupByArgs} args - Group by arguments.
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
      T extends ContactWebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactWebsiteGroupByArgs['orderBy'] }
        : { orderBy?: ContactWebsiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactWebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactWebsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactWebsite model
   */
  readonly fields: ContactWebsiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactWebsite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactWebsiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contact<T extends UserContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserContactDefaultArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ContactWebsite model
   */ 
  interface ContactWebsiteFieldRefs {
    readonly id: FieldRef<"ContactWebsite", 'Int'>
    readonly primaryUrl: FieldRef<"ContactWebsite", 'String'>
    readonly primaryUrlType: FieldRef<"ContactWebsite", 'String'>
    readonly secondaryUrl: FieldRef<"ContactWebsite", 'String'>
    readonly secondaryUrlType: FieldRef<"ContactWebsite", 'String'>
    readonly tertiaryUrl: FieldRef<"ContactWebsite", 'String'>
    readonly tertiaryUrlType: FieldRef<"ContactWebsite", 'String'>
    readonly contactId: FieldRef<"ContactWebsite", 'Int'>
    readonly createdAt: FieldRef<"ContactWebsite", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactWebsite", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ContactWebsite findUnique
   */
  export type ContactWebsiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
    /**
     * Filter, which ContactWebsite to fetch.
     */
    where: ContactWebsiteWhereUniqueInput
  }


  /**
   * ContactWebsite findUniqueOrThrow
   */
  export type ContactWebsiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
    /**
     * Filter, which ContactWebsite to fetch.
     */
    where: ContactWebsiteWhereUniqueInput
  }


  /**
   * ContactWebsite findFirst
   */
  export type ContactWebsiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
    /**
     * Filter, which ContactWebsite to fetch.
     */
    where?: ContactWebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactWebsites to fetch.
     */
    orderBy?: ContactWebsiteOrderByWithRelationInput | ContactWebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactWebsites.
     */
    cursor?: ContactWebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactWebsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactWebsites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactWebsites.
     */
    distinct?: ContactWebsiteScalarFieldEnum | ContactWebsiteScalarFieldEnum[]
  }


  /**
   * ContactWebsite findFirstOrThrow
   */
  export type ContactWebsiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
    /**
     * Filter, which ContactWebsite to fetch.
     */
    where?: ContactWebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactWebsites to fetch.
     */
    orderBy?: ContactWebsiteOrderByWithRelationInput | ContactWebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactWebsites.
     */
    cursor?: ContactWebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactWebsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactWebsites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactWebsites.
     */
    distinct?: ContactWebsiteScalarFieldEnum | ContactWebsiteScalarFieldEnum[]
  }


  /**
   * ContactWebsite findMany
   */
  export type ContactWebsiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
    /**
     * Filter, which ContactWebsites to fetch.
     */
    where?: ContactWebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactWebsites to fetch.
     */
    orderBy?: ContactWebsiteOrderByWithRelationInput | ContactWebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactWebsites.
     */
    cursor?: ContactWebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactWebsites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactWebsites.
     */
    skip?: number
    distinct?: ContactWebsiteScalarFieldEnum | ContactWebsiteScalarFieldEnum[]
  }


  /**
   * ContactWebsite create
   */
  export type ContactWebsiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactWebsite.
     */
    data: XOR<ContactWebsiteCreateInput, ContactWebsiteUncheckedCreateInput>
  }


  /**
   * ContactWebsite createMany
   */
  export type ContactWebsiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactWebsites.
     */
    data: ContactWebsiteCreateManyInput | ContactWebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ContactWebsite update
   */
  export type ContactWebsiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactWebsite.
     */
    data: XOR<ContactWebsiteUpdateInput, ContactWebsiteUncheckedUpdateInput>
    /**
     * Choose, which ContactWebsite to update.
     */
    where: ContactWebsiteWhereUniqueInput
  }


  /**
   * ContactWebsite updateMany
   */
  export type ContactWebsiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactWebsites.
     */
    data: XOR<ContactWebsiteUpdateManyMutationInput, ContactWebsiteUncheckedUpdateManyInput>
    /**
     * Filter which ContactWebsites to update
     */
    where?: ContactWebsiteWhereInput
  }


  /**
   * ContactWebsite upsert
   */
  export type ContactWebsiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactWebsite to update in case it exists.
     */
    where: ContactWebsiteWhereUniqueInput
    /**
     * In case the ContactWebsite found by the `where` argument doesn't exist, create a new ContactWebsite with this data.
     */
    create: XOR<ContactWebsiteCreateInput, ContactWebsiteUncheckedCreateInput>
    /**
     * In case the ContactWebsite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactWebsiteUpdateInput, ContactWebsiteUncheckedUpdateInput>
  }


  /**
   * ContactWebsite delete
   */
  export type ContactWebsiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
    /**
     * Filter which ContactWebsite to delete.
     */
    where: ContactWebsiteWhereUniqueInput
  }


  /**
   * ContactWebsite deleteMany
   */
  export type ContactWebsiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactWebsites to delete
     */
    where?: ContactWebsiteWhereInput
  }


  /**
   * ContactWebsite without action
   */
  export type ContactWebsiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
  }



  /**
   * Model UserContact
   */

  export type AggregateUserContact = {
    _count: UserContactCountAggregateOutputType | null
    _avg: UserContactAvgAggregateOutputType | null
    _sum: UserContactSumAggregateOutputType | null
    _min: UserContactMinAggregateOutputType | null
    _max: UserContactMaxAggregateOutputType | null
  }

  export type UserContactAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserContactSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserContactMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserContactMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserContactCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserContactAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserContactSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserContactMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserContactMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserContactCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContact to aggregate.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserContacts
    **/
    _count?: true | UserContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserContactMaxAggregateInputType
  }

  export type GetUserContactAggregateType<T extends UserContactAggregateArgs> = {
        [P in keyof T & keyof AggregateUserContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserContact[P]>
      : GetScalarType<T[P], AggregateUserContact[P]>
  }




  export type UserContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContactWhereInput
    orderBy?: UserContactOrderByWithAggregationInput | UserContactOrderByWithAggregationInput[]
    by: UserContactScalarFieldEnum[] | UserContactScalarFieldEnum
    having?: UserContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserContactCountAggregateInputType | true
    _avg?: UserContactAvgAggregateInputType
    _sum?: UserContactSumAggregateInputType
    _min?: UserContactMinAggregateInputType
    _max?: UserContactMaxAggregateInputType
  }

  export type UserContactGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    updatedAt: Date | null
    _count: UserContactCountAggregateOutputType | null
    _avg: UserContactAvgAggregateOutputType | null
    _sum: UserContactSumAggregateOutputType | null
    _min: UserContactMinAggregateOutputType | null
    _max: UserContactMaxAggregateOutputType | null
  }

  type GetUserContactGroupByPayload<T extends UserContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserContactGroupByOutputType[P]>
            : GetScalarType<T[P], UserContactGroupByOutputType[P]>
        }
      >
    >


  export type UserContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean | UserContact$emailArgs<ExtArgs>
    phone?: boolean | UserContact$phoneArgs<ExtArgs>
    address?: boolean | UserContact$addressArgs<ExtArgs>
    website?: boolean | UserContact$websiteArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userContact"]>

  export type UserContactSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email?: boolean | UserContact$emailArgs<ExtArgs>
    phone?: boolean | UserContact$phoneArgs<ExtArgs>
    address?: boolean | UserContact$addressArgs<ExtArgs>
    website?: boolean | UserContact$websiteArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserContact"
    objects: {
      email: Prisma.$ContactEmailPayload<ExtArgs> | null
      phone: Prisma.$ContactPhonePayload<ExtArgs> | null
      address: Prisma.$ContactAddressPayload<ExtArgs> | null
      website: Prisma.$ContactWebsitePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["userContact"]>
    composites: {}
  }


  type UserContactGetPayload<S extends boolean | null | undefined | UserContactDefaultArgs> = $Result.GetResult<Prisma.$UserContactPayload, S>

  type UserContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserContactCountAggregateInputType | true
    }

  export interface UserContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserContact'], meta: { name: 'UserContact' } }
    /**
     * Find zero or one UserContact that matches the filter.
     * @param {UserContactFindUniqueArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserContactFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserContactFindUniqueArgs<ExtArgs>>
    ): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserContact that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserContactFindUniqueOrThrowArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserContactFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserContactFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactFindFirstArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserContactFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserContactFindFirstArgs<ExtArgs>>
    ): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactFindFirstOrThrowArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserContactFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserContactFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserContacts
     * const userContacts = await prisma.userContact.findMany()
     * 
     * // Get first 10 UserContacts
     * const userContacts = await prisma.userContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userContactWithIdOnly = await prisma.userContact.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserContactFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserContactFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserContact.
     * @param {UserContactCreateArgs} args - Arguments to create a UserContact.
     * @example
     * // Create one UserContact
     * const UserContact = await prisma.userContact.create({
     *   data: {
     *     // ... data to create a UserContact
     *   }
     * })
     * 
    **/
    create<T extends UserContactCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserContactCreateArgs<ExtArgs>>
    ): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserContacts.
     *     @param {UserContactCreateManyArgs} args - Arguments to create many UserContacts.
     *     @example
     *     // Create many UserContacts
     *     const userContact = await prisma.userContact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserContactCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserContactCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserContact.
     * @param {UserContactDeleteArgs} args - Arguments to delete one UserContact.
     * @example
     * // Delete one UserContact
     * const UserContact = await prisma.userContact.delete({
     *   where: {
     *     // ... filter to delete one UserContact
     *   }
     * })
     * 
    **/
    delete<T extends UserContactDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserContactDeleteArgs<ExtArgs>>
    ): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserContact.
     * @param {UserContactUpdateArgs} args - Arguments to update one UserContact.
     * @example
     * // Update one UserContact
     * const userContact = await prisma.userContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserContactUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserContactUpdateArgs<ExtArgs>>
    ): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserContacts.
     * @param {UserContactDeleteManyArgs} args - Arguments to filter UserContacts to delete.
     * @example
     * // Delete a few UserContacts
     * const { count } = await prisma.userContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserContactDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserContactDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserContacts
     * const userContact = await prisma.userContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserContactUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserContactUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserContact.
     * @param {UserContactUpsertArgs} args - Arguments to update or create a UserContact.
     * @example
     * // Update or create a UserContact
     * const userContact = await prisma.userContact.upsert({
     *   create: {
     *     // ... data to create a UserContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserContact we want to update
     *   }
     * })
    **/
    upsert<T extends UserContactUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserContactUpsertArgs<ExtArgs>>
    ): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactCountArgs} args - Arguments to filter UserContacts to count.
     * @example
     * // Count the number of UserContacts
     * const count = await prisma.userContact.count({
     *   where: {
     *     // ... the filter for the UserContacts we want to count
     *   }
     * })
    **/
    count<T extends UserContactCountArgs>(
      args?: Subset<T, UserContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserContactAggregateArgs>(args: Subset<T, UserContactAggregateArgs>): Prisma.PrismaPromise<GetUserContactAggregateType<T>>

    /**
     * Group by UserContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactGroupByArgs} args - Group by arguments.
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
      T extends UserContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserContactGroupByArgs['orderBy'] }
        : { orderBy?: UserContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserContact model
   */
  readonly fields: UserContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    email<T extends UserContact$emailArgs<ExtArgs> = {}>(args?: Subset<T, UserContact$emailArgs<ExtArgs>>): Prisma__ContactEmailClient<$Result.GetResult<Prisma.$ContactEmailPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    phone<T extends UserContact$phoneArgs<ExtArgs> = {}>(args?: Subset<T, UserContact$phoneArgs<ExtArgs>>): Prisma__ContactPhoneClient<$Result.GetResult<Prisma.$ContactPhonePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    address<T extends UserContact$addressArgs<ExtArgs> = {}>(args?: Subset<T, UserContact$addressArgs<ExtArgs>>): Prisma__ContactAddressClient<$Result.GetResult<Prisma.$ContactAddressPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    website<T extends UserContact$websiteArgs<ExtArgs> = {}>(args?: Subset<T, UserContact$websiteArgs<ExtArgs>>): Prisma__ContactWebsiteClient<$Result.GetResult<Prisma.$ContactWebsitePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserContact model
   */ 
  interface UserContactFieldRefs {
    readonly id: FieldRef<"UserContact", 'Int'>
    readonly userId: FieldRef<"UserContact", 'Int'>
    readonly createdAt: FieldRef<"UserContact", 'DateTime'>
    readonly updatedAt: FieldRef<"UserContact", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserContact findUnique
   */
  export type UserContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where: UserContactWhereUniqueInput
  }


  /**
   * UserContact findUniqueOrThrow
   */
  export type UserContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where: UserContactWhereUniqueInput
  }


  /**
   * UserContact findFirst
   */
  export type UserContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContacts.
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContacts.
     */
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }


  /**
   * UserContact findFirstOrThrow
   */
  export type UserContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContacts.
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContacts.
     */
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }


  /**
   * UserContact findMany
   */
  export type UserContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContacts to fetch.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserContacts.
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }


  /**
   * UserContact create
   */
  export type UserContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * The data needed to create a UserContact.
     */
    data: XOR<UserContactCreateInput, UserContactUncheckedCreateInput>
  }


  /**
   * UserContact createMany
   */
  export type UserContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserContacts.
     */
    data: UserContactCreateManyInput | UserContactCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserContact update
   */
  export type UserContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * The data needed to update a UserContact.
     */
    data: XOR<UserContactUpdateInput, UserContactUncheckedUpdateInput>
    /**
     * Choose, which UserContact to update.
     */
    where: UserContactWhereUniqueInput
  }


  /**
   * UserContact updateMany
   */
  export type UserContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserContacts.
     */
    data: XOR<UserContactUpdateManyMutationInput, UserContactUncheckedUpdateManyInput>
    /**
     * Filter which UserContacts to update
     */
    where?: UserContactWhereInput
  }


  /**
   * UserContact upsert
   */
  export type UserContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * The filter to search for the UserContact to update in case it exists.
     */
    where: UserContactWhereUniqueInput
    /**
     * In case the UserContact found by the `where` argument doesn't exist, create a new UserContact with this data.
     */
    create: XOR<UserContactCreateInput, UserContactUncheckedCreateInput>
    /**
     * In case the UserContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserContactUpdateInput, UserContactUncheckedUpdateInput>
  }


  /**
   * UserContact delete
   */
  export type UserContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter which UserContact to delete.
     */
    where: UserContactWhereUniqueInput
  }


  /**
   * UserContact deleteMany
   */
  export type UserContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContacts to delete
     */
    where?: UserContactWhereInput
  }


  /**
   * UserContact.email
   */
  export type UserContact$emailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactEmail
     */
    select?: ContactEmailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactEmailInclude<ExtArgs> | null
    where?: ContactEmailWhereInput
  }


  /**
   * UserContact.phone
   */
  export type UserContact$phoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPhone
     */
    select?: ContactPhoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactPhoneInclude<ExtArgs> | null
    where?: ContactPhoneWhereInput
  }


  /**
   * UserContact.address
   */
  export type UserContact$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactAddress
     */
    select?: ContactAddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactAddressInclude<ExtArgs> | null
    where?: ContactAddressWhereInput
  }


  /**
   * UserContact.website
   */
  export type UserContact$websiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactWebsite
     */
    select?: ContactWebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactWebsiteInclude<ExtArgs> | null
    where?: ContactWebsiteWhereInput
  }


  /**
   * UserContact without action
   */
  export type UserContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserContactInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Category$postsArgs<ExtArgs>
    pages?: boolean | Category$pagesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Category$postsArgs<ExtArgs>
    pages?: boolean | Category$pagesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      pages: Prisma.$PagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    pages<T extends Category$pagesArgs<ExtArgs> = {}>(args?: Subset<T, Category$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Category.pages
   */
  export type Category$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    cursor?: PageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date
    updatedAt: Date | null
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Tag$postsArgs<ExtArgs>
    pages?: boolean | Tag$pagesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Tag$postsArgs<ExtArgs>
    pages?: boolean | Tag$pagesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      pages: Prisma.$PagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }


  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends TagCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagCreateArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tags.
     *     @param {TagCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tag = await prisma.tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends TagDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagDeleteArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagUpdateArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends TagUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagUpsertArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends Tag$postsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    pages<T extends Tag$pagesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly description: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }


  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }


  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }


  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }


  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }


  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }


  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }


  /**
   * Tag.posts
   */
  export type Tag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Tag.pages
   */
  export type Tag$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    cursor?: PageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }


  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    description: 'description',
    token: 'token',
    prefix: 'prefix',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    suffix: 'suffix',
    preferredName: 'preferredName',
    gender: 'gender',
    birthDate: 'birthDate',
    local: 'local',
    timeZone: 'timeZone',
    lastLoginTime: 'lastLoginTime',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    accountRef: 'accountRef',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SubsiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    subsiteRef: 'subsiteRef',
    logoUrl: 'logoUrl',
    logoSvg: 'logoSvg',
    navConfig: 'navConfig',
    headerConfig: 'headerConfig',
    footerConfig: 'footerConfig',
    siteVisibility: 'siteVisibility',
    siteLanguage: 'siteLanguage',
    domainName: 'domainName',
    domainStatus: 'domainStatus',
    domainCreatedAt: 'domainCreatedAt',
    accountId: 'accountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubsiteScalarFieldEnum = (typeof SubsiteScalarFieldEnum)[keyof typeof SubsiteScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    overview: 'overview',
    content: 'content',
    slug: 'slug',
    coverImage: 'coverImage',
    status: 'status',
    published: 'published',
    publishedAt: 'publishedAt',
    deleted: 'deleted',
    authorId: 'authorId',
    subsiteId: 'subsiteId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    overview: 'overview',
    content: 'content',
    slug: 'slug',
    status: 'status',
    publishedAt: 'publishedAt',
    published: 'published',
    coverImage: 'coverImage',
    layoutTemplate: 'layoutTemplate',
    theme: 'theme',
    metaData: 'metaData',
    seoSettings: 'seoSettings',
    analyticsCodes: 'analyticsCodes',
    showOnNav: 'showOnNav',
    deleted: 'deleted',
    authorId: 'authorId',
    subsiteId: 'subsiteId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pageOrder: 'pageOrder',
    parentPageId: 'parentPageId'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    active: 'active',
    slug: 'slug',
    imageUrl: 'imageUrl',
    subsiteRef: 'subsiteRef',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const ContactAddressScalarFieldEnum: {
    id: 'id',
    line1: 'line1',
    line2: 'line2',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    country: 'country',
    contactId: 'contactId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactAddressScalarFieldEnum = (typeof ContactAddressScalarFieldEnum)[keyof typeof ContactAddressScalarFieldEnum]


  export const ContactEmailScalarFieldEnum: {
    id: 'id',
    primaryEmail: 'primaryEmail',
    primaryEmailType: 'primaryEmailType',
    secondaryEmail: 'secondaryEmail',
    secondaryEmailType: 'secondaryEmailType',
    tertiaryEmail: 'tertiaryEmail',
    tertiaryEmailType: 'tertiaryEmailType',
    contactId: 'contactId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactEmailScalarFieldEnum = (typeof ContactEmailScalarFieldEnum)[keyof typeof ContactEmailScalarFieldEnum]


  export const ContactPhoneScalarFieldEnum: {
    id: 'id',
    primaryPhone: 'primaryPhone',
    primaryPhoneType: 'primaryPhoneType',
    secondaryPhone: 'secondaryPhone',
    secondaryPhoneType: 'secondaryPhoneType',
    tertiaryPhone: 'tertiaryPhone',
    tertiaryPhoneType: 'tertiaryPhoneType',
    contactId: 'contactId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactPhoneScalarFieldEnum = (typeof ContactPhoneScalarFieldEnum)[keyof typeof ContactPhoneScalarFieldEnum]


  export const ContactWebsiteScalarFieldEnum: {
    id: 'id',
    primaryUrl: 'primaryUrl',
    primaryUrlType: 'primaryUrlType',
    secondaryUrl: 'secondaryUrl',
    secondaryUrlType: 'secondaryUrlType',
    tertiaryUrl: 'tertiaryUrl',
    tertiaryUrlType: 'tertiaryUrlType',
    contactId: 'contactId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactWebsiteScalarFieldEnum = (typeof ContactWebsiteScalarFieldEnum)[keyof typeof ContactWebsiteScalarFieldEnum]


  export const UserContactScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserContactScalarFieldEnum = (typeof UserContactScalarFieldEnum)[keyof typeof UserContactScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'ContentStatus'
   */
  export type EnumContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentStatus'>
    


  /**
   * Reference to a field of type 'ContentStatus[]'
   */
  export type ListEnumContentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    prefix?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    suffix?: StringNullableFilter<"User"> | string | null
    preferredName?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    local?: StringNullableFilter<"User"> | string | null
    timeZone?: StringNullableFilter<"User"> | string | null
    lastLoginTime?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    contact?: XOR<UserContactNullableRelationFilter, UserContactWhereInput> | null
    profile?: XOR<UserProfileNullableRelationFilter, UserProfileWhereInput> | null
    posts?: PostListRelationFilter
    pages?: PageListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    prefix?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    suffix?: SortOrderInput | SortOrder
    preferredName?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    local?: SortOrderInput | SortOrder
    timeZone?: SortOrderInput | SortOrder
    lastLoginTime?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    contact?: UserContactOrderByWithRelationInput
    profile?: UserProfileOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    pages?: PageOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    prefix?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    suffix?: StringNullableFilter<"User"> | string | null
    preferredName?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    local?: StringNullableFilter<"User"> | string | null
    timeZone?: StringNullableFilter<"User"> | string | null
    lastLoginTime?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    contact?: XOR<UserContactNullableRelationFilter, UserContactWhereInput> | null
    profile?: XOR<UserProfileNullableRelationFilter, UserProfileWhereInput> | null
    posts?: PostListRelationFilter
    pages?: PageListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    prefix?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    suffix?: SortOrderInput | SortOrder
    preferredName?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    local?: SortOrderInput | SortOrder
    timeZone?: SortOrderInput | SortOrder
    lastLoginTime?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    description?: StringNullableWithAggregatesFilter<"User"> | string | null
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    prefix?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    suffix?: StringNullableWithAggregatesFilter<"User"> | string | null
    preferredName?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    local?: StringNullableWithAggregatesFilter<"User"> | string | null
    timeZone?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLoginTime?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    name?: StringFilter<"Account"> | string
    accountRef?: StringFilter<"Account"> | string
    adminId?: IntFilter<"Account"> | number
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    admin?: XOR<UserRelationFilter, UserWhereInput>
    subsites?: SubsiteListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    accountRef?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    admin?: UserOrderByWithRelationInput
    subsites?: SubsiteOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    accountRef?: StringFilter<"Account"> | string
    adminId?: IntFilter<"Account"> | number
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    admin?: XOR<UserRelationFilter, UserWhereInput>
    subsites?: SubsiteListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    accountRef?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"Account"> | string
    accountRef?: StringWithAggregatesFilter<"Account"> | string
    adminId?: IntWithAggregatesFilter<"Account"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type SubsiteWhereInput = {
    AND?: SubsiteWhereInput | SubsiteWhereInput[]
    OR?: SubsiteWhereInput[]
    NOT?: SubsiteWhereInput | SubsiteWhereInput[]
    id?: IntFilter<"Subsite"> | number
    name?: StringFilter<"Subsite"> | string
    slug?: StringNullableFilter<"Subsite"> | string | null
    subsiteRef?: StringFilter<"Subsite"> | string
    logoUrl?: StringNullableFilter<"Subsite"> | string | null
    logoSvg?: StringNullableFilter<"Subsite"> | string | null
    navConfig?: StringNullableFilter<"Subsite"> | string | null
    headerConfig?: StringNullableFilter<"Subsite"> | string | null
    footerConfig?: StringNullableFilter<"Subsite"> | string | null
    siteVisibility?: StringNullableFilter<"Subsite"> | string | null
    siteLanguage?: StringNullableFilter<"Subsite"> | string | null
    domainName?: StringNullableFilter<"Subsite"> | string | null
    domainStatus?: StringNullableFilter<"Subsite"> | string | null
    domainCreatedAt?: DateTimeNullableFilter<"Subsite"> | Date | string | null
    accountId?: IntFilter<"Subsite"> | number
    createdAt?: DateTimeFilter<"Subsite"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Subsite"> | Date | string | null
    posts?: PostListRelationFilter
    pages?: PageListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type SubsiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    subsiteRef?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    logoSvg?: SortOrderInput | SortOrder
    navConfig?: SortOrderInput | SortOrder
    headerConfig?: SortOrderInput | SortOrder
    footerConfig?: SortOrderInput | SortOrder
    siteVisibility?: SortOrderInput | SortOrder
    siteLanguage?: SortOrderInput | SortOrder
    domainName?: SortOrderInput | SortOrder
    domainStatus?: SortOrderInput | SortOrder
    domainCreatedAt?: SortOrderInput | SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
    pages?: PageOrderByRelationAggregateInput
    account?: AccountOrderByWithRelationInput
  }

  export type SubsiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    accountId?: number
    AND?: SubsiteWhereInput | SubsiteWhereInput[]
    OR?: SubsiteWhereInput[]
    NOT?: SubsiteWhereInput | SubsiteWhereInput[]
    name?: StringFilter<"Subsite"> | string
    slug?: StringNullableFilter<"Subsite"> | string | null
    subsiteRef?: StringFilter<"Subsite"> | string
    logoUrl?: StringNullableFilter<"Subsite"> | string | null
    logoSvg?: StringNullableFilter<"Subsite"> | string | null
    navConfig?: StringNullableFilter<"Subsite"> | string | null
    headerConfig?: StringNullableFilter<"Subsite"> | string | null
    footerConfig?: StringNullableFilter<"Subsite"> | string | null
    siteVisibility?: StringNullableFilter<"Subsite"> | string | null
    siteLanguage?: StringNullableFilter<"Subsite"> | string | null
    domainName?: StringNullableFilter<"Subsite"> | string | null
    domainStatus?: StringNullableFilter<"Subsite"> | string | null
    domainCreatedAt?: DateTimeNullableFilter<"Subsite"> | Date | string | null
    createdAt?: DateTimeFilter<"Subsite"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Subsite"> | Date | string | null
    posts?: PostListRelationFilter
    pages?: PageListRelationFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }, "id" | "accountId">

  export type SubsiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    subsiteRef?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    logoSvg?: SortOrderInput | SortOrder
    navConfig?: SortOrderInput | SortOrder
    headerConfig?: SortOrderInput | SortOrder
    footerConfig?: SortOrderInput | SortOrder
    siteVisibility?: SortOrderInput | SortOrder
    siteLanguage?: SortOrderInput | SortOrder
    domainName?: SortOrderInput | SortOrder
    domainStatus?: SortOrderInput | SortOrder
    domainCreatedAt?: SortOrderInput | SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: SubsiteCountOrderByAggregateInput
    _avg?: SubsiteAvgOrderByAggregateInput
    _max?: SubsiteMaxOrderByAggregateInput
    _min?: SubsiteMinOrderByAggregateInput
    _sum?: SubsiteSumOrderByAggregateInput
  }

  export type SubsiteScalarWhereWithAggregatesInput = {
    AND?: SubsiteScalarWhereWithAggregatesInput | SubsiteScalarWhereWithAggregatesInput[]
    OR?: SubsiteScalarWhereWithAggregatesInput[]
    NOT?: SubsiteScalarWhereWithAggregatesInput | SubsiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subsite"> | number
    name?: StringWithAggregatesFilter<"Subsite"> | string
    slug?: StringNullableWithAggregatesFilter<"Subsite"> | string | null
    subsiteRef?: StringWithAggregatesFilter<"Subsite"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Subsite"> | string | null
    logoSvg?: StringNullableWithAggregatesFilter<"Subsite"> | string | null
    navConfig?: StringNullableWithAggregatesFilter<"Subsite"> | string | null
    headerConfig?: StringNullableWithAggregatesFilter<"Subsite"> | string | null
    footerConfig?: StringNullableWithAggregatesFilter<"Subsite"> | string | null
    siteVisibility?: StringNullableWithAggregatesFilter<"Subsite"> | string | null
    siteLanguage?: StringNullableWithAggregatesFilter<"Subsite"> | string | null
    domainName?: StringNullableWithAggregatesFilter<"Subsite"> | string | null
    domainStatus?: StringNullableWithAggregatesFilter<"Subsite"> | string | null
    domainCreatedAt?: DateTimeNullableWithAggregatesFilter<"Subsite"> | Date | string | null
    accountId?: IntWithAggregatesFilter<"Subsite"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subsite"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Subsite"> | Date | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    overview?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    slug?: StringNullableFilter<"Post"> | string | null
    coverImage?: StringNullableFilter<"Post"> | string | null
    status?: EnumContentStatusFilter<"Post"> | $Enums.ContentStatus
    published?: BoolFilter<"Post"> | boolean
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    deleted?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    subsiteId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    categories?: CategoryListRelationFilter
    tags?: TagListRelationFilter
    subsite?: XOR<SubsiteRelationFilter, SubsiteWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    content?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    status?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    subsite?: SubsiteOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    overview?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    slug?: StringNullableFilter<"Post"> | string | null
    coverImage?: StringNullableFilter<"Post"> | string | null
    status?: EnumContentStatusFilter<"Post"> | $Enums.ContentStatus
    published?: BoolFilter<"Post"> | boolean
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    deleted?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    subsiteId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    categories?: CategoryListRelationFilter
    tags?: TagListRelationFilter
    subsite?: XOR<SubsiteRelationFilter, SubsiteWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    content?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    status?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    overview?: StringWithAggregatesFilter<"Post"> | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Post"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Post"> | string | null
    status?: EnumContentStatusWithAggregatesFilter<"Post"> | $Enums.ContentStatus
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"Post"> | boolean
    authorId?: IntWithAggregatesFilter<"Post"> | number
    subsiteId?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: IntFilter<"Page"> | number
    title?: StringFilter<"Page"> | string
    overview?: StringFilter<"Page"> | string
    content?: StringNullableFilter<"Page"> | string | null
    slug?: StringNullableFilter<"Page"> | string | null
    status?: EnumContentStatusFilter<"Page"> | $Enums.ContentStatus
    publishedAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    published?: BoolFilter<"Page"> | boolean
    coverImage?: StringNullableFilter<"Page"> | string | null
    layoutTemplate?: StringNullableFilter<"Page"> | string | null
    theme?: StringNullableFilter<"Page"> | string | null
    metaData?: StringNullableFilter<"Page"> | string | null
    seoSettings?: StringNullableFilter<"Page"> | string | null
    analyticsCodes?: StringNullableFilter<"Page"> | string | null
    showOnNav?: BoolFilter<"Page"> | boolean
    deleted?: BoolFilter<"Page"> | boolean
    authorId?: IntFilter<"Page"> | number
    subsiteId?: IntFilter<"Page"> | number
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    pageOrder?: IntFilter<"Page"> | number
    parentPageId?: IntFilter<"Page"> | number
    author?: XOR<UserRelationFilter, UserWhereInput>
    categories?: CategoryListRelationFilter
    tags?: TagListRelationFilter
    subsite?: XOR<SubsiteRelationFilter, SubsiteWhereInput>
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    content?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    published?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    layoutTemplate?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    metaData?: SortOrderInput | SortOrder
    seoSettings?: SortOrderInput | SortOrder
    analyticsCodes?: SortOrderInput | SortOrder
    showOnNav?: SortOrder
    deleted?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    pageOrder?: SortOrder
    parentPageId?: SortOrder
    author?: UserOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    subsite?: SubsiteOrderByWithRelationInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    title?: StringFilter<"Page"> | string
    overview?: StringFilter<"Page"> | string
    content?: StringNullableFilter<"Page"> | string | null
    slug?: StringNullableFilter<"Page"> | string | null
    status?: EnumContentStatusFilter<"Page"> | $Enums.ContentStatus
    publishedAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    published?: BoolFilter<"Page"> | boolean
    coverImage?: StringNullableFilter<"Page"> | string | null
    layoutTemplate?: StringNullableFilter<"Page"> | string | null
    theme?: StringNullableFilter<"Page"> | string | null
    metaData?: StringNullableFilter<"Page"> | string | null
    seoSettings?: StringNullableFilter<"Page"> | string | null
    analyticsCodes?: StringNullableFilter<"Page"> | string | null
    showOnNav?: BoolFilter<"Page"> | boolean
    deleted?: BoolFilter<"Page"> | boolean
    authorId?: IntFilter<"Page"> | number
    subsiteId?: IntFilter<"Page"> | number
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    pageOrder?: IntFilter<"Page"> | number
    parentPageId?: IntFilter<"Page"> | number
    author?: XOR<UserRelationFilter, UserWhereInput>
    categories?: CategoryListRelationFilter
    tags?: TagListRelationFilter
    subsite?: XOR<SubsiteRelationFilter, SubsiteWhereInput>
  }, "id">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    content?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    published?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    layoutTemplate?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    metaData?: SortOrderInput | SortOrder
    seoSettings?: SortOrderInput | SortOrder
    analyticsCodes?: SortOrderInput | SortOrder
    showOnNav?: SortOrder
    deleted?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    pageOrder?: SortOrder
    parentPageId?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _avg?: PageAvgOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
    _sum?: PageSumOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Page"> | number
    title?: StringWithAggregatesFilter<"Page"> | string
    overview?: StringWithAggregatesFilter<"Page"> | string
    content?: StringNullableWithAggregatesFilter<"Page"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Page"> | string | null
    status?: EnumContentStatusWithAggregatesFilter<"Page"> | $Enums.ContentStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Page"> | Date | string | null
    published?: BoolWithAggregatesFilter<"Page"> | boolean
    coverImage?: StringNullableWithAggregatesFilter<"Page"> | string | null
    layoutTemplate?: StringNullableWithAggregatesFilter<"Page"> | string | null
    theme?: StringNullableWithAggregatesFilter<"Page"> | string | null
    metaData?: StringNullableWithAggregatesFilter<"Page"> | string | null
    seoSettings?: StringNullableWithAggregatesFilter<"Page"> | string | null
    analyticsCodes?: StringNullableWithAggregatesFilter<"Page"> | string | null
    showOnNav?: BoolWithAggregatesFilter<"Page"> | boolean
    deleted?: BoolWithAggregatesFilter<"Page"> | boolean
    authorId?: IntWithAggregatesFilter<"Page"> | number
    subsiteId?: IntWithAggregatesFilter<"Page"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Page"> | Date | string | null
    pageOrder?: IntWithAggregatesFilter<"Page"> | number
    parentPageId?: IntWithAggregatesFilter<"Page"> | number
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    bio?: StringNullableFilter<"UserProfile"> | string | null
    active?: BoolFilter<"UserProfile"> | boolean
    slug?: StringNullableFilter<"UserProfile"> | string | null
    imageUrl?: StringNullableFilter<"UserProfile"> | string | null
    subsiteRef?: StringFilter<"UserProfile"> | string
    userId?: IntFilter<"UserProfile"> | number
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrderInput | SortOrder
    active?: SortOrder
    slug?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    subsiteRef?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    bio?: StringNullableFilter<"UserProfile"> | string | null
    active?: BoolFilter<"UserProfile"> | boolean
    slug?: StringNullableFilter<"UserProfile"> | string | null
    imageUrl?: StringNullableFilter<"UserProfile"> | string | null
    subsiteRef?: StringFilter<"UserProfile"> | string
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrderInput | SortOrder
    active?: SortOrder
    slug?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    subsiteRef?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfile"> | number
    bio?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    active?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    slug?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    subsiteRef?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: IntWithAggregatesFilter<"UserProfile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
  }

  export type ContactAddressWhereInput = {
    AND?: ContactAddressWhereInput | ContactAddressWhereInput[]
    OR?: ContactAddressWhereInput[]
    NOT?: ContactAddressWhereInput | ContactAddressWhereInput[]
    id?: IntFilter<"ContactAddress"> | number
    line1?: StringFilter<"ContactAddress"> | string
    line2?: StringNullableFilter<"ContactAddress"> | string | null
    city?: StringFilter<"ContactAddress"> | string
    state?: StringFilter<"ContactAddress"> | string
    postalCode?: StringFilter<"ContactAddress"> | string
    country?: StringFilter<"ContactAddress"> | string
    contactId?: IntFilter<"ContactAddress"> | number
    createdAt?: DateTimeFilter<"ContactAddress"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ContactAddress"> | Date | string | null
    contact?: XOR<UserContactRelationFilter, UserContactWhereInput>
  }

  export type ContactAddressOrderByWithRelationInput = {
    id?: SortOrder
    line1?: SortOrder
    line2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    contact?: UserContactOrderByWithRelationInput
  }

  export type ContactAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contactId?: number
    AND?: ContactAddressWhereInput | ContactAddressWhereInput[]
    OR?: ContactAddressWhereInput[]
    NOT?: ContactAddressWhereInput | ContactAddressWhereInput[]
    line1?: StringFilter<"ContactAddress"> | string
    line2?: StringNullableFilter<"ContactAddress"> | string | null
    city?: StringFilter<"ContactAddress"> | string
    state?: StringFilter<"ContactAddress"> | string
    postalCode?: StringFilter<"ContactAddress"> | string
    country?: StringFilter<"ContactAddress"> | string
    createdAt?: DateTimeFilter<"ContactAddress"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ContactAddress"> | Date | string | null
    contact?: XOR<UserContactRelationFilter, UserContactWhereInput>
  }, "id" | "contactId">

  export type ContactAddressOrderByWithAggregationInput = {
    id?: SortOrder
    line1?: SortOrder
    line2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ContactAddressCountOrderByAggregateInput
    _avg?: ContactAddressAvgOrderByAggregateInput
    _max?: ContactAddressMaxOrderByAggregateInput
    _min?: ContactAddressMinOrderByAggregateInput
    _sum?: ContactAddressSumOrderByAggregateInput
  }

  export type ContactAddressScalarWhereWithAggregatesInput = {
    AND?: ContactAddressScalarWhereWithAggregatesInput | ContactAddressScalarWhereWithAggregatesInput[]
    OR?: ContactAddressScalarWhereWithAggregatesInput[]
    NOT?: ContactAddressScalarWhereWithAggregatesInput | ContactAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactAddress"> | number
    line1?: StringWithAggregatesFilter<"ContactAddress"> | string
    line2?: StringNullableWithAggregatesFilter<"ContactAddress"> | string | null
    city?: StringWithAggregatesFilter<"ContactAddress"> | string
    state?: StringWithAggregatesFilter<"ContactAddress"> | string
    postalCode?: StringWithAggregatesFilter<"ContactAddress"> | string
    country?: StringWithAggregatesFilter<"ContactAddress"> | string
    contactId?: IntWithAggregatesFilter<"ContactAddress"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContactAddress"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ContactAddress"> | Date | string | null
  }

  export type ContactEmailWhereInput = {
    AND?: ContactEmailWhereInput | ContactEmailWhereInput[]
    OR?: ContactEmailWhereInput[]
    NOT?: ContactEmailWhereInput | ContactEmailWhereInput[]
    id?: IntFilter<"ContactEmail"> | number
    primaryEmail?: StringFilter<"ContactEmail"> | string
    primaryEmailType?: StringFilter<"ContactEmail"> | string
    secondaryEmail?: StringNullableFilter<"ContactEmail"> | string | null
    secondaryEmailType?: StringNullableFilter<"ContactEmail"> | string | null
    tertiaryEmail?: StringNullableFilter<"ContactEmail"> | string | null
    tertiaryEmailType?: StringNullableFilter<"ContactEmail"> | string | null
    contactId?: IntFilter<"ContactEmail"> | number
    createdAt?: DateTimeFilter<"ContactEmail"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ContactEmail"> | Date | string | null
    contact?: XOR<UserContactRelationFilter, UserContactWhereInput>
  }

  export type ContactEmailOrderByWithRelationInput = {
    id?: SortOrder
    primaryEmail?: SortOrder
    primaryEmailType?: SortOrder
    secondaryEmail?: SortOrderInput | SortOrder
    secondaryEmailType?: SortOrderInput | SortOrder
    tertiaryEmail?: SortOrderInput | SortOrder
    tertiaryEmailType?: SortOrderInput | SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    contact?: UserContactOrderByWithRelationInput
  }

  export type ContactEmailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contactId?: number
    AND?: ContactEmailWhereInput | ContactEmailWhereInput[]
    OR?: ContactEmailWhereInput[]
    NOT?: ContactEmailWhereInput | ContactEmailWhereInput[]
    primaryEmail?: StringFilter<"ContactEmail"> | string
    primaryEmailType?: StringFilter<"ContactEmail"> | string
    secondaryEmail?: StringNullableFilter<"ContactEmail"> | string | null
    secondaryEmailType?: StringNullableFilter<"ContactEmail"> | string | null
    tertiaryEmail?: StringNullableFilter<"ContactEmail"> | string | null
    tertiaryEmailType?: StringNullableFilter<"ContactEmail"> | string | null
    createdAt?: DateTimeFilter<"ContactEmail"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ContactEmail"> | Date | string | null
    contact?: XOR<UserContactRelationFilter, UserContactWhereInput>
  }, "id" | "contactId">

  export type ContactEmailOrderByWithAggregationInput = {
    id?: SortOrder
    primaryEmail?: SortOrder
    primaryEmailType?: SortOrder
    secondaryEmail?: SortOrderInput | SortOrder
    secondaryEmailType?: SortOrderInput | SortOrder
    tertiaryEmail?: SortOrderInput | SortOrder
    tertiaryEmailType?: SortOrderInput | SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ContactEmailCountOrderByAggregateInput
    _avg?: ContactEmailAvgOrderByAggregateInput
    _max?: ContactEmailMaxOrderByAggregateInput
    _min?: ContactEmailMinOrderByAggregateInput
    _sum?: ContactEmailSumOrderByAggregateInput
  }

  export type ContactEmailScalarWhereWithAggregatesInput = {
    AND?: ContactEmailScalarWhereWithAggregatesInput | ContactEmailScalarWhereWithAggregatesInput[]
    OR?: ContactEmailScalarWhereWithAggregatesInput[]
    NOT?: ContactEmailScalarWhereWithAggregatesInput | ContactEmailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactEmail"> | number
    primaryEmail?: StringWithAggregatesFilter<"ContactEmail"> | string
    primaryEmailType?: StringWithAggregatesFilter<"ContactEmail"> | string
    secondaryEmail?: StringNullableWithAggregatesFilter<"ContactEmail"> | string | null
    secondaryEmailType?: StringNullableWithAggregatesFilter<"ContactEmail"> | string | null
    tertiaryEmail?: StringNullableWithAggregatesFilter<"ContactEmail"> | string | null
    tertiaryEmailType?: StringNullableWithAggregatesFilter<"ContactEmail"> | string | null
    contactId?: IntWithAggregatesFilter<"ContactEmail"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContactEmail"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ContactEmail"> | Date | string | null
  }

  export type ContactPhoneWhereInput = {
    AND?: ContactPhoneWhereInput | ContactPhoneWhereInput[]
    OR?: ContactPhoneWhereInput[]
    NOT?: ContactPhoneWhereInput | ContactPhoneWhereInput[]
    id?: IntFilter<"ContactPhone"> | number
    primaryPhone?: StringFilter<"ContactPhone"> | string
    primaryPhoneType?: StringFilter<"ContactPhone"> | string
    secondaryPhone?: StringNullableFilter<"ContactPhone"> | string | null
    secondaryPhoneType?: StringNullableFilter<"ContactPhone"> | string | null
    tertiaryPhone?: StringNullableFilter<"ContactPhone"> | string | null
    tertiaryPhoneType?: StringNullableFilter<"ContactPhone"> | string | null
    contactId?: IntFilter<"ContactPhone"> | number
    createdAt?: DateTimeFilter<"ContactPhone"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ContactPhone"> | Date | string | null
    contact?: XOR<UserContactRelationFilter, UserContactWhereInput>
  }

  export type ContactPhoneOrderByWithRelationInput = {
    id?: SortOrder
    primaryPhone?: SortOrder
    primaryPhoneType?: SortOrder
    secondaryPhone?: SortOrderInput | SortOrder
    secondaryPhoneType?: SortOrderInput | SortOrder
    tertiaryPhone?: SortOrderInput | SortOrder
    tertiaryPhoneType?: SortOrderInput | SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    contact?: UserContactOrderByWithRelationInput
  }

  export type ContactPhoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contactId?: number
    AND?: ContactPhoneWhereInput | ContactPhoneWhereInput[]
    OR?: ContactPhoneWhereInput[]
    NOT?: ContactPhoneWhereInput | ContactPhoneWhereInput[]
    primaryPhone?: StringFilter<"ContactPhone"> | string
    primaryPhoneType?: StringFilter<"ContactPhone"> | string
    secondaryPhone?: StringNullableFilter<"ContactPhone"> | string | null
    secondaryPhoneType?: StringNullableFilter<"ContactPhone"> | string | null
    tertiaryPhone?: StringNullableFilter<"ContactPhone"> | string | null
    tertiaryPhoneType?: StringNullableFilter<"ContactPhone"> | string | null
    createdAt?: DateTimeFilter<"ContactPhone"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ContactPhone"> | Date | string | null
    contact?: XOR<UserContactRelationFilter, UserContactWhereInput>
  }, "id" | "contactId">

  export type ContactPhoneOrderByWithAggregationInput = {
    id?: SortOrder
    primaryPhone?: SortOrder
    primaryPhoneType?: SortOrder
    secondaryPhone?: SortOrderInput | SortOrder
    secondaryPhoneType?: SortOrderInput | SortOrder
    tertiaryPhone?: SortOrderInput | SortOrder
    tertiaryPhoneType?: SortOrderInput | SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ContactPhoneCountOrderByAggregateInput
    _avg?: ContactPhoneAvgOrderByAggregateInput
    _max?: ContactPhoneMaxOrderByAggregateInput
    _min?: ContactPhoneMinOrderByAggregateInput
    _sum?: ContactPhoneSumOrderByAggregateInput
  }

  export type ContactPhoneScalarWhereWithAggregatesInput = {
    AND?: ContactPhoneScalarWhereWithAggregatesInput | ContactPhoneScalarWhereWithAggregatesInput[]
    OR?: ContactPhoneScalarWhereWithAggregatesInput[]
    NOT?: ContactPhoneScalarWhereWithAggregatesInput | ContactPhoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactPhone"> | number
    primaryPhone?: StringWithAggregatesFilter<"ContactPhone"> | string
    primaryPhoneType?: StringWithAggregatesFilter<"ContactPhone"> | string
    secondaryPhone?: StringNullableWithAggregatesFilter<"ContactPhone"> | string | null
    secondaryPhoneType?: StringNullableWithAggregatesFilter<"ContactPhone"> | string | null
    tertiaryPhone?: StringNullableWithAggregatesFilter<"ContactPhone"> | string | null
    tertiaryPhoneType?: StringNullableWithAggregatesFilter<"ContactPhone"> | string | null
    contactId?: IntWithAggregatesFilter<"ContactPhone"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContactPhone"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ContactPhone"> | Date | string | null
  }

  export type ContactWebsiteWhereInput = {
    AND?: ContactWebsiteWhereInput | ContactWebsiteWhereInput[]
    OR?: ContactWebsiteWhereInput[]
    NOT?: ContactWebsiteWhereInput | ContactWebsiteWhereInput[]
    id?: IntFilter<"ContactWebsite"> | number
    primaryUrl?: StringFilter<"ContactWebsite"> | string
    primaryUrlType?: StringFilter<"ContactWebsite"> | string
    secondaryUrl?: StringNullableFilter<"ContactWebsite"> | string | null
    secondaryUrlType?: StringNullableFilter<"ContactWebsite"> | string | null
    tertiaryUrl?: StringNullableFilter<"ContactWebsite"> | string | null
    tertiaryUrlType?: StringNullableFilter<"ContactWebsite"> | string | null
    contactId?: IntFilter<"ContactWebsite"> | number
    createdAt?: DateTimeFilter<"ContactWebsite"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ContactWebsite"> | Date | string | null
    contact?: XOR<UserContactRelationFilter, UserContactWhereInput>
  }

  export type ContactWebsiteOrderByWithRelationInput = {
    id?: SortOrder
    primaryUrl?: SortOrder
    primaryUrlType?: SortOrder
    secondaryUrl?: SortOrderInput | SortOrder
    secondaryUrlType?: SortOrderInput | SortOrder
    tertiaryUrl?: SortOrderInput | SortOrder
    tertiaryUrlType?: SortOrderInput | SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    contact?: UserContactOrderByWithRelationInput
  }

  export type ContactWebsiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contactId?: number
    AND?: ContactWebsiteWhereInput | ContactWebsiteWhereInput[]
    OR?: ContactWebsiteWhereInput[]
    NOT?: ContactWebsiteWhereInput | ContactWebsiteWhereInput[]
    primaryUrl?: StringFilter<"ContactWebsite"> | string
    primaryUrlType?: StringFilter<"ContactWebsite"> | string
    secondaryUrl?: StringNullableFilter<"ContactWebsite"> | string | null
    secondaryUrlType?: StringNullableFilter<"ContactWebsite"> | string | null
    tertiaryUrl?: StringNullableFilter<"ContactWebsite"> | string | null
    tertiaryUrlType?: StringNullableFilter<"ContactWebsite"> | string | null
    createdAt?: DateTimeFilter<"ContactWebsite"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ContactWebsite"> | Date | string | null
    contact?: XOR<UserContactRelationFilter, UserContactWhereInput>
  }, "id" | "contactId">

  export type ContactWebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    primaryUrl?: SortOrder
    primaryUrlType?: SortOrder
    secondaryUrl?: SortOrderInput | SortOrder
    secondaryUrlType?: SortOrderInput | SortOrder
    tertiaryUrl?: SortOrderInput | SortOrder
    tertiaryUrlType?: SortOrderInput | SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ContactWebsiteCountOrderByAggregateInput
    _avg?: ContactWebsiteAvgOrderByAggregateInput
    _max?: ContactWebsiteMaxOrderByAggregateInput
    _min?: ContactWebsiteMinOrderByAggregateInput
    _sum?: ContactWebsiteSumOrderByAggregateInput
  }

  export type ContactWebsiteScalarWhereWithAggregatesInput = {
    AND?: ContactWebsiteScalarWhereWithAggregatesInput | ContactWebsiteScalarWhereWithAggregatesInput[]
    OR?: ContactWebsiteScalarWhereWithAggregatesInput[]
    NOT?: ContactWebsiteScalarWhereWithAggregatesInput | ContactWebsiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactWebsite"> | number
    primaryUrl?: StringWithAggregatesFilter<"ContactWebsite"> | string
    primaryUrlType?: StringWithAggregatesFilter<"ContactWebsite"> | string
    secondaryUrl?: StringNullableWithAggregatesFilter<"ContactWebsite"> | string | null
    secondaryUrlType?: StringNullableWithAggregatesFilter<"ContactWebsite"> | string | null
    tertiaryUrl?: StringNullableWithAggregatesFilter<"ContactWebsite"> | string | null
    tertiaryUrlType?: StringNullableWithAggregatesFilter<"ContactWebsite"> | string | null
    contactId?: IntWithAggregatesFilter<"ContactWebsite"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContactWebsite"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ContactWebsite"> | Date | string | null
  }

  export type UserContactWhereInput = {
    AND?: UserContactWhereInput | UserContactWhereInput[]
    OR?: UserContactWhereInput[]
    NOT?: UserContactWhereInput | UserContactWhereInput[]
    id?: IntFilter<"UserContact"> | number
    userId?: IntFilter<"UserContact"> | number
    createdAt?: DateTimeFilter<"UserContact"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserContact"> | Date | string | null
    email?: XOR<ContactEmailNullableRelationFilter, ContactEmailWhereInput> | null
    phone?: XOR<ContactPhoneNullableRelationFilter, ContactPhoneWhereInput> | null
    address?: XOR<ContactAddressNullableRelationFilter, ContactAddressWhereInput> | null
    website?: XOR<ContactWebsiteNullableRelationFilter, ContactWebsiteWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserContactOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    email?: ContactEmailOrderByWithRelationInput
    phone?: ContactPhoneOrderByWithRelationInput
    address?: ContactAddressOrderByWithRelationInput
    website?: ContactWebsiteOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserContactWhereInput | UserContactWhereInput[]
    OR?: UserContactWhereInput[]
    NOT?: UserContactWhereInput | UserContactWhereInput[]
    createdAt?: DateTimeFilter<"UserContact"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserContact"> | Date | string | null
    email?: XOR<ContactEmailNullableRelationFilter, ContactEmailWhereInput> | null
    phone?: XOR<ContactPhoneNullableRelationFilter, ContactPhoneWhereInput> | null
    address?: XOR<ContactAddressNullableRelationFilter, ContactAddressWhereInput> | null
    website?: XOR<ContactWebsiteNullableRelationFilter, ContactWebsiteWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserContactOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserContactCountOrderByAggregateInput
    _avg?: UserContactAvgOrderByAggregateInput
    _max?: UserContactMaxOrderByAggregateInput
    _min?: UserContactMinOrderByAggregateInput
    _sum?: UserContactSumOrderByAggregateInput
  }

  export type UserContactScalarWhereWithAggregatesInput = {
    AND?: UserContactScalarWhereWithAggregatesInput | UserContactScalarWhereWithAggregatesInput[]
    OR?: UserContactScalarWhereWithAggregatesInput[]
    NOT?: UserContactScalarWhereWithAggregatesInput | UserContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserContact"> | number
    userId?: IntWithAggregatesFilter<"UserContact"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserContact"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserContact"> | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    posts?: PostListRelationFilter
    pages?: PageListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
    pages?: PageOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    posts?: PostListRelationFilter
    pages?: PageListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    description?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Tag"> | Date | string | null
    posts?: PostListRelationFilter
    pages?: PageListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
    pages?: PageOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    description?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Tag"> | Date | string | null
    posts?: PostListRelationFilter
    pages?: PageListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
    description?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Tag"> | Date | string | null
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact?: UserContactCreateNestedOneWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    pages?: PageCreateNestedManyWithoutAuthorInput
    accounts?: AccountCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact?: UserContactUncheckedCreateNestedOneWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    pages?: PageUncheckedCreateNestedManyWithoutAuthorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUpdateOneWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    pages?: PageUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUncheckedUpdateOneWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    pages?: PageUncheckedUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    name: string
    accountRef?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    admin: UserCreateNestedOneWithoutAccountsInput
    subsites?: SubsiteCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    name: string
    accountRef?: string
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    subsites?: SubsiteUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    accountRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: UserUpdateOneRequiredWithoutAccountsNestedInput
    subsites?: SubsiteUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accountRef?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsites?: SubsiteUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: number
    name: string
    accountRef?: string
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    accountRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accountRef?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubsiteCreateInput = {
    name: string
    slug?: string | null
    subsiteRef?: string
    logoUrl?: string | null
    logoSvg?: string | null
    navConfig?: string | null
    headerConfig?: string | null
    footerConfig?: string | null
    siteVisibility?: string | null
    siteLanguage?: string | null
    domainName?: string | null
    domainStatus?: string | null
    domainCreatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostCreateNestedManyWithoutSubsiteInput
    pages?: PageCreateNestedManyWithoutSubsiteInput
    account: AccountCreateNestedOneWithoutSubsitesInput
  }

  export type SubsiteUncheckedCreateInput = {
    id?: number
    name: string
    slug?: string | null
    subsiteRef?: string
    logoUrl?: string | null
    logoSvg?: string | null
    navConfig?: string | null
    headerConfig?: string | null
    footerConfig?: string | null
    siteVisibility?: string | null
    siteLanguage?: string | null
    domainName?: string | null
    domainStatus?: string | null
    domainCreatedAt?: Date | string | null
    accountId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostUncheckedCreateNestedManyWithoutSubsiteInput
    pages?: PageUncheckedCreateNestedManyWithoutSubsiteInput
  }

  export type SubsiteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUpdateManyWithoutSubsiteNestedInput
    pages?: PageUpdateManyWithoutSubsiteNestedInput
    account?: AccountUpdateOneRequiredWithoutSubsitesNestedInput
  }

  export type SubsiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUncheckedUpdateManyWithoutSubsiteNestedInput
    pages?: PageUncheckedUpdateManyWithoutSubsiteNestedInput
  }

  export type SubsiteCreateManyInput = {
    id?: number
    name: string
    slug?: string | null
    subsiteRef?: string
    logoUrl?: string | null
    logoSvg?: string | null
    navConfig?: string | null
    headerConfig?: string | null
    footerConfig?: string | null
    siteVisibility?: string | null
    siteLanguage?: string | null
    domainName?: string | null
    domainStatus?: string | null
    domainCreatedAt?: Date | string | null
    accountId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SubsiteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubsiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostCreateInput = {
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    author: UserCreateNestedOneWithoutPostsInput
    categories?: CategoryCreateNestedManyWithoutPostsInput
    tags?: TagCreateNestedManyWithoutPostsInput
    subsite: SubsiteCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    authorId: number
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    categories?: CategoryUpdateManyWithoutPostsNestedInput
    tags?: TagUpdateManyWithoutPostsNestedInput
    subsite?: SubsiteUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    authorId: number
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageCreateInput = {
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
    author: UserCreateNestedOneWithoutPagesInput
    categories?: CategoryCreateNestedManyWithoutPagesInput
    tags?: TagCreateNestedManyWithoutPagesInput
    subsite: SubsiteCreateNestedOneWithoutPagesInput
  }

  export type PageUncheckedCreateInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    authorId: number
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutPagesInput
    tags?: TagUncheckedCreateNestedManyWithoutPagesInput
  }

  export type PageUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutPagesNestedInput
    categories?: CategoryUpdateManyWithoutPagesNestedInput
    tags?: TagUpdateManyWithoutPagesNestedInput
    subsite?: SubsiteUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutPagesNestedInput
    tags?: TagUncheckedUpdateManyWithoutPagesNestedInput
  }

  export type PageCreateManyInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    authorId: number
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
  }

  export type PageUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
  }

  export type PageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProfileCreateInput = {
    bio?: string | null
    active?: boolean
    slug?: string | null
    imageUrl?: string | null
    subsiteRef?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: number
    bio?: string | null
    active?: boolean
    slug?: string | null
    imageUrl?: string | null
    subsiteRef?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserProfileUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileCreateManyInput = {
    id?: number
    bio?: string | null
    active?: boolean
    slug?: string | null
    imageUrl?: string | null
    subsiteRef?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserProfileUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactAddressCreateInput = {
    line1: string
    line2?: string | null
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact: UserContactCreateNestedOneWithoutAddressInput
  }

  export type ContactAddressUncheckedCreateInput = {
    id?: number
    line1: string
    line2?: string | null
    city: string
    state: string
    postalCode: string
    country: string
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactAddressUpdateInput = {
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUpdateOneRequiredWithoutAddressNestedInput
  }

  export type ContactAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactAddressCreateManyInput = {
    id?: number
    line1: string
    line2?: string | null
    city: string
    state: string
    postalCode: string
    country: string
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactAddressUpdateManyMutationInput = {
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactEmailCreateInput = {
    primaryEmail: string
    primaryEmailType: string
    secondaryEmail?: string | null
    secondaryEmailType?: string | null
    tertiaryEmail?: string | null
    tertiaryEmailType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact: UserContactCreateNestedOneWithoutEmailInput
  }

  export type ContactEmailUncheckedCreateInput = {
    id?: number
    primaryEmail: string
    primaryEmailType: string
    secondaryEmail?: string | null
    secondaryEmailType?: string | null
    tertiaryEmail?: string | null
    tertiaryEmailType?: string | null
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactEmailUpdateInput = {
    primaryEmail?: StringFieldUpdateOperationsInput | string
    primaryEmailType?: StringFieldUpdateOperationsInput | string
    secondaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUpdateOneRequiredWithoutEmailNestedInput
  }

  export type ContactEmailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryEmail?: StringFieldUpdateOperationsInput | string
    primaryEmailType?: StringFieldUpdateOperationsInput | string
    secondaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactEmailCreateManyInput = {
    id?: number
    primaryEmail: string
    primaryEmailType: string
    secondaryEmail?: string | null
    secondaryEmailType?: string | null
    tertiaryEmail?: string | null
    tertiaryEmailType?: string | null
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactEmailUpdateManyMutationInput = {
    primaryEmail?: StringFieldUpdateOperationsInput | string
    primaryEmailType?: StringFieldUpdateOperationsInput | string
    secondaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactEmailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryEmail?: StringFieldUpdateOperationsInput | string
    primaryEmailType?: StringFieldUpdateOperationsInput | string
    secondaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactPhoneCreateInput = {
    primaryPhone: string
    primaryPhoneType: string
    secondaryPhone?: string | null
    secondaryPhoneType?: string | null
    tertiaryPhone?: string | null
    tertiaryPhoneType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact: UserContactCreateNestedOneWithoutPhoneInput
  }

  export type ContactPhoneUncheckedCreateInput = {
    id?: number
    primaryPhone: string
    primaryPhoneType: string
    secondaryPhone?: string | null
    secondaryPhoneType?: string | null
    tertiaryPhone?: string | null
    tertiaryPhoneType?: string | null
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactPhoneUpdateInput = {
    primaryPhone?: StringFieldUpdateOperationsInput | string
    primaryPhoneType?: StringFieldUpdateOperationsInput | string
    secondaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUpdateOneRequiredWithoutPhoneNestedInput
  }

  export type ContactPhoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryPhone?: StringFieldUpdateOperationsInput | string
    primaryPhoneType?: StringFieldUpdateOperationsInput | string
    secondaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactPhoneCreateManyInput = {
    id?: number
    primaryPhone: string
    primaryPhoneType: string
    secondaryPhone?: string | null
    secondaryPhoneType?: string | null
    tertiaryPhone?: string | null
    tertiaryPhoneType?: string | null
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactPhoneUpdateManyMutationInput = {
    primaryPhone?: StringFieldUpdateOperationsInput | string
    primaryPhoneType?: StringFieldUpdateOperationsInput | string
    secondaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactPhoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryPhone?: StringFieldUpdateOperationsInput | string
    primaryPhoneType?: StringFieldUpdateOperationsInput | string
    secondaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactWebsiteCreateInput = {
    primaryUrl: string
    primaryUrlType: string
    secondaryUrl?: string | null
    secondaryUrlType?: string | null
    tertiaryUrl?: string | null
    tertiaryUrlType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact: UserContactCreateNestedOneWithoutWebsiteInput
  }

  export type ContactWebsiteUncheckedCreateInput = {
    id?: number
    primaryUrl: string
    primaryUrlType: string
    secondaryUrl?: string | null
    secondaryUrlType?: string | null
    tertiaryUrl?: string | null
    tertiaryUrlType?: string | null
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactWebsiteUpdateInput = {
    primaryUrl?: StringFieldUpdateOperationsInput | string
    primaryUrlType?: StringFieldUpdateOperationsInput | string
    secondaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUpdateOneRequiredWithoutWebsiteNestedInput
  }

  export type ContactWebsiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryUrl?: StringFieldUpdateOperationsInput | string
    primaryUrlType?: StringFieldUpdateOperationsInput | string
    secondaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactWebsiteCreateManyInput = {
    id?: number
    primaryUrl: string
    primaryUrlType: string
    secondaryUrl?: string | null
    secondaryUrlType?: string | null
    tertiaryUrl?: string | null
    tertiaryUrlType?: string | null
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactWebsiteUpdateManyMutationInput = {
    primaryUrl?: StringFieldUpdateOperationsInput | string
    primaryUrlType?: StringFieldUpdateOperationsInput | string
    secondaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactWebsiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryUrl?: StringFieldUpdateOperationsInput | string
    primaryUrlType?: StringFieldUpdateOperationsInput | string
    secondaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserContactCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    email?: ContactEmailCreateNestedOneWithoutContactInput
    phone?: ContactPhoneCreateNestedOneWithoutContactInput
    address?: ContactAddressCreateNestedOneWithoutContactInput
    website?: ContactWebsiteCreateNestedOneWithoutContactInput
    user: UserCreateNestedOneWithoutContactInput
  }

  export type UserContactUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    email?: ContactEmailUncheckedCreateNestedOneWithoutContactInput
    phone?: ContactPhoneUncheckedCreateNestedOneWithoutContactInput
    address?: ContactAddressUncheckedCreateNestedOneWithoutContactInput
    website?: ContactWebsiteUncheckedCreateNestedOneWithoutContactInput
  }

  export type UserContactUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: ContactEmailUpdateOneWithoutContactNestedInput
    phone?: ContactPhoneUpdateOneWithoutContactNestedInput
    address?: ContactAddressUpdateOneWithoutContactNestedInput
    website?: ContactWebsiteUpdateOneWithoutContactNestedInput
    user?: UserUpdateOneRequiredWithoutContactNestedInput
  }

  export type UserContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: ContactEmailUncheckedUpdateOneWithoutContactNestedInput
    phone?: ContactPhoneUncheckedUpdateOneWithoutContactNestedInput
    address?: ContactAddressUncheckedUpdateOneWithoutContactNestedInput
    website?: ContactWebsiteUncheckedUpdateOneWithoutContactNestedInput
  }

  export type UserContactCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserContactUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostCreateNestedManyWithoutCategoriesInput
    pages?: PageCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostUncheckedCreateNestedManyWithoutCategoriesInput
    pages?: PageUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUpdateManyWithoutCategoriesNestedInput
    pages?: PageUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUncheckedUpdateManyWithoutCategoriesNestedInput
    pages?: PageUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostCreateNestedManyWithoutTagsInput
    pages?: PageCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostUncheckedCreateNestedManyWithoutTagsInput
    pages?: PageUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUpdateManyWithoutTagsNestedInput
    pages?: PageUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUncheckedUpdateManyWithoutTagsNestedInput
    pages?: PageUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserContactNullableRelationFilter = {
    is?: UserContactWhereInput | null
    isNot?: UserContactWhereInput | null
  }

  export type UserProfileNullableRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PageListRelationFilter = {
    every?: PageWhereInput
    some?: PageWhereInput
    none?: PageWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    prefix?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    suffix?: SortOrder
    preferredName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    local?: SortOrder
    timeZone?: SortOrder
    lastLoginTime?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    prefix?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    suffix?: SortOrder
    preferredName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    local?: SortOrder
    timeZone?: SortOrder
    lastLoginTime?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    prefix?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    suffix?: SortOrder
    preferredName?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    local?: SortOrder
    timeZone?: SortOrder
    lastLoginTime?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubsiteListRelationFilter = {
    every?: SubsiteWhereInput
    some?: SubsiteWhereInput
    none?: SubsiteWhereInput
  }

  export type SubsiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    accountRef?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    accountRef?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    accountRef?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type SubsiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    subsiteRef?: SortOrder
    logoUrl?: SortOrder
    logoSvg?: SortOrder
    navConfig?: SortOrder
    headerConfig?: SortOrder
    footerConfig?: SortOrder
    siteVisibility?: SortOrder
    siteLanguage?: SortOrder
    domainName?: SortOrder
    domainStatus?: SortOrder
    domainCreatedAt?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubsiteAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type SubsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    subsiteRef?: SortOrder
    logoUrl?: SortOrder
    logoSvg?: SortOrder
    navConfig?: SortOrder
    headerConfig?: SortOrder
    footerConfig?: SortOrder
    siteVisibility?: SortOrder
    siteLanguage?: SortOrder
    domainName?: SortOrder
    domainStatus?: SortOrder
    domainCreatedAt?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubsiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    subsiteRef?: SortOrder
    logoUrl?: SortOrder
    logoSvg?: SortOrder
    navConfig?: SortOrder
    headerConfig?: SortOrder
    footerConfig?: SortOrder
    siteVisibility?: SortOrder
    siteLanguage?: SortOrder
    domainName?: SortOrder
    domainStatus?: SortOrder
    domainCreatedAt?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubsiteSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type EnumContentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStatusFilter<$PrismaModel> | $Enums.ContentStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type SubsiteRelationFilter = {
    is?: SubsiteWhereInput
    isNot?: SubsiteWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    deleted?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    deleted?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    published?: SortOrder
    publishedAt?: SortOrder
    deleted?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
  }

  export type EnumContentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentStatusFilter<$PrismaModel>
    _max?: NestedEnumContentStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    published?: SortOrder
    coverImage?: SortOrder
    layoutTemplate?: SortOrder
    theme?: SortOrder
    metaData?: SortOrder
    seoSettings?: SortOrder
    analyticsCodes?: SortOrder
    showOnNav?: SortOrder
    deleted?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageOrder?: SortOrder
    parentPageId?: SortOrder
  }

  export type PageAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    pageOrder?: SortOrder
    parentPageId?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    published?: SortOrder
    coverImage?: SortOrder
    layoutTemplate?: SortOrder
    theme?: SortOrder
    metaData?: SortOrder
    seoSettings?: SortOrder
    analyticsCodes?: SortOrder
    showOnNav?: SortOrder
    deleted?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageOrder?: SortOrder
    parentPageId?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    overview?: SortOrder
    content?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    published?: SortOrder
    coverImage?: SortOrder
    layoutTemplate?: SortOrder
    theme?: SortOrder
    metaData?: SortOrder
    seoSettings?: SortOrder
    analyticsCodes?: SortOrder
    showOnNav?: SortOrder
    deleted?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageOrder?: SortOrder
    parentPageId?: SortOrder
  }

  export type PageSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    subsiteId?: SortOrder
    pageOrder?: SortOrder
    parentPageId?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    active?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    subsiteRef?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    active?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    subsiteRef?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    active?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    subsiteRef?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserContactRelationFilter = {
    is?: UserContactWhereInput
    isNot?: UserContactWhereInput
  }

  export type ContactAddressCountOrderByAggregateInput = {
    id?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
  }

  export type ContactAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAddressMinOrderByAggregateInput = {
    id?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAddressSumOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
  }

  export type ContactEmailCountOrderByAggregateInput = {
    id?: SortOrder
    primaryEmail?: SortOrder
    primaryEmailType?: SortOrder
    secondaryEmail?: SortOrder
    secondaryEmailType?: SortOrder
    tertiaryEmail?: SortOrder
    tertiaryEmailType?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactEmailAvgOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
  }

  export type ContactEmailMaxOrderByAggregateInput = {
    id?: SortOrder
    primaryEmail?: SortOrder
    primaryEmailType?: SortOrder
    secondaryEmail?: SortOrder
    secondaryEmailType?: SortOrder
    tertiaryEmail?: SortOrder
    tertiaryEmailType?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactEmailMinOrderByAggregateInput = {
    id?: SortOrder
    primaryEmail?: SortOrder
    primaryEmailType?: SortOrder
    secondaryEmail?: SortOrder
    secondaryEmailType?: SortOrder
    tertiaryEmail?: SortOrder
    tertiaryEmailType?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactEmailSumOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
  }

  export type ContactPhoneCountOrderByAggregateInput = {
    id?: SortOrder
    primaryPhone?: SortOrder
    primaryPhoneType?: SortOrder
    secondaryPhone?: SortOrder
    secondaryPhoneType?: SortOrder
    tertiaryPhone?: SortOrder
    tertiaryPhoneType?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPhoneAvgOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
  }

  export type ContactPhoneMaxOrderByAggregateInput = {
    id?: SortOrder
    primaryPhone?: SortOrder
    primaryPhoneType?: SortOrder
    secondaryPhone?: SortOrder
    secondaryPhoneType?: SortOrder
    tertiaryPhone?: SortOrder
    tertiaryPhoneType?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPhoneMinOrderByAggregateInput = {
    id?: SortOrder
    primaryPhone?: SortOrder
    primaryPhoneType?: SortOrder
    secondaryPhone?: SortOrder
    secondaryPhoneType?: SortOrder
    tertiaryPhone?: SortOrder
    tertiaryPhoneType?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactPhoneSumOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
  }

  export type ContactWebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    primaryUrl?: SortOrder
    primaryUrlType?: SortOrder
    secondaryUrl?: SortOrder
    secondaryUrlType?: SortOrder
    tertiaryUrl?: SortOrder
    tertiaryUrlType?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWebsiteAvgOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
  }

  export type ContactWebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    primaryUrl?: SortOrder
    primaryUrlType?: SortOrder
    secondaryUrl?: SortOrder
    secondaryUrlType?: SortOrder
    tertiaryUrl?: SortOrder
    tertiaryUrlType?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    primaryUrl?: SortOrder
    primaryUrlType?: SortOrder
    secondaryUrl?: SortOrder
    secondaryUrlType?: SortOrder
    tertiaryUrl?: SortOrder
    tertiaryUrlType?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWebsiteSumOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
  }

  export type ContactEmailNullableRelationFilter = {
    is?: ContactEmailWhereInput | null
    isNot?: ContactEmailWhereInput | null
  }

  export type ContactPhoneNullableRelationFilter = {
    is?: ContactPhoneWhereInput | null
    isNot?: ContactPhoneWhereInput | null
  }

  export type ContactAddressNullableRelationFilter = {
    is?: ContactAddressWhereInput | null
    isNot?: ContactAddressWhereInput | null
  }

  export type ContactWebsiteNullableRelationFilter = {
    is?: ContactWebsiteWhereInput | null
    isNot?: ContactWebsiteWhereInput | null
  }

  export type UserContactCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserContactAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserContactMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserContactMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserContactSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserContactCreateNestedOneWithoutUserInput = {
    create?: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutUserInput
    connect?: UserContactWhereUniqueInput
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PageCreateWithoutAuthorInput, PageUncheckedCreateWithoutAuthorInput> | PageCreateWithoutAuthorInput[] | PageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PageCreateOrConnectWithoutAuthorInput | PageCreateOrConnectWithoutAuthorInput[]
    createMany?: PageCreateManyAuthorInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutAdminInput = {
    create?: XOR<AccountCreateWithoutAdminInput, AccountUncheckedCreateWithoutAdminInput> | AccountCreateWithoutAdminInput[] | AccountUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutAdminInput | AccountCreateOrConnectWithoutAdminInput[]
    createMany?: AccountCreateManyAdminInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserContactUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutUserInput
    connect?: UserContactWhereUniqueInput
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PageCreateWithoutAuthorInput, PageUncheckedCreateWithoutAuthorInput> | PageCreateWithoutAuthorInput[] | PageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PageCreateOrConnectWithoutAuthorInput | PageCreateOrConnectWithoutAuthorInput[]
    createMany?: PageCreateManyAuthorInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AccountCreateWithoutAdminInput, AccountUncheckedCreateWithoutAdminInput> | AccountCreateWithoutAdminInput[] | AccountUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutAdminInput | AccountCreateOrConnectWithoutAdminInput[]
    createMany?: AccountCreateManyAdminInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserContactUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutUserInput
    upsert?: UserContactUpsertWithoutUserInput
    disconnect?: UserContactWhereInput | boolean
    delete?: UserContactWhereInput | boolean
    connect?: UserContactWhereUniqueInput
    update?: XOR<XOR<UserContactUpdateToOneWithWhereWithoutUserInput, UserContactUpdateWithoutUserInput>, UserContactUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PageCreateWithoutAuthorInput, PageUncheckedCreateWithoutAuthorInput> | PageCreateWithoutAuthorInput[] | PageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PageCreateOrConnectWithoutAuthorInput | PageCreateOrConnectWithoutAuthorInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutAuthorInput | PageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PageCreateManyAuthorInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutAuthorInput | PageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PageUpdateManyWithWhereWithoutAuthorInput | PageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AccountCreateWithoutAdminInput, AccountUncheckedCreateWithoutAdminInput> | AccountCreateWithoutAdminInput[] | AccountUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutAdminInput | AccountCreateOrConnectWithoutAdminInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutAdminInput | AccountUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AccountCreateManyAdminInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutAdminInput | AccountUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutAdminInput | AccountUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserContactUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutUserInput
    upsert?: UserContactUpsertWithoutUserInput
    disconnect?: UserContactWhereInput | boolean
    delete?: UserContactWhereInput | boolean
    connect?: UserContactWhereUniqueInput
    update?: XOR<XOR<UserContactUpdateToOneWithWhereWithoutUserInput, UserContactUpdateWithoutUserInput>, UserContactUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PageCreateWithoutAuthorInput, PageUncheckedCreateWithoutAuthorInput> | PageCreateWithoutAuthorInput[] | PageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PageCreateOrConnectWithoutAuthorInput | PageCreateOrConnectWithoutAuthorInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutAuthorInput | PageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PageCreateManyAuthorInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutAuthorInput | PageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PageUpdateManyWithWhereWithoutAuthorInput | PageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AccountCreateWithoutAdminInput, AccountUncheckedCreateWithoutAdminInput> | AccountCreateWithoutAdminInput[] | AccountUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutAdminInput | AccountCreateOrConnectWithoutAdminInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutAdminInput | AccountUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AccountCreateManyAdminInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutAdminInput | AccountUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutAdminInput | AccountUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type SubsiteCreateNestedManyWithoutAccountInput = {
    create?: XOR<SubsiteCreateWithoutAccountInput, SubsiteUncheckedCreateWithoutAccountInput> | SubsiteCreateWithoutAccountInput[] | SubsiteUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SubsiteCreateOrConnectWithoutAccountInput | SubsiteCreateOrConnectWithoutAccountInput[]
    createMany?: SubsiteCreateManyAccountInputEnvelope
    connect?: SubsiteWhereUniqueInput | SubsiteWhereUniqueInput[]
  }

  export type SubsiteUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<SubsiteCreateWithoutAccountInput, SubsiteUncheckedCreateWithoutAccountInput> | SubsiteCreateWithoutAccountInput[] | SubsiteUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SubsiteCreateOrConnectWithoutAccountInput | SubsiteCreateOrConnectWithoutAccountInput[]
    createMany?: SubsiteCreateManyAccountInputEnvelope
    connect?: SubsiteWhereUniqueInput | SubsiteWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type SubsiteUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SubsiteCreateWithoutAccountInput, SubsiteUncheckedCreateWithoutAccountInput> | SubsiteCreateWithoutAccountInput[] | SubsiteUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SubsiteCreateOrConnectWithoutAccountInput | SubsiteCreateOrConnectWithoutAccountInput[]
    upsert?: SubsiteUpsertWithWhereUniqueWithoutAccountInput | SubsiteUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SubsiteCreateManyAccountInputEnvelope
    set?: SubsiteWhereUniqueInput | SubsiteWhereUniqueInput[]
    disconnect?: SubsiteWhereUniqueInput | SubsiteWhereUniqueInput[]
    delete?: SubsiteWhereUniqueInput | SubsiteWhereUniqueInput[]
    connect?: SubsiteWhereUniqueInput | SubsiteWhereUniqueInput[]
    update?: SubsiteUpdateWithWhereUniqueWithoutAccountInput | SubsiteUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SubsiteUpdateManyWithWhereWithoutAccountInput | SubsiteUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SubsiteScalarWhereInput | SubsiteScalarWhereInput[]
  }

  export type SubsiteUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SubsiteCreateWithoutAccountInput, SubsiteUncheckedCreateWithoutAccountInput> | SubsiteCreateWithoutAccountInput[] | SubsiteUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SubsiteCreateOrConnectWithoutAccountInput | SubsiteCreateOrConnectWithoutAccountInput[]
    upsert?: SubsiteUpsertWithWhereUniqueWithoutAccountInput | SubsiteUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SubsiteCreateManyAccountInputEnvelope
    set?: SubsiteWhereUniqueInput | SubsiteWhereUniqueInput[]
    disconnect?: SubsiteWhereUniqueInput | SubsiteWhereUniqueInput[]
    delete?: SubsiteWhereUniqueInput | SubsiteWhereUniqueInput[]
    connect?: SubsiteWhereUniqueInput | SubsiteWhereUniqueInput[]
    update?: SubsiteUpdateWithWhereUniqueWithoutAccountInput | SubsiteUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SubsiteUpdateManyWithWhereWithoutAccountInput | SubsiteUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SubsiteScalarWhereInput | SubsiteScalarWhereInput[]
  }

  export type PostCreateNestedManyWithoutSubsiteInput = {
    create?: XOR<PostCreateWithoutSubsiteInput, PostUncheckedCreateWithoutSubsiteInput> | PostCreateWithoutSubsiteInput[] | PostUncheckedCreateWithoutSubsiteInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubsiteInput | PostCreateOrConnectWithoutSubsiteInput[]
    createMany?: PostCreateManySubsiteInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PageCreateNestedManyWithoutSubsiteInput = {
    create?: XOR<PageCreateWithoutSubsiteInput, PageUncheckedCreateWithoutSubsiteInput> | PageCreateWithoutSubsiteInput[] | PageUncheckedCreateWithoutSubsiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutSubsiteInput | PageCreateOrConnectWithoutSubsiteInput[]
    createMany?: PageCreateManySubsiteInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type AccountCreateNestedOneWithoutSubsitesInput = {
    create?: XOR<AccountCreateWithoutSubsitesInput, AccountUncheckedCreateWithoutSubsitesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSubsitesInput
    connect?: AccountWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutSubsiteInput = {
    create?: XOR<PostCreateWithoutSubsiteInput, PostUncheckedCreateWithoutSubsiteInput> | PostCreateWithoutSubsiteInput[] | PostUncheckedCreateWithoutSubsiteInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubsiteInput | PostCreateOrConnectWithoutSubsiteInput[]
    createMany?: PostCreateManySubsiteInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PageUncheckedCreateNestedManyWithoutSubsiteInput = {
    create?: XOR<PageCreateWithoutSubsiteInput, PageUncheckedCreateWithoutSubsiteInput> | PageCreateWithoutSubsiteInput[] | PageUncheckedCreateWithoutSubsiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutSubsiteInput | PageCreateOrConnectWithoutSubsiteInput[]
    createMany?: PageCreateManySubsiteInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutSubsiteNestedInput = {
    create?: XOR<PostCreateWithoutSubsiteInput, PostUncheckedCreateWithoutSubsiteInput> | PostCreateWithoutSubsiteInput[] | PostUncheckedCreateWithoutSubsiteInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubsiteInput | PostCreateOrConnectWithoutSubsiteInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSubsiteInput | PostUpsertWithWhereUniqueWithoutSubsiteInput[]
    createMany?: PostCreateManySubsiteInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSubsiteInput | PostUpdateWithWhereUniqueWithoutSubsiteInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSubsiteInput | PostUpdateManyWithWhereWithoutSubsiteInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PageUpdateManyWithoutSubsiteNestedInput = {
    create?: XOR<PageCreateWithoutSubsiteInput, PageUncheckedCreateWithoutSubsiteInput> | PageCreateWithoutSubsiteInput[] | PageUncheckedCreateWithoutSubsiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutSubsiteInput | PageCreateOrConnectWithoutSubsiteInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutSubsiteInput | PageUpsertWithWhereUniqueWithoutSubsiteInput[]
    createMany?: PageCreateManySubsiteInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutSubsiteInput | PageUpdateWithWhereUniqueWithoutSubsiteInput[]
    updateMany?: PageUpdateManyWithWhereWithoutSubsiteInput | PageUpdateManyWithWhereWithoutSubsiteInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type AccountUpdateOneRequiredWithoutSubsitesNestedInput = {
    create?: XOR<AccountCreateWithoutSubsitesInput, AccountUncheckedCreateWithoutSubsitesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSubsitesInput
    upsert?: AccountUpsertWithoutSubsitesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutSubsitesInput, AccountUpdateWithoutSubsitesInput>, AccountUncheckedUpdateWithoutSubsitesInput>
  }

  export type PostUncheckedUpdateManyWithoutSubsiteNestedInput = {
    create?: XOR<PostCreateWithoutSubsiteInput, PostUncheckedCreateWithoutSubsiteInput> | PostCreateWithoutSubsiteInput[] | PostUncheckedCreateWithoutSubsiteInput[]
    connectOrCreate?: PostCreateOrConnectWithoutSubsiteInput | PostCreateOrConnectWithoutSubsiteInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutSubsiteInput | PostUpsertWithWhereUniqueWithoutSubsiteInput[]
    createMany?: PostCreateManySubsiteInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutSubsiteInput | PostUpdateWithWhereUniqueWithoutSubsiteInput[]
    updateMany?: PostUpdateManyWithWhereWithoutSubsiteInput | PostUpdateManyWithWhereWithoutSubsiteInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PageUncheckedUpdateManyWithoutSubsiteNestedInput = {
    create?: XOR<PageCreateWithoutSubsiteInput, PageUncheckedCreateWithoutSubsiteInput> | PageCreateWithoutSubsiteInput[] | PageUncheckedCreateWithoutSubsiteInput[]
    connectOrCreate?: PageCreateOrConnectWithoutSubsiteInput | PageCreateOrConnectWithoutSubsiteInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutSubsiteInput | PageUpsertWithWhereUniqueWithoutSubsiteInput[]
    createMany?: PageCreateManySubsiteInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutSubsiteInput | PageUpdateWithWhereUniqueWithoutSubsiteInput[]
    updateMany?: PageUpdateManyWithWhereWithoutSubsiteInput | PageUpdateManyWithWhereWithoutSubsiteInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput> | TagCreateWithoutPostsInput[] | TagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput | TagCreateOrConnectWithoutPostsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type SubsiteCreateNestedOneWithoutPostsInput = {
    create?: XOR<SubsiteCreateWithoutPostsInput, SubsiteUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SubsiteCreateOrConnectWithoutPostsInput
    connect?: SubsiteWhereUniqueInput
  }

  export type CategoryUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput> | TagCreateWithoutPostsInput[] | TagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput | TagCreateOrConnectWithoutPostsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type EnumContentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContentStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateManyWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPostsInput | CategoryUpsertWithWhereUniqueWithoutPostsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPostsInput | CategoryUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPostsInput | CategoryUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TagUpdateManyWithoutPostsNestedInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput> | TagCreateWithoutPostsInput[] | TagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput | TagCreateOrConnectWithoutPostsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPostsInput | TagUpsertWithWhereUniqueWithoutPostsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPostsInput | TagUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPostsInput | TagUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type SubsiteUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<SubsiteCreateWithoutPostsInput, SubsiteUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SubsiteCreateOrConnectWithoutPostsInput
    upsert?: SubsiteUpsertWithoutPostsInput
    connect?: SubsiteWhereUniqueInput
    update?: XOR<XOR<SubsiteUpdateToOneWithWhereWithoutPostsInput, SubsiteUpdateWithoutPostsInput>, SubsiteUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput> | CategoryCreateWithoutPostsInput[] | CategoryUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput | CategoryCreateOrConnectWithoutPostsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPostsInput | CategoryUpsertWithWhereUniqueWithoutPostsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPostsInput | CategoryUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPostsInput | CategoryUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput> | TagCreateWithoutPostsInput[] | TagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput | TagCreateOrConnectWithoutPostsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPostsInput | TagUpsertWithWhereUniqueWithoutPostsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPostsInput | TagUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPostsInput | TagUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPagesInput = {
    create?: XOR<UserCreateWithoutPagesInput, UserUncheckedCreateWithoutPagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPagesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutPagesInput = {
    create?: XOR<CategoryCreateWithoutPagesInput, CategoryUncheckedCreateWithoutPagesInput> | CategoryCreateWithoutPagesInput[] | CategoryUncheckedCreateWithoutPagesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPagesInput | CategoryCreateOrConnectWithoutPagesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutPagesInput = {
    create?: XOR<TagCreateWithoutPagesInput, TagUncheckedCreateWithoutPagesInput> | TagCreateWithoutPagesInput[] | TagUncheckedCreateWithoutPagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPagesInput | TagCreateOrConnectWithoutPagesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type SubsiteCreateNestedOneWithoutPagesInput = {
    create?: XOR<SubsiteCreateWithoutPagesInput, SubsiteUncheckedCreateWithoutPagesInput>
    connectOrCreate?: SubsiteCreateOrConnectWithoutPagesInput
    connect?: SubsiteWhereUniqueInput
  }

  export type CategoryUncheckedCreateNestedManyWithoutPagesInput = {
    create?: XOR<CategoryCreateWithoutPagesInput, CategoryUncheckedCreateWithoutPagesInput> | CategoryCreateWithoutPagesInput[] | CategoryUncheckedCreateWithoutPagesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPagesInput | CategoryCreateOrConnectWithoutPagesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutPagesInput = {
    create?: XOR<TagCreateWithoutPagesInput, TagUncheckedCreateWithoutPagesInput> | TagCreateWithoutPagesInput[] | TagUncheckedCreateWithoutPagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPagesInput | TagCreateOrConnectWithoutPagesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<UserCreateWithoutPagesInput, UserUncheckedCreateWithoutPagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPagesInput
    upsert?: UserUpsertWithoutPagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPagesInput, UserUpdateWithoutPagesInput>, UserUncheckedUpdateWithoutPagesInput>
  }

  export type CategoryUpdateManyWithoutPagesNestedInput = {
    create?: XOR<CategoryCreateWithoutPagesInput, CategoryUncheckedCreateWithoutPagesInput> | CategoryCreateWithoutPagesInput[] | CategoryUncheckedCreateWithoutPagesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPagesInput | CategoryCreateOrConnectWithoutPagesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPagesInput | CategoryUpsertWithWhereUniqueWithoutPagesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPagesInput | CategoryUpdateWithWhereUniqueWithoutPagesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPagesInput | CategoryUpdateManyWithWhereWithoutPagesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TagUpdateManyWithoutPagesNestedInput = {
    create?: XOR<TagCreateWithoutPagesInput, TagUncheckedCreateWithoutPagesInput> | TagCreateWithoutPagesInput[] | TagUncheckedCreateWithoutPagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPagesInput | TagCreateOrConnectWithoutPagesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPagesInput | TagUpsertWithWhereUniqueWithoutPagesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPagesInput | TagUpdateWithWhereUniqueWithoutPagesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPagesInput | TagUpdateManyWithWhereWithoutPagesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type SubsiteUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<SubsiteCreateWithoutPagesInput, SubsiteUncheckedCreateWithoutPagesInput>
    connectOrCreate?: SubsiteCreateOrConnectWithoutPagesInput
    upsert?: SubsiteUpsertWithoutPagesInput
    connect?: SubsiteWhereUniqueInput
    update?: XOR<XOR<SubsiteUpdateToOneWithWhereWithoutPagesInput, SubsiteUpdateWithoutPagesInput>, SubsiteUncheckedUpdateWithoutPagesInput>
  }

  export type CategoryUncheckedUpdateManyWithoutPagesNestedInput = {
    create?: XOR<CategoryCreateWithoutPagesInput, CategoryUncheckedCreateWithoutPagesInput> | CategoryCreateWithoutPagesInput[] | CategoryUncheckedCreateWithoutPagesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutPagesInput | CategoryCreateOrConnectWithoutPagesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutPagesInput | CategoryUpsertWithWhereUniqueWithoutPagesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutPagesInput | CategoryUpdateWithWhereUniqueWithoutPagesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutPagesInput | CategoryUpdateManyWithWhereWithoutPagesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutPagesNestedInput = {
    create?: XOR<TagCreateWithoutPagesInput, TagUncheckedCreateWithoutPagesInput> | TagCreateWithoutPagesInput[] | TagUncheckedCreateWithoutPagesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPagesInput | TagCreateOrConnectWithoutPagesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPagesInput | TagUpsertWithWhereUniqueWithoutPagesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPagesInput | TagUpdateWithWhereUniqueWithoutPagesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPagesInput | TagUpdateManyWithWhereWithoutPagesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserContactCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserContactCreateWithoutAddressInput, UserContactUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutAddressInput
    connect?: UserContactWhereUniqueInput
  }

  export type UserContactUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserContactCreateWithoutAddressInput, UserContactUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutAddressInput
    upsert?: UserContactUpsertWithoutAddressInput
    connect?: UserContactWhereUniqueInput
    update?: XOR<XOR<UserContactUpdateToOneWithWhereWithoutAddressInput, UserContactUpdateWithoutAddressInput>, UserContactUncheckedUpdateWithoutAddressInput>
  }

  export type UserContactCreateNestedOneWithoutEmailInput = {
    create?: XOR<UserContactCreateWithoutEmailInput, UserContactUncheckedCreateWithoutEmailInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutEmailInput
    connect?: UserContactWhereUniqueInput
  }

  export type UserContactUpdateOneRequiredWithoutEmailNestedInput = {
    create?: XOR<UserContactCreateWithoutEmailInput, UserContactUncheckedCreateWithoutEmailInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutEmailInput
    upsert?: UserContactUpsertWithoutEmailInput
    connect?: UserContactWhereUniqueInput
    update?: XOR<XOR<UserContactUpdateToOneWithWhereWithoutEmailInput, UserContactUpdateWithoutEmailInput>, UserContactUncheckedUpdateWithoutEmailInput>
  }

  export type UserContactCreateNestedOneWithoutPhoneInput = {
    create?: XOR<UserContactCreateWithoutPhoneInput, UserContactUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutPhoneInput
    connect?: UserContactWhereUniqueInput
  }

  export type UserContactUpdateOneRequiredWithoutPhoneNestedInput = {
    create?: XOR<UserContactCreateWithoutPhoneInput, UserContactUncheckedCreateWithoutPhoneInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutPhoneInput
    upsert?: UserContactUpsertWithoutPhoneInput
    connect?: UserContactWhereUniqueInput
    update?: XOR<XOR<UserContactUpdateToOneWithWhereWithoutPhoneInput, UserContactUpdateWithoutPhoneInput>, UserContactUncheckedUpdateWithoutPhoneInput>
  }

  export type UserContactCreateNestedOneWithoutWebsiteInput = {
    create?: XOR<UserContactCreateWithoutWebsiteInput, UserContactUncheckedCreateWithoutWebsiteInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutWebsiteInput
    connect?: UserContactWhereUniqueInput
  }

  export type UserContactUpdateOneRequiredWithoutWebsiteNestedInput = {
    create?: XOR<UserContactCreateWithoutWebsiteInput, UserContactUncheckedCreateWithoutWebsiteInput>
    connectOrCreate?: UserContactCreateOrConnectWithoutWebsiteInput
    upsert?: UserContactUpsertWithoutWebsiteInput
    connect?: UserContactWhereUniqueInput
    update?: XOR<XOR<UserContactUpdateToOneWithWhereWithoutWebsiteInput, UserContactUpdateWithoutWebsiteInput>, UserContactUncheckedUpdateWithoutWebsiteInput>
  }

  export type ContactEmailCreateNestedOneWithoutContactInput = {
    create?: XOR<ContactEmailCreateWithoutContactInput, ContactEmailUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactEmailCreateOrConnectWithoutContactInput
    connect?: ContactEmailWhereUniqueInput
  }

  export type ContactPhoneCreateNestedOneWithoutContactInput = {
    create?: XOR<ContactPhoneCreateWithoutContactInput, ContactPhoneUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactPhoneCreateOrConnectWithoutContactInput
    connect?: ContactPhoneWhereUniqueInput
  }

  export type ContactAddressCreateNestedOneWithoutContactInput = {
    create?: XOR<ContactAddressCreateWithoutContactInput, ContactAddressUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactAddressCreateOrConnectWithoutContactInput
    connect?: ContactAddressWhereUniqueInput
  }

  export type ContactWebsiteCreateNestedOneWithoutContactInput = {
    create?: XOR<ContactWebsiteCreateWithoutContactInput, ContactWebsiteUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactWebsiteCreateOrConnectWithoutContactInput
    connect?: ContactWebsiteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutContactInput = {
    create?: XOR<UserCreateWithoutContactInput, UserUncheckedCreateWithoutContactInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactInput
    connect?: UserWhereUniqueInput
  }

  export type ContactEmailUncheckedCreateNestedOneWithoutContactInput = {
    create?: XOR<ContactEmailCreateWithoutContactInput, ContactEmailUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactEmailCreateOrConnectWithoutContactInput
    connect?: ContactEmailWhereUniqueInput
  }

  export type ContactPhoneUncheckedCreateNestedOneWithoutContactInput = {
    create?: XOR<ContactPhoneCreateWithoutContactInput, ContactPhoneUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactPhoneCreateOrConnectWithoutContactInput
    connect?: ContactPhoneWhereUniqueInput
  }

  export type ContactAddressUncheckedCreateNestedOneWithoutContactInput = {
    create?: XOR<ContactAddressCreateWithoutContactInput, ContactAddressUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactAddressCreateOrConnectWithoutContactInput
    connect?: ContactAddressWhereUniqueInput
  }

  export type ContactWebsiteUncheckedCreateNestedOneWithoutContactInput = {
    create?: XOR<ContactWebsiteCreateWithoutContactInput, ContactWebsiteUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactWebsiteCreateOrConnectWithoutContactInput
    connect?: ContactWebsiteWhereUniqueInput
  }

  export type ContactEmailUpdateOneWithoutContactNestedInput = {
    create?: XOR<ContactEmailCreateWithoutContactInput, ContactEmailUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactEmailCreateOrConnectWithoutContactInput
    upsert?: ContactEmailUpsertWithoutContactInput
    disconnect?: ContactEmailWhereInput | boolean
    delete?: ContactEmailWhereInput | boolean
    connect?: ContactEmailWhereUniqueInput
    update?: XOR<XOR<ContactEmailUpdateToOneWithWhereWithoutContactInput, ContactEmailUpdateWithoutContactInput>, ContactEmailUncheckedUpdateWithoutContactInput>
  }

  export type ContactPhoneUpdateOneWithoutContactNestedInput = {
    create?: XOR<ContactPhoneCreateWithoutContactInput, ContactPhoneUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactPhoneCreateOrConnectWithoutContactInput
    upsert?: ContactPhoneUpsertWithoutContactInput
    disconnect?: ContactPhoneWhereInput | boolean
    delete?: ContactPhoneWhereInput | boolean
    connect?: ContactPhoneWhereUniqueInput
    update?: XOR<XOR<ContactPhoneUpdateToOneWithWhereWithoutContactInput, ContactPhoneUpdateWithoutContactInput>, ContactPhoneUncheckedUpdateWithoutContactInput>
  }

  export type ContactAddressUpdateOneWithoutContactNestedInput = {
    create?: XOR<ContactAddressCreateWithoutContactInput, ContactAddressUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactAddressCreateOrConnectWithoutContactInput
    upsert?: ContactAddressUpsertWithoutContactInput
    disconnect?: ContactAddressWhereInput | boolean
    delete?: ContactAddressWhereInput | boolean
    connect?: ContactAddressWhereUniqueInput
    update?: XOR<XOR<ContactAddressUpdateToOneWithWhereWithoutContactInput, ContactAddressUpdateWithoutContactInput>, ContactAddressUncheckedUpdateWithoutContactInput>
  }

  export type ContactWebsiteUpdateOneWithoutContactNestedInput = {
    create?: XOR<ContactWebsiteCreateWithoutContactInput, ContactWebsiteUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactWebsiteCreateOrConnectWithoutContactInput
    upsert?: ContactWebsiteUpsertWithoutContactInput
    disconnect?: ContactWebsiteWhereInput | boolean
    delete?: ContactWebsiteWhereInput | boolean
    connect?: ContactWebsiteWhereUniqueInput
    update?: XOR<XOR<ContactWebsiteUpdateToOneWithWhereWithoutContactInput, ContactWebsiteUpdateWithoutContactInput>, ContactWebsiteUncheckedUpdateWithoutContactInput>
  }

  export type UserUpdateOneRequiredWithoutContactNestedInput = {
    create?: XOR<UserCreateWithoutContactInput, UserUncheckedCreateWithoutContactInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactInput
    upsert?: UserUpsertWithoutContactInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactInput, UserUpdateWithoutContactInput>, UserUncheckedUpdateWithoutContactInput>
  }

  export type ContactEmailUncheckedUpdateOneWithoutContactNestedInput = {
    create?: XOR<ContactEmailCreateWithoutContactInput, ContactEmailUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactEmailCreateOrConnectWithoutContactInput
    upsert?: ContactEmailUpsertWithoutContactInput
    disconnect?: ContactEmailWhereInput | boolean
    delete?: ContactEmailWhereInput | boolean
    connect?: ContactEmailWhereUniqueInput
    update?: XOR<XOR<ContactEmailUpdateToOneWithWhereWithoutContactInput, ContactEmailUpdateWithoutContactInput>, ContactEmailUncheckedUpdateWithoutContactInput>
  }

  export type ContactPhoneUncheckedUpdateOneWithoutContactNestedInput = {
    create?: XOR<ContactPhoneCreateWithoutContactInput, ContactPhoneUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactPhoneCreateOrConnectWithoutContactInput
    upsert?: ContactPhoneUpsertWithoutContactInput
    disconnect?: ContactPhoneWhereInput | boolean
    delete?: ContactPhoneWhereInput | boolean
    connect?: ContactPhoneWhereUniqueInput
    update?: XOR<XOR<ContactPhoneUpdateToOneWithWhereWithoutContactInput, ContactPhoneUpdateWithoutContactInput>, ContactPhoneUncheckedUpdateWithoutContactInput>
  }

  export type ContactAddressUncheckedUpdateOneWithoutContactNestedInput = {
    create?: XOR<ContactAddressCreateWithoutContactInput, ContactAddressUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactAddressCreateOrConnectWithoutContactInput
    upsert?: ContactAddressUpsertWithoutContactInput
    disconnect?: ContactAddressWhereInput | boolean
    delete?: ContactAddressWhereInput | boolean
    connect?: ContactAddressWhereUniqueInput
    update?: XOR<XOR<ContactAddressUpdateToOneWithWhereWithoutContactInput, ContactAddressUpdateWithoutContactInput>, ContactAddressUncheckedUpdateWithoutContactInput>
  }

  export type ContactWebsiteUncheckedUpdateOneWithoutContactNestedInput = {
    create?: XOR<ContactWebsiteCreateWithoutContactInput, ContactWebsiteUncheckedCreateWithoutContactInput>
    connectOrCreate?: ContactWebsiteCreateOrConnectWithoutContactInput
    upsert?: ContactWebsiteUpsertWithoutContactInput
    disconnect?: ContactWebsiteWhereInput | boolean
    delete?: ContactWebsiteWhereInput | boolean
    connect?: ContactWebsiteWhereUniqueInput
    update?: XOR<XOR<ContactWebsiteUpdateToOneWithWhereWithoutContactInput, ContactWebsiteUpdateWithoutContactInput>, ContactWebsiteUncheckedUpdateWithoutContactInput>
  }

  export type PostCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PageCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<PageCreateWithoutCategoriesInput, PageUncheckedCreateWithoutCategoriesInput> | PageCreateWithoutCategoriesInput[] | PageUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PageCreateOrConnectWithoutCategoriesInput | PageCreateOrConnectWithoutCategoriesInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PageUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<PageCreateWithoutCategoriesInput, PageUncheckedCreateWithoutCategoriesInput> | PageCreateWithoutCategoriesInput[] | PageUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PageCreateOrConnectWithoutCategoriesInput | PageCreateOrConnectWithoutCategoriesInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoriesInput | PostUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoriesInput | PostUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoriesInput | PostUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PageUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<PageCreateWithoutCategoriesInput, PageUncheckedCreateWithoutCategoriesInput> | PageCreateWithoutCategoriesInput[] | PageUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PageCreateOrConnectWithoutCategoriesInput | PageCreateOrConnectWithoutCategoriesInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutCategoriesInput | PageUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutCategoriesInput | PageUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: PageUpdateManyWithWhereWithoutCategoriesInput | PageUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput> | PostCreateWithoutCategoriesInput[] | PostUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput | PostCreateOrConnectWithoutCategoriesInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoriesInput | PostUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoriesInput | PostUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoriesInput | PostUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PageUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<PageCreateWithoutCategoriesInput, PageUncheckedCreateWithoutCategoriesInput> | PageCreateWithoutCategoriesInput[] | PageUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: PageCreateOrConnectWithoutCategoriesInput | PageCreateOrConnectWithoutCategoriesInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutCategoriesInput | PageUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutCategoriesInput | PageUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: PageUpdateManyWithWhereWithoutCategoriesInput | PageUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type PostCreateNestedManyWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PageCreateNestedManyWithoutTagsInput = {
    create?: XOR<PageCreateWithoutTagsInput, PageUncheckedCreateWithoutTagsInput> | PageCreateWithoutTagsInput[] | PageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PageCreateOrConnectWithoutTagsInput | PageCreateOrConnectWithoutTagsInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PageUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<PageCreateWithoutTagsInput, PageUncheckedCreateWithoutTagsInput> | PageCreateWithoutTagsInput[] | PageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PageCreateOrConnectWithoutTagsInput | PageCreateOrConnectWithoutTagsInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutTagsInput | PostUpsertWithWhereUniqueWithoutTagsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutTagsInput | PostUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutTagsInput | PostUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PageUpdateManyWithoutTagsNestedInput = {
    create?: XOR<PageCreateWithoutTagsInput, PageUncheckedCreateWithoutTagsInput> | PageCreateWithoutTagsInput[] | PageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PageCreateOrConnectWithoutTagsInput | PageCreateOrConnectWithoutTagsInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutTagsInput | PageUpsertWithWhereUniqueWithoutTagsInput[]
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutTagsInput | PageUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: PageUpdateManyWithWhereWithoutTagsInput | PageUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput> | PostCreateWithoutTagsInput[] | PostUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | PostCreateOrConnectWithoutTagsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutTagsInput | PostUpsertWithWhereUniqueWithoutTagsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutTagsInput | PostUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutTagsInput | PostUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PageUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<PageCreateWithoutTagsInput, PageUncheckedCreateWithoutTagsInput> | PageCreateWithoutTagsInput[] | PageUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PageCreateOrConnectWithoutTagsInput | PageCreateOrConnectWithoutTagsInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutTagsInput | PageUpsertWithWhereUniqueWithoutTagsInput[]
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutTagsInput | PageUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: PageUpdateManyWithWhereWithoutTagsInput | PageUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumContentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStatusFilter<$PrismaModel> | $Enums.ContentStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumContentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentStatus | EnumContentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentStatus[] | ListEnumContentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentStatusFilter<$PrismaModel>
    _max?: NestedEnumContentStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserContactCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    email?: ContactEmailCreateNestedOneWithoutContactInput
    phone?: ContactPhoneCreateNestedOneWithoutContactInput
    address?: ContactAddressCreateNestedOneWithoutContactInput
    website?: ContactWebsiteCreateNestedOneWithoutContactInput
  }

  export type UserContactUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    email?: ContactEmailUncheckedCreateNestedOneWithoutContactInput
    phone?: ContactPhoneUncheckedCreateNestedOneWithoutContactInput
    address?: ContactAddressUncheckedCreateNestedOneWithoutContactInput
    website?: ContactWebsiteUncheckedCreateNestedOneWithoutContactInput
  }

  export type UserContactCreateOrConnectWithoutUserInput = {
    where: UserContactWhereUniqueInput
    create: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput>
  }

  export type UserProfileCreateWithoutUserInput = {
    bio?: string | null
    active?: boolean
    slug?: string | null
    imageUrl?: string | null
    subsiteRef?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: number
    bio?: string | null
    active?: boolean
    slug?: string | null
    imageUrl?: string | null
    subsiteRef?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type PostCreateWithoutAuthorInput = {
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    categories?: CategoryCreateNestedManyWithoutPostsInput
    tags?: TagCreateNestedManyWithoutPostsInput
    subsite: SubsiteCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PageCreateWithoutAuthorInput = {
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
    categories?: CategoryCreateNestedManyWithoutPagesInput
    tags?: TagCreateNestedManyWithoutPagesInput
    subsite: SubsiteCreateNestedOneWithoutPagesInput
  }

  export type PageUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutPagesInput
    tags?: TagUncheckedCreateNestedManyWithoutPagesInput
  }

  export type PageCreateOrConnectWithoutAuthorInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutAuthorInput, PageUncheckedCreateWithoutAuthorInput>
  }

  export type PageCreateManyAuthorInputEnvelope = {
    data: PageCreateManyAuthorInput | PageCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutAdminInput = {
    name: string
    accountRef?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    subsites?: SubsiteCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    accountRef?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    subsites?: SubsiteUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutAdminInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAdminInput, AccountUncheckedCreateWithoutAdminInput>
  }

  export type AccountCreateManyAdminInputEnvelope = {
    data: AccountCreateManyAdminInput | AccountCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type UserContactUpsertWithoutUserInput = {
    update: XOR<UserContactUpdateWithoutUserInput, UserContactUncheckedUpdateWithoutUserInput>
    create: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput>
    where?: UserContactWhereInput
  }

  export type UserContactUpdateToOneWithWhereWithoutUserInput = {
    where?: UserContactWhereInput
    data: XOR<UserContactUpdateWithoutUserInput, UserContactUncheckedUpdateWithoutUserInput>
  }

  export type UserContactUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: ContactEmailUpdateOneWithoutContactNestedInput
    phone?: ContactPhoneUpdateOneWithoutContactNestedInput
    address?: ContactAddressUpdateOneWithoutContactNestedInput
    website?: ContactWebsiteUpdateOneWithoutContactNestedInput
  }

  export type UserContactUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: ContactEmailUncheckedUpdateOneWithoutContactNestedInput
    phone?: ContactPhoneUncheckedUpdateOneWithoutContactNestedInput
    address?: ContactAddressUncheckedUpdateOneWithoutContactNestedInput
    website?: ContactWebsiteUncheckedUpdateOneWithoutContactNestedInput
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    overview?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    slug?: StringNullableFilter<"Post"> | string | null
    coverImage?: StringNullableFilter<"Post"> | string | null
    status?: EnumContentStatusFilter<"Post"> | $Enums.ContentStatus
    published?: BoolFilter<"Post"> | boolean
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    deleted?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    subsiteId?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
  }

  export type PageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PageWhereUniqueInput
    update: XOR<PageUpdateWithoutAuthorInput, PageUncheckedUpdateWithoutAuthorInput>
    create: XOR<PageCreateWithoutAuthorInput, PageUncheckedCreateWithoutAuthorInput>
  }

  export type PageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PageWhereUniqueInput
    data: XOR<PageUpdateWithoutAuthorInput, PageUncheckedUpdateWithoutAuthorInput>
  }

  export type PageUpdateManyWithWhereWithoutAuthorInput = {
    where: PageScalarWhereInput
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PageScalarWhereInput = {
    AND?: PageScalarWhereInput | PageScalarWhereInput[]
    OR?: PageScalarWhereInput[]
    NOT?: PageScalarWhereInput | PageScalarWhereInput[]
    id?: IntFilter<"Page"> | number
    title?: StringFilter<"Page"> | string
    overview?: StringFilter<"Page"> | string
    content?: StringNullableFilter<"Page"> | string | null
    slug?: StringNullableFilter<"Page"> | string | null
    status?: EnumContentStatusFilter<"Page"> | $Enums.ContentStatus
    publishedAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    published?: BoolFilter<"Page"> | boolean
    coverImage?: StringNullableFilter<"Page"> | string | null
    layoutTemplate?: StringNullableFilter<"Page"> | string | null
    theme?: StringNullableFilter<"Page"> | string | null
    metaData?: StringNullableFilter<"Page"> | string | null
    seoSettings?: StringNullableFilter<"Page"> | string | null
    analyticsCodes?: StringNullableFilter<"Page"> | string | null
    showOnNav?: BoolFilter<"Page"> | boolean
    deleted?: BoolFilter<"Page"> | boolean
    authorId?: IntFilter<"Page"> | number
    subsiteId?: IntFilter<"Page"> | number
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    pageOrder?: IntFilter<"Page"> | number
    parentPageId?: IntFilter<"Page"> | number
  }

  export type AccountUpsertWithWhereUniqueWithoutAdminInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutAdminInput, AccountUncheckedUpdateWithoutAdminInput>
    create: XOR<AccountCreateWithoutAdminInput, AccountUncheckedCreateWithoutAdminInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutAdminInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutAdminInput, AccountUncheckedUpdateWithoutAdminInput>
  }

  export type AccountUpdateManyWithWhereWithoutAdminInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAdminInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: IntFilter<"Account"> | number
    name?: StringFilter<"Account"> | string
    accountRef?: StringFilter<"Account"> | string
    adminId?: IntFilter<"Account"> | number
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
  }

  export type UserCreateWithoutAccountsInput = {
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact?: UserContactCreateNestedOneWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    pages?: PageCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact?: UserContactUncheckedCreateNestedOneWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    pages?: PageUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type SubsiteCreateWithoutAccountInput = {
    name: string
    slug?: string | null
    subsiteRef?: string
    logoUrl?: string | null
    logoSvg?: string | null
    navConfig?: string | null
    headerConfig?: string | null
    footerConfig?: string | null
    siteVisibility?: string | null
    siteLanguage?: string | null
    domainName?: string | null
    domainStatus?: string | null
    domainCreatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostCreateNestedManyWithoutSubsiteInput
    pages?: PageCreateNestedManyWithoutSubsiteInput
  }

  export type SubsiteUncheckedCreateWithoutAccountInput = {
    id?: number
    name: string
    slug?: string | null
    subsiteRef?: string
    logoUrl?: string | null
    logoSvg?: string | null
    navConfig?: string | null
    headerConfig?: string | null
    footerConfig?: string | null
    siteVisibility?: string | null
    siteLanguage?: string | null
    domainName?: string | null
    domainStatus?: string | null
    domainCreatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostUncheckedCreateNestedManyWithoutSubsiteInput
    pages?: PageUncheckedCreateNestedManyWithoutSubsiteInput
  }

  export type SubsiteCreateOrConnectWithoutAccountInput = {
    where: SubsiteWhereUniqueInput
    create: XOR<SubsiteCreateWithoutAccountInput, SubsiteUncheckedCreateWithoutAccountInput>
  }

  export type SubsiteCreateManyAccountInputEnvelope = {
    data: SubsiteCreateManyAccountInput | SubsiteCreateManyAccountInput[]
    skipDuplicates?: boolean
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
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUpdateOneWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    pages?: PageUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUncheckedUpdateOneWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    pages?: PageUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type SubsiteUpsertWithWhereUniqueWithoutAccountInput = {
    where: SubsiteWhereUniqueInput
    update: XOR<SubsiteUpdateWithoutAccountInput, SubsiteUncheckedUpdateWithoutAccountInput>
    create: XOR<SubsiteCreateWithoutAccountInput, SubsiteUncheckedCreateWithoutAccountInput>
  }

  export type SubsiteUpdateWithWhereUniqueWithoutAccountInput = {
    where: SubsiteWhereUniqueInput
    data: XOR<SubsiteUpdateWithoutAccountInput, SubsiteUncheckedUpdateWithoutAccountInput>
  }

  export type SubsiteUpdateManyWithWhereWithoutAccountInput = {
    where: SubsiteScalarWhereInput
    data: XOR<SubsiteUpdateManyMutationInput, SubsiteUncheckedUpdateManyWithoutAccountInput>
  }

  export type SubsiteScalarWhereInput = {
    AND?: SubsiteScalarWhereInput | SubsiteScalarWhereInput[]
    OR?: SubsiteScalarWhereInput[]
    NOT?: SubsiteScalarWhereInput | SubsiteScalarWhereInput[]
    id?: IntFilter<"Subsite"> | number
    name?: StringFilter<"Subsite"> | string
    slug?: StringNullableFilter<"Subsite"> | string | null
    subsiteRef?: StringFilter<"Subsite"> | string
    logoUrl?: StringNullableFilter<"Subsite"> | string | null
    logoSvg?: StringNullableFilter<"Subsite"> | string | null
    navConfig?: StringNullableFilter<"Subsite"> | string | null
    headerConfig?: StringNullableFilter<"Subsite"> | string | null
    footerConfig?: StringNullableFilter<"Subsite"> | string | null
    siteVisibility?: StringNullableFilter<"Subsite"> | string | null
    siteLanguage?: StringNullableFilter<"Subsite"> | string | null
    domainName?: StringNullableFilter<"Subsite"> | string | null
    domainStatus?: StringNullableFilter<"Subsite"> | string | null
    domainCreatedAt?: DateTimeNullableFilter<"Subsite"> | Date | string | null
    accountId?: IntFilter<"Subsite"> | number
    createdAt?: DateTimeFilter<"Subsite"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Subsite"> | Date | string | null
  }

  export type PostCreateWithoutSubsiteInput = {
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    author: UserCreateNestedOneWithoutPostsInput
    categories?: CategoryCreateNestedManyWithoutPostsInput
    tags?: TagCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutSubsiteInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutSubsiteInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSubsiteInput, PostUncheckedCreateWithoutSubsiteInput>
  }

  export type PostCreateManySubsiteInputEnvelope = {
    data: PostCreateManySubsiteInput | PostCreateManySubsiteInput[]
    skipDuplicates?: boolean
  }

  export type PageCreateWithoutSubsiteInput = {
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
    author: UserCreateNestedOneWithoutPagesInput
    categories?: CategoryCreateNestedManyWithoutPagesInput
    tags?: TagCreateNestedManyWithoutPagesInput
  }

  export type PageUncheckedCreateWithoutSubsiteInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutPagesInput
    tags?: TagUncheckedCreateNestedManyWithoutPagesInput
  }

  export type PageCreateOrConnectWithoutSubsiteInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutSubsiteInput, PageUncheckedCreateWithoutSubsiteInput>
  }

  export type PageCreateManySubsiteInputEnvelope = {
    data: PageCreateManySubsiteInput | PageCreateManySubsiteInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutSubsitesInput = {
    name: string
    accountRef?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    admin: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateWithoutSubsitesInput = {
    id?: number
    name: string
    accountRef?: string
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AccountCreateOrConnectWithoutSubsitesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSubsitesInput, AccountUncheckedCreateWithoutSubsitesInput>
  }

  export type PostUpsertWithWhereUniqueWithoutSubsiteInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutSubsiteInput, PostUncheckedUpdateWithoutSubsiteInput>
    create: XOR<PostCreateWithoutSubsiteInput, PostUncheckedCreateWithoutSubsiteInput>
  }

  export type PostUpdateWithWhereUniqueWithoutSubsiteInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutSubsiteInput, PostUncheckedUpdateWithoutSubsiteInput>
  }

  export type PostUpdateManyWithWhereWithoutSubsiteInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutSubsiteInput>
  }

  export type PageUpsertWithWhereUniqueWithoutSubsiteInput = {
    where: PageWhereUniqueInput
    update: XOR<PageUpdateWithoutSubsiteInput, PageUncheckedUpdateWithoutSubsiteInput>
    create: XOR<PageCreateWithoutSubsiteInput, PageUncheckedCreateWithoutSubsiteInput>
  }

  export type PageUpdateWithWhereUniqueWithoutSubsiteInput = {
    where: PageWhereUniqueInput
    data: XOR<PageUpdateWithoutSubsiteInput, PageUncheckedUpdateWithoutSubsiteInput>
  }

  export type PageUpdateManyWithWhereWithoutSubsiteInput = {
    where: PageScalarWhereInput
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutSubsiteInput>
  }

  export type AccountUpsertWithoutSubsitesInput = {
    update: XOR<AccountUpdateWithoutSubsitesInput, AccountUncheckedUpdateWithoutSubsitesInput>
    create: XOR<AccountCreateWithoutSubsitesInput, AccountUncheckedCreateWithoutSubsitesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutSubsitesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutSubsitesInput, AccountUncheckedUpdateWithoutSubsitesInput>
  }

  export type AccountUpdateWithoutSubsitesInput = {
    name?: StringFieldUpdateOperationsInput | string
    accountRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateWithoutSubsitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accountRef?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact?: UserContactCreateNestedOneWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    pages?: PageCreateNestedManyWithoutAuthorInput
    accounts?: AccountCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact?: UserContactUncheckedCreateNestedOneWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    pages?: PageUncheckedCreateNestedManyWithoutAuthorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CategoryCreateWithoutPostsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pages?: PageCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pages?: PageUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type TagCreateWithoutPostsInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pages?: PageCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pages?: PageUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type SubsiteCreateWithoutPostsInput = {
    name: string
    slug?: string | null
    subsiteRef?: string
    logoUrl?: string | null
    logoSvg?: string | null
    navConfig?: string | null
    headerConfig?: string | null
    footerConfig?: string | null
    siteVisibility?: string | null
    siteLanguage?: string | null
    domainName?: string | null
    domainStatus?: string | null
    domainCreatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pages?: PageCreateNestedManyWithoutSubsiteInput
    account: AccountCreateNestedOneWithoutSubsitesInput
  }

  export type SubsiteUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    slug?: string | null
    subsiteRef?: string
    logoUrl?: string | null
    logoSvg?: string | null
    navConfig?: string | null
    headerConfig?: string | null
    footerConfig?: string | null
    siteVisibility?: string | null
    siteLanguage?: string | null
    domainName?: string | null
    domainStatus?: string | null
    domainCreatedAt?: Date | string | null
    accountId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pages?: PageUncheckedCreateNestedManyWithoutSubsiteInput
  }

  export type SubsiteCreateOrConnectWithoutPostsInput = {
    where: SubsiteWhereUniqueInput
    create: XOR<SubsiteCreateWithoutPostsInput, SubsiteUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUpdateOneWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    pages?: PageUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUncheckedUpdateOneWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    pages?: PageUncheckedUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateManyWithWhereWithoutPostsInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutPostsInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
  }

  export type TagUpsertWithWhereUniqueWithoutPostsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutPostsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
  }

  export type TagUpdateManyWithWhereWithoutPostsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutPostsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    description?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Tag"> | Date | string | null
  }

  export type SubsiteUpsertWithoutPostsInput = {
    update: XOR<SubsiteUpdateWithoutPostsInput, SubsiteUncheckedUpdateWithoutPostsInput>
    create: XOR<SubsiteCreateWithoutPostsInput, SubsiteUncheckedCreateWithoutPostsInput>
    where?: SubsiteWhereInput
  }

  export type SubsiteUpdateToOneWithWhereWithoutPostsInput = {
    where?: SubsiteWhereInput
    data: XOR<SubsiteUpdateWithoutPostsInput, SubsiteUncheckedUpdateWithoutPostsInput>
  }

  export type SubsiteUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: PageUpdateManyWithoutSubsiteNestedInput
    account?: AccountUpdateOneRequiredWithoutSubsitesNestedInput
  }

  export type SubsiteUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: PageUncheckedUpdateManyWithoutSubsiteNestedInput
  }

  export type UserCreateWithoutPagesInput = {
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact?: UserContactCreateNestedOneWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    accounts?: AccountCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutPagesInput = {
    id?: number
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact?: UserContactUncheckedCreateNestedOneWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutPagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPagesInput, UserUncheckedCreateWithoutPagesInput>
  }

  export type CategoryCreateWithoutPagesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutPagesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutPagesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPagesInput, CategoryUncheckedCreateWithoutPagesInput>
  }

  export type TagCreateWithoutPagesInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutPagesInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutPagesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPagesInput, TagUncheckedCreateWithoutPagesInput>
  }

  export type SubsiteCreateWithoutPagesInput = {
    name: string
    slug?: string | null
    subsiteRef?: string
    logoUrl?: string | null
    logoSvg?: string | null
    navConfig?: string | null
    headerConfig?: string | null
    footerConfig?: string | null
    siteVisibility?: string | null
    siteLanguage?: string | null
    domainName?: string | null
    domainStatus?: string | null
    domainCreatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostCreateNestedManyWithoutSubsiteInput
    account: AccountCreateNestedOneWithoutSubsitesInput
  }

  export type SubsiteUncheckedCreateWithoutPagesInput = {
    id?: number
    name: string
    slug?: string | null
    subsiteRef?: string
    logoUrl?: string | null
    logoSvg?: string | null
    navConfig?: string | null
    headerConfig?: string | null
    footerConfig?: string | null
    siteVisibility?: string | null
    siteLanguage?: string | null
    domainName?: string | null
    domainStatus?: string | null
    domainCreatedAt?: Date | string | null
    accountId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    posts?: PostUncheckedCreateNestedManyWithoutSubsiteInput
  }

  export type SubsiteCreateOrConnectWithoutPagesInput = {
    where: SubsiteWhereUniqueInput
    create: XOR<SubsiteCreateWithoutPagesInput, SubsiteUncheckedCreateWithoutPagesInput>
  }

  export type UserUpsertWithoutPagesInput = {
    update: XOR<UserUpdateWithoutPagesInput, UserUncheckedUpdateWithoutPagesInput>
    create: XOR<UserCreateWithoutPagesInput, UserUncheckedCreateWithoutPagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPagesInput, UserUncheckedUpdateWithoutPagesInput>
  }

  export type UserUpdateWithoutPagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUpdateOneWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutPagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUncheckedUpdateOneWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutPagesInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutPagesInput, CategoryUncheckedUpdateWithoutPagesInput>
    create: XOR<CategoryCreateWithoutPagesInput, CategoryUncheckedCreateWithoutPagesInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutPagesInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutPagesInput, CategoryUncheckedUpdateWithoutPagesInput>
  }

  export type CategoryUpdateManyWithWhereWithoutPagesInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutPagesInput>
  }

  export type TagUpsertWithWhereUniqueWithoutPagesInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutPagesInput, TagUncheckedUpdateWithoutPagesInput>
    create: XOR<TagCreateWithoutPagesInput, TagUncheckedCreateWithoutPagesInput>
  }

  export type TagUpdateWithWhereUniqueWithoutPagesInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutPagesInput, TagUncheckedUpdateWithoutPagesInput>
  }

  export type TagUpdateManyWithWhereWithoutPagesInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutPagesInput>
  }

  export type SubsiteUpsertWithoutPagesInput = {
    update: XOR<SubsiteUpdateWithoutPagesInput, SubsiteUncheckedUpdateWithoutPagesInput>
    create: XOR<SubsiteCreateWithoutPagesInput, SubsiteUncheckedCreateWithoutPagesInput>
    where?: SubsiteWhereInput
  }

  export type SubsiteUpdateToOneWithWhereWithoutPagesInput = {
    where?: SubsiteWhereInput
    data: XOR<SubsiteUpdateWithoutPagesInput, SubsiteUncheckedUpdateWithoutPagesInput>
  }

  export type SubsiteUpdateWithoutPagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUpdateManyWithoutSubsiteNestedInput
    account?: AccountUpdateOneRequiredWithoutSubsitesNestedInput
  }

  export type SubsiteUncheckedUpdateWithoutPagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUncheckedUpdateManyWithoutSubsiteNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact?: UserContactCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    pages?: PageCreateNestedManyWithoutAuthorInput
    accounts?: AccountCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    contact?: UserContactUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    pages?: PageUncheckedCreateNestedManyWithoutAuthorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    pages?: PageUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contact?: UserContactUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    pages?: PageUncheckedUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserContactCreateWithoutAddressInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    email?: ContactEmailCreateNestedOneWithoutContactInput
    phone?: ContactPhoneCreateNestedOneWithoutContactInput
    website?: ContactWebsiteCreateNestedOneWithoutContactInput
    user: UserCreateNestedOneWithoutContactInput
  }

  export type UserContactUncheckedCreateWithoutAddressInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    email?: ContactEmailUncheckedCreateNestedOneWithoutContactInput
    phone?: ContactPhoneUncheckedCreateNestedOneWithoutContactInput
    website?: ContactWebsiteUncheckedCreateNestedOneWithoutContactInput
  }

  export type UserContactCreateOrConnectWithoutAddressInput = {
    where: UserContactWhereUniqueInput
    create: XOR<UserContactCreateWithoutAddressInput, UserContactUncheckedCreateWithoutAddressInput>
  }

  export type UserContactUpsertWithoutAddressInput = {
    update: XOR<UserContactUpdateWithoutAddressInput, UserContactUncheckedUpdateWithoutAddressInput>
    create: XOR<UserContactCreateWithoutAddressInput, UserContactUncheckedCreateWithoutAddressInput>
    where?: UserContactWhereInput
  }

  export type UserContactUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserContactWhereInput
    data: XOR<UserContactUpdateWithoutAddressInput, UserContactUncheckedUpdateWithoutAddressInput>
  }

  export type UserContactUpdateWithoutAddressInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: ContactEmailUpdateOneWithoutContactNestedInput
    phone?: ContactPhoneUpdateOneWithoutContactNestedInput
    website?: ContactWebsiteUpdateOneWithoutContactNestedInput
    user?: UserUpdateOneRequiredWithoutContactNestedInput
  }

  export type UserContactUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: ContactEmailUncheckedUpdateOneWithoutContactNestedInput
    phone?: ContactPhoneUncheckedUpdateOneWithoutContactNestedInput
    website?: ContactWebsiteUncheckedUpdateOneWithoutContactNestedInput
  }

  export type UserContactCreateWithoutEmailInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    phone?: ContactPhoneCreateNestedOneWithoutContactInput
    address?: ContactAddressCreateNestedOneWithoutContactInput
    website?: ContactWebsiteCreateNestedOneWithoutContactInput
    user: UserCreateNestedOneWithoutContactInput
  }

  export type UserContactUncheckedCreateWithoutEmailInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    phone?: ContactPhoneUncheckedCreateNestedOneWithoutContactInput
    address?: ContactAddressUncheckedCreateNestedOneWithoutContactInput
    website?: ContactWebsiteUncheckedCreateNestedOneWithoutContactInput
  }

  export type UserContactCreateOrConnectWithoutEmailInput = {
    where: UserContactWhereUniqueInput
    create: XOR<UserContactCreateWithoutEmailInput, UserContactUncheckedCreateWithoutEmailInput>
  }

  export type UserContactUpsertWithoutEmailInput = {
    update: XOR<UserContactUpdateWithoutEmailInput, UserContactUncheckedUpdateWithoutEmailInput>
    create: XOR<UserContactCreateWithoutEmailInput, UserContactUncheckedCreateWithoutEmailInput>
    where?: UserContactWhereInput
  }

  export type UserContactUpdateToOneWithWhereWithoutEmailInput = {
    where?: UserContactWhereInput
    data: XOR<UserContactUpdateWithoutEmailInput, UserContactUncheckedUpdateWithoutEmailInput>
  }

  export type UserContactUpdateWithoutEmailInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: ContactPhoneUpdateOneWithoutContactNestedInput
    address?: ContactAddressUpdateOneWithoutContactNestedInput
    website?: ContactWebsiteUpdateOneWithoutContactNestedInput
    user?: UserUpdateOneRequiredWithoutContactNestedInput
  }

  export type UserContactUncheckedUpdateWithoutEmailInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: ContactPhoneUncheckedUpdateOneWithoutContactNestedInput
    address?: ContactAddressUncheckedUpdateOneWithoutContactNestedInput
    website?: ContactWebsiteUncheckedUpdateOneWithoutContactNestedInput
  }

  export type UserContactCreateWithoutPhoneInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    email?: ContactEmailCreateNestedOneWithoutContactInput
    address?: ContactAddressCreateNestedOneWithoutContactInput
    website?: ContactWebsiteCreateNestedOneWithoutContactInput
    user: UserCreateNestedOneWithoutContactInput
  }

  export type UserContactUncheckedCreateWithoutPhoneInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    email?: ContactEmailUncheckedCreateNestedOneWithoutContactInput
    address?: ContactAddressUncheckedCreateNestedOneWithoutContactInput
    website?: ContactWebsiteUncheckedCreateNestedOneWithoutContactInput
  }

  export type UserContactCreateOrConnectWithoutPhoneInput = {
    where: UserContactWhereUniqueInput
    create: XOR<UserContactCreateWithoutPhoneInput, UserContactUncheckedCreateWithoutPhoneInput>
  }

  export type UserContactUpsertWithoutPhoneInput = {
    update: XOR<UserContactUpdateWithoutPhoneInput, UserContactUncheckedUpdateWithoutPhoneInput>
    create: XOR<UserContactCreateWithoutPhoneInput, UserContactUncheckedCreateWithoutPhoneInput>
    where?: UserContactWhereInput
  }

  export type UserContactUpdateToOneWithWhereWithoutPhoneInput = {
    where?: UserContactWhereInput
    data: XOR<UserContactUpdateWithoutPhoneInput, UserContactUncheckedUpdateWithoutPhoneInput>
  }

  export type UserContactUpdateWithoutPhoneInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: ContactEmailUpdateOneWithoutContactNestedInput
    address?: ContactAddressUpdateOneWithoutContactNestedInput
    website?: ContactWebsiteUpdateOneWithoutContactNestedInput
    user?: UserUpdateOneRequiredWithoutContactNestedInput
  }

  export type UserContactUncheckedUpdateWithoutPhoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: ContactEmailUncheckedUpdateOneWithoutContactNestedInput
    address?: ContactAddressUncheckedUpdateOneWithoutContactNestedInput
    website?: ContactWebsiteUncheckedUpdateOneWithoutContactNestedInput
  }

  export type UserContactCreateWithoutWebsiteInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    email?: ContactEmailCreateNestedOneWithoutContactInput
    phone?: ContactPhoneCreateNestedOneWithoutContactInput
    address?: ContactAddressCreateNestedOneWithoutContactInput
    user: UserCreateNestedOneWithoutContactInput
  }

  export type UserContactUncheckedCreateWithoutWebsiteInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    email?: ContactEmailUncheckedCreateNestedOneWithoutContactInput
    phone?: ContactPhoneUncheckedCreateNestedOneWithoutContactInput
    address?: ContactAddressUncheckedCreateNestedOneWithoutContactInput
  }

  export type UserContactCreateOrConnectWithoutWebsiteInput = {
    where: UserContactWhereUniqueInput
    create: XOR<UserContactCreateWithoutWebsiteInput, UserContactUncheckedCreateWithoutWebsiteInput>
  }

  export type UserContactUpsertWithoutWebsiteInput = {
    update: XOR<UserContactUpdateWithoutWebsiteInput, UserContactUncheckedUpdateWithoutWebsiteInput>
    create: XOR<UserContactCreateWithoutWebsiteInput, UserContactUncheckedCreateWithoutWebsiteInput>
    where?: UserContactWhereInput
  }

  export type UserContactUpdateToOneWithWhereWithoutWebsiteInput = {
    where?: UserContactWhereInput
    data: XOR<UserContactUpdateWithoutWebsiteInput, UserContactUncheckedUpdateWithoutWebsiteInput>
  }

  export type UserContactUpdateWithoutWebsiteInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: ContactEmailUpdateOneWithoutContactNestedInput
    phone?: ContactPhoneUpdateOneWithoutContactNestedInput
    address?: ContactAddressUpdateOneWithoutContactNestedInput
    user?: UserUpdateOneRequiredWithoutContactNestedInput
  }

  export type UserContactUncheckedUpdateWithoutWebsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: ContactEmailUncheckedUpdateOneWithoutContactNestedInput
    phone?: ContactPhoneUncheckedUpdateOneWithoutContactNestedInput
    address?: ContactAddressUncheckedUpdateOneWithoutContactNestedInput
  }

  export type ContactEmailCreateWithoutContactInput = {
    primaryEmail: string
    primaryEmailType: string
    secondaryEmail?: string | null
    secondaryEmailType?: string | null
    tertiaryEmail?: string | null
    tertiaryEmailType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactEmailUncheckedCreateWithoutContactInput = {
    id?: number
    primaryEmail: string
    primaryEmailType: string
    secondaryEmail?: string | null
    secondaryEmailType?: string | null
    tertiaryEmail?: string | null
    tertiaryEmailType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactEmailCreateOrConnectWithoutContactInput = {
    where: ContactEmailWhereUniqueInput
    create: XOR<ContactEmailCreateWithoutContactInput, ContactEmailUncheckedCreateWithoutContactInput>
  }

  export type ContactPhoneCreateWithoutContactInput = {
    primaryPhone: string
    primaryPhoneType: string
    secondaryPhone?: string | null
    secondaryPhoneType?: string | null
    tertiaryPhone?: string | null
    tertiaryPhoneType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactPhoneUncheckedCreateWithoutContactInput = {
    id?: number
    primaryPhone: string
    primaryPhoneType: string
    secondaryPhone?: string | null
    secondaryPhoneType?: string | null
    tertiaryPhone?: string | null
    tertiaryPhoneType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactPhoneCreateOrConnectWithoutContactInput = {
    where: ContactPhoneWhereUniqueInput
    create: XOR<ContactPhoneCreateWithoutContactInput, ContactPhoneUncheckedCreateWithoutContactInput>
  }

  export type ContactAddressCreateWithoutContactInput = {
    line1: string
    line2?: string | null
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactAddressUncheckedCreateWithoutContactInput = {
    id?: number
    line1: string
    line2?: string | null
    city: string
    state: string
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactAddressCreateOrConnectWithoutContactInput = {
    where: ContactAddressWhereUniqueInput
    create: XOR<ContactAddressCreateWithoutContactInput, ContactAddressUncheckedCreateWithoutContactInput>
  }

  export type ContactWebsiteCreateWithoutContactInput = {
    primaryUrl: string
    primaryUrlType: string
    secondaryUrl?: string | null
    secondaryUrlType?: string | null
    tertiaryUrl?: string | null
    tertiaryUrlType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactWebsiteUncheckedCreateWithoutContactInput = {
    id?: number
    primaryUrl: string
    primaryUrlType: string
    secondaryUrl?: string | null
    secondaryUrlType?: string | null
    tertiaryUrl?: string | null
    tertiaryUrlType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactWebsiteCreateOrConnectWithoutContactInput = {
    where: ContactWebsiteWhereUniqueInput
    create: XOR<ContactWebsiteCreateWithoutContactInput, ContactWebsiteUncheckedCreateWithoutContactInput>
  }

  export type UserCreateWithoutContactInput = {
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    pages?: PageCreateNestedManyWithoutAuthorInput
    accounts?: AccountCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutContactInput = {
    id?: number
    email: string
    name?: string | null
    description?: string | null
    token?: string | null
    prefix?: string | null
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    suffix?: string | null
    preferredName?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    local?: string | null
    timeZone?: string | null
    lastLoginTime?: Date | string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    pages?: PageUncheckedCreateNestedManyWithoutAuthorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutContactInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactInput, UserUncheckedCreateWithoutContactInput>
  }

  export type ContactEmailUpsertWithoutContactInput = {
    update: XOR<ContactEmailUpdateWithoutContactInput, ContactEmailUncheckedUpdateWithoutContactInput>
    create: XOR<ContactEmailCreateWithoutContactInput, ContactEmailUncheckedCreateWithoutContactInput>
    where?: ContactEmailWhereInput
  }

  export type ContactEmailUpdateToOneWithWhereWithoutContactInput = {
    where?: ContactEmailWhereInput
    data: XOR<ContactEmailUpdateWithoutContactInput, ContactEmailUncheckedUpdateWithoutContactInput>
  }

  export type ContactEmailUpdateWithoutContactInput = {
    primaryEmail?: StringFieldUpdateOperationsInput | string
    primaryEmailType?: StringFieldUpdateOperationsInput | string
    secondaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactEmailUncheckedUpdateWithoutContactInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryEmail?: StringFieldUpdateOperationsInput | string
    primaryEmailType?: StringFieldUpdateOperationsInput | string
    secondaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryEmailType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactPhoneUpsertWithoutContactInput = {
    update: XOR<ContactPhoneUpdateWithoutContactInput, ContactPhoneUncheckedUpdateWithoutContactInput>
    create: XOR<ContactPhoneCreateWithoutContactInput, ContactPhoneUncheckedCreateWithoutContactInput>
    where?: ContactPhoneWhereInput
  }

  export type ContactPhoneUpdateToOneWithWhereWithoutContactInput = {
    where?: ContactPhoneWhereInput
    data: XOR<ContactPhoneUpdateWithoutContactInput, ContactPhoneUncheckedUpdateWithoutContactInput>
  }

  export type ContactPhoneUpdateWithoutContactInput = {
    primaryPhone?: StringFieldUpdateOperationsInput | string
    primaryPhoneType?: StringFieldUpdateOperationsInput | string
    secondaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactPhoneUncheckedUpdateWithoutContactInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryPhone?: StringFieldUpdateOperationsInput | string
    primaryPhoneType?: StringFieldUpdateOperationsInput | string
    secondaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhone?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryPhoneType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactAddressUpsertWithoutContactInput = {
    update: XOR<ContactAddressUpdateWithoutContactInput, ContactAddressUncheckedUpdateWithoutContactInput>
    create: XOR<ContactAddressCreateWithoutContactInput, ContactAddressUncheckedCreateWithoutContactInput>
    where?: ContactAddressWhereInput
  }

  export type ContactAddressUpdateToOneWithWhereWithoutContactInput = {
    where?: ContactAddressWhereInput
    data: XOR<ContactAddressUpdateWithoutContactInput, ContactAddressUncheckedUpdateWithoutContactInput>
  }

  export type ContactAddressUpdateWithoutContactInput = {
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactAddressUncheckedUpdateWithoutContactInput = {
    id?: IntFieldUpdateOperationsInput | number
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactWebsiteUpsertWithoutContactInput = {
    update: XOR<ContactWebsiteUpdateWithoutContactInput, ContactWebsiteUncheckedUpdateWithoutContactInput>
    create: XOR<ContactWebsiteCreateWithoutContactInput, ContactWebsiteUncheckedCreateWithoutContactInput>
    where?: ContactWebsiteWhereInput
  }

  export type ContactWebsiteUpdateToOneWithWhereWithoutContactInput = {
    where?: ContactWebsiteWhereInput
    data: XOR<ContactWebsiteUpdateWithoutContactInput, ContactWebsiteUncheckedUpdateWithoutContactInput>
  }

  export type ContactWebsiteUpdateWithoutContactInput = {
    primaryUrl?: StringFieldUpdateOperationsInput | string
    primaryUrlType?: StringFieldUpdateOperationsInput | string
    secondaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactWebsiteUncheckedUpdateWithoutContactInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryUrl?: StringFieldUpdateOperationsInput | string
    primaryUrlType?: StringFieldUpdateOperationsInput | string
    secondaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tertiaryUrlType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutContactInput = {
    update: XOR<UserUpdateWithoutContactInput, UserUncheckedUpdateWithoutContactInput>
    create: XOR<UserCreateWithoutContactInput, UserUncheckedCreateWithoutContactInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactInput, UserUncheckedUpdateWithoutContactInput>
  }

  export type UserUpdateWithoutContactInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    pages?: PageUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutContactInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    suffix?: NullableStringFieldUpdateOperationsInput | string | null
    preferredName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    local?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    pages?: PageUncheckedUpdateManyWithoutAuthorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type PostCreateWithoutCategoriesInput = {
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    author: UserCreateNestedOneWithoutPostsInput
    tags?: TagCreateNestedManyWithoutPostsInput
    subsite: SubsiteCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    authorId: number
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type PageCreateWithoutCategoriesInput = {
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
    author: UserCreateNestedOneWithoutPagesInput
    tags?: TagCreateNestedManyWithoutPagesInput
    subsite: SubsiteCreateNestedOneWithoutPagesInput
  }

  export type PageUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    authorId: number
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
    tags?: TagUncheckedCreateNestedManyWithoutPagesInput
  }

  export type PageCreateOrConnectWithoutCategoriesInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutCategoriesInput, PageUncheckedCreateWithoutCategoriesInput>
  }

  export type PostUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
  }

  export type PostUpdateManyWithWhereWithoutCategoriesInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type PageUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: PageWhereUniqueInput
    update: XOR<PageUpdateWithoutCategoriesInput, PageUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PageCreateWithoutCategoriesInput, PageUncheckedCreateWithoutCategoriesInput>
  }

  export type PageUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: PageWhereUniqueInput
    data: XOR<PageUpdateWithoutCategoriesInput, PageUncheckedUpdateWithoutCategoriesInput>
  }

  export type PageUpdateManyWithWhereWithoutCategoriesInput = {
    where: PageScalarWhereInput
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type PostCreateWithoutTagsInput = {
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    author: UserCreateNestedOneWithoutPostsInput
    categories?: CategoryCreateNestedManyWithoutPostsInput
    subsite: SubsiteCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    authorId: number
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type PageCreateWithoutTagsInput = {
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
    author: UserCreateNestedOneWithoutPagesInput
    categories?: CategoryCreateNestedManyWithoutPagesInput
    subsite: SubsiteCreateNestedOneWithoutPagesInput
  }

  export type PageUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    authorId: number
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutPagesInput
  }

  export type PageCreateOrConnectWithoutTagsInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutTagsInput, PageUncheckedCreateWithoutTagsInput>
  }

  export type PostUpsertWithWhereUniqueWithoutTagsInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type PostUpdateWithWhereUniqueWithoutTagsInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
  }

  export type PostUpdateManyWithWhereWithoutTagsInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutTagsInput>
  }

  export type PageUpsertWithWhereUniqueWithoutTagsInput = {
    where: PageWhereUniqueInput
    update: XOR<PageUpdateWithoutTagsInput, PageUncheckedUpdateWithoutTagsInput>
    create: XOR<PageCreateWithoutTagsInput, PageUncheckedCreateWithoutTagsInput>
  }

  export type PageUpdateWithWhereUniqueWithoutTagsInput = {
    where: PageWhereUniqueInput
    data: XOR<PageUpdateWithoutTagsInput, PageUncheckedUpdateWithoutTagsInput>
  }

  export type PageUpdateManyWithWhereWithoutTagsInput = {
    where: PageScalarWhereInput
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutTagsInput>
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PageCreateManyAuthorInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    subsiteId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
  }

  export type AccountCreateManyAdminInput = {
    id?: number
    name: string
    accountRef?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: CategoryUpdateManyWithoutPostsNestedInput
    tags?: TagUpdateManyWithoutPostsNestedInput
    subsite?: SubsiteUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUpdateManyWithoutPagesNestedInput
    tags?: TagUpdateManyWithoutPagesNestedInput
    subsite?: SubsiteUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutPagesNestedInput
    tags?: TagUncheckedUpdateManyWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
  }

  export type AccountUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    accountRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsites?: SubsiteUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accountRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subsites?: SubsiteUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accountRef?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubsiteCreateManyAccountInput = {
    id?: number
    name: string
    slug?: string | null
    subsiteRef?: string
    logoUrl?: string | null
    logoSvg?: string | null
    navConfig?: string | null
    headerConfig?: string | null
    footerConfig?: string | null
    siteVisibility?: string | null
    siteLanguage?: string | null
    domainName?: string | null
    domainStatus?: string | null
    domainCreatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SubsiteUpdateWithoutAccountInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUpdateManyWithoutSubsiteNestedInput
    pages?: PageUpdateManyWithoutSubsiteNestedInput
  }

  export type SubsiteUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUncheckedUpdateManyWithoutSubsiteNestedInput
    pages?: PageUncheckedUpdateManyWithoutSubsiteNestedInput
  }

  export type SubsiteUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    subsiteRef?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoSvg?: NullableStringFieldUpdateOperationsInput | string | null
    navConfig?: NullableStringFieldUpdateOperationsInput | string | null
    headerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    footerConfig?: NullableStringFieldUpdateOperationsInput | string | null
    siteVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    siteLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    domainStatus?: NullableStringFieldUpdateOperationsInput | string | null
    domainCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostCreateManySubsiteInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    coverImage?: string | null
    status?: $Enums.ContentStatus
    published?: boolean
    publishedAt?: Date | string | null
    deleted?: boolean
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PageCreateManySubsiteInput = {
    id?: number
    title: string
    overview?: string
    content?: string | null
    slug?: string | null
    status?: $Enums.ContentStatus
    publishedAt?: Date | string | null
    published?: boolean
    coverImage?: string | null
    layoutTemplate?: string | null
    theme?: string | null
    metaData?: string | null
    seoSettings?: string | null
    analyticsCodes?: string | null
    showOnNav?: boolean
    deleted?: boolean
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pageOrder?: number
    parentPageId?: number
  }

  export type PostUpdateWithoutSubsiteInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    categories?: CategoryUpdateManyWithoutPostsNestedInput
    tags?: TagUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutSubsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutSubsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageUpdateWithoutSubsiteInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutPagesNestedInput
    categories?: CategoryUpdateManyWithoutPagesNestedInput
    tags?: TagUpdateManyWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateWithoutSubsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutPagesNestedInput
    tags?: TagUncheckedUpdateManyWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateManyWithoutSubsiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: PageUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: PageUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: PageUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pages?: PageUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUpdateWithoutPagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutPagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagUpdateWithoutPagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutPagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutPagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    tags?: TagUpdateManyWithoutPostsNestedInput
    subsite?: SubsiteUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutPagesNestedInput
    tags?: TagUpdateManyWithoutPagesNestedInput
    subsite?: SubsiteUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
  }

  export type PostUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    categories?: CategoryUpdateManyWithoutPostsNestedInput
    subsite?: SubsiteUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    published?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PageUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutPagesNestedInput
    categories?: CategoryUpdateManyWithoutPagesNestedInput
    subsite?: SubsiteUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumContentStatusFieldUpdateOperationsInput | $Enums.ContentStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    layoutTemplate?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    metaData?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettings?: NullableStringFieldUpdateOperationsInput | string | null
    analyticsCodes?: NullableStringFieldUpdateOperationsInput | string | null
    showOnNav?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    subsiteId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pageOrder?: IntFieldUpdateOperationsInput | number
    parentPageId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubsiteCountOutputTypeDefaultArgs instead
     */
    export type SubsiteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubsiteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PageCountOutputTypeDefaultArgs instead
     */
    export type PageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubsiteDefaultArgs instead
     */
    export type SubsiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubsiteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PageDefaultArgs instead
     */
    export type PageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserProfileDefaultArgs instead
     */
    export type UserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactAddressDefaultArgs instead
     */
    export type ContactAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactAddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactEmailDefaultArgs instead
     */
    export type ContactEmailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactEmailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactPhoneDefaultArgs instead
     */
    export type ContactPhoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactPhoneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactWebsiteDefaultArgs instead
     */
    export type ContactWebsiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactWebsiteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserContactDefaultArgs instead
     */
    export type UserContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>

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