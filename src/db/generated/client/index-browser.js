
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  name: 'name',
  accountRef: 'accountRef',
  adminId: 'adminId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubsiteScalarFieldEnum = {
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

exports.Prisma.PostScalarFieldEnum = {
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

exports.Prisma.PageScalarFieldEnum = {
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

exports.Prisma.UserProfileScalarFieldEnum = {
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

exports.Prisma.ContactAddressScalarFieldEnum = {
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

exports.Prisma.ContactEmailScalarFieldEnum = {
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

exports.Prisma.ContactPhoneScalarFieldEnum = {
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

exports.Prisma.ContactWebsiteScalarFieldEnum = {
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

exports.Prisma.UserContactScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  AUTHOR: 'AUTHOR',
  CONTRIBUTOR: 'CONTRIBUTOR',
  SUPERADMIN: 'SUPERADMIN'
};

exports.ContentStatus = exports.$Enums.ContentStatus = {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  REVIEW: 'REVIEW',
  PUBLISHED: 'PUBLISHED'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
