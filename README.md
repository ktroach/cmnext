# cmnext
 "Content Creation Made Easy" in Next.js 

Built with:
- Bun Package Manager
- Typescript
- Next.js (14 using App Router)
- tRPC
- React-Query
- Prisma
- Clerk Auth
- ContentLayer
- MD Editor
- React Hook Form
- Zod Validations
- Framer Motion
- Aceternity Animations
- Shadcn
- Tailwind 
- Vercel Platform

Features
 - Clean and organized data models 
 - Clean and simple app architecture 
 - Modern stack with Framer Motion animations
 - Security via tRPC and Clerk
 - Includes boilerplates, examples, and templates

1) Clone this repo
2) Install dependencies 
3) Setup your database
4) Create .env file 
5) Deploy to Vercel

## Install Dependencies

```
bun install
```

```
bun run shadcn:add
```

## Database Setup
> Initialize Prisma Directory and Files (only use this for starting from scratch with a new schema)
```
bunx prisma init --datasource-provider postgresql
```

> Format the Prisma Schema file 
```
bunx prisma format 
```

> Create a Migration 
```
bunx prisma migrate dev --name init
```

> Generate Prisma client 
```
bunx prisma generate
```
<sub><sub>Note: running migrations will automagically re-generate the Prisma client</sub></sub>

> No change required, but note the tRPC server depends on the Prisma Generated Client 

In order for the tRPC Server to function properly, note the location of the Prisma generated client. 

```
generator client {
  provider = "prisma-client-js"
  seed     = "prisma/seed.ts"
  output   = "../src/db/generated/client"
}
```

### Prisma Docs

https://www.prisma.io/docs

#### Prisma Schema Docs

https://www.prisma.io/docs/orm/prisma-schema

### Prisma Introduction Docs

https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma

### Prisma Quickstart

https://www.prisma.io/docs/getting-started/quickstart

### Bun Prisma Guide 

https://bun.sh/guides/ecosystem/prisma

https://www.prisma.io/docs/orm/more/comparisons/prisma-and-drizzle

https://www.basedash.com/blog/how-to-reset-and-seed-a-prisma-database

See the Useful Prisma Workflow guide below if you are new to Prisma. These are not required for setting up this project. The workflow was used when the project was first developed.  Note that You can change the Database backend to MongoDB or to different Relational Database. If you are migrating from an existing database solution, such as Mongo and Mongoose, you can introspect the database to generate your Prisma models. 

Example on how to Infer the Schema from a schemaless Mongo database: 

```
bunx prisma db pull
```

<details>
    <summary>Useful Prisma Workflow</summary>

### Installing Prisma using Bun
```
bun add -d prisma
```

### Install the Prisma Client using Bun
```
bun add @prisma/client
```

### Setup a new Prisma Project 
```
bunx prisma init
```

### Create and Initialize Schema and Migration Directory
```
bunx prisma init --datasource-provider sqlite
bunx prisma init --datasource-provider postgresql
bunx prisma init --datasource-provider mysql
bunx prisma init --datasource-provider mongodb
```

### Generate and Run Initial Migration
```
bunx prisma migrate dev --name init
```

### Migrate Changes to your DB Schema 
```
bunx prisma migrate dev
```

### Reset DB:
```
bunx prisma migrate reset
```
#### Reset does the following:
- Drop the database
- Create a new database
- Apply all migrations
- Generate the Prisma client


### Seed Data: 
```
bunx prisma db seed
```

</details>   


## Create .env file 
To run this application, you must create the .env file in the root directory of your project and provide the settings required for Prisma and Clerk.
```
# DB Settings
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NO_SSL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
DATABASE_URL=

# Clerk Auth
# pk_test, and sk_test are development keys
# For production, use pk_live, and sk_live keys (a domain is required)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

## Build and Run

```
bun run build
```

```
bun run dev
```

http://localhost:3000/


This application has been deployed and tested on the Vercel Platform (recommended). You should be able to deploy this application to other supported platforms, including: Digital Ocean, Heroku, AWS, Google Cloud, etc.





