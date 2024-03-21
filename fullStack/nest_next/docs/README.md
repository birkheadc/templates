# Nest & Next

This is my current working template for creating full stack applications. It uses a NestJS REST API on the backend, Next / React on the frontend, Tailwind for styling, and integrates with AWS for deployment.

## How to create

- Copy most of the folders and files in the root directory to a new directory.
  - Do not copy the following:
    - backend/.serverless
    - backend/dist
    - backend/node_modules
    - frontend/node_modules
    - frontend/.next

- Create .env files (.env is not included in the repository as it is in .gitignore)
  - backend/env/.env.development
  - backend/env/.env.production

- Replace all instances of `nestnexttemplate` in all files with the name of the new project.

- Initialize the git repo if using git: `git init`

- Install node packages in frontend and backend
  - `npm install --prefix frontend && npm install --prefix backend`

- Make sure the app works.
  - Grant executable permission to `start.sh` in the root directory, then run it with `./start.sh`.
  - Attempt to login with the credentials `admin`/`password`. If it works, everything is deploying locally correctly.

- Delete the contents of this README from the new project if you like.

# Backend

## Secrets
Secrets are handled by the `SecretsModule`. `SecretsService.createAsync` connects to AWS Secret Manager and populates itself with the secrets declared in `SecretsConfig.secretNames`.

When deploying, these secrets must be created manually. The ID of the secret should be set in the environment variable `AWS_SECRET_ID`, and the key on that secret object should be in `AWS_AUTH_JWT_SECRET_NAME`.

`SecretsService.createDev` is run instead in development, which creates an instance of `SecretsService` and populates every secret in `SecretsConfig.secretNames` with the same secret, which should be declared in `AWS_DEV_SECRET_VALUE`.

## Deployment
Backend deployment is done with Serverless. `serverless.yml` in the backend's root directory contains all the instructions Serverless needs to deploy the backend, including creating API Gateway, Lambda, and DynamoDB tables.

## Development
Development also uses Serverless, serverless-offline to be exact. This replicates deployment on AWS, using a local instance of DynamoDB. Run `npm run start:serverless` to launch in this mode. `start.sh` in the root directory uses this command.

### Packages
There are a number of packages related to Serverless that I use in combination to create a more seamless development -> production pipeline.

#### @codegenie/serverless-express
The main package that handles deploying to AWS. Creates most necessary services automatically. Currently, AWS secrets must be created manually, though I hope to change that.

#### serverless-offline
Allows deploying to a local, offline simulation of AWS for development purposes.

#### serverless-dynamodb
Spins up and uses a local instance of DynamoDB when deploying offline. A fork of `serverless-dynamodb-local`, which is apparently no longer maintained.

#### serverless-scriptable-plugin
Allows the execution of arbitrary commands when deploying (does not work with serverless-offline). I use this mainly to run a script to seed the database after deploying.

#### @haftahave/serverless-ses-template
Allows Simple Email Service templates to be configured automatically by serverless. Templates are defined in `backend/serverless/sesEmailTemplates/index.mjs`

Templates ( and email in general ) is always done through production, so templates must be deployed to be used. Deploy only templates with `sls ses-template deploy`.

## Serverless Config
My serverless configuration has gotten difficult to follow, so I'll explain it here before I forget.

The `serverless` directory contains a script to seed the database after deploying (to AWS, not locally) and the data to be seeded (the data IS used both locally and on AWS)

`serverless.yml.custom` contains instructions for plugins to help streamline deployment.

`custom.serverless-dynamodb` contains information for the LOCAL instance of DynamoDB. `custom.serverless-dynamodb.seed` is where data to be seeded to the DynamoDB should be declared. Again, this section DOES NOT HAVE ANYTHING TO DO with production deployment to AWS.

`custom.scriptable` is where custome scripts to be run when deploying to AWS can be configured. At the moment, the only one is a script that seeds the database after deployment is finalized. These scripts are NOT run when deploying locally.

In `provider`, an IAM role is declared. This is the role that Serverless will create on our behalf. Any services not created by Serverless, that this role needs to access, should be declared here. Serverless will grant the newly created role the necessary permissions.

`resources` are where additional services can be declared, and Serverless will create them. At the moment, the only one is the DynamoDB table for Users. This DynamoDB table is also created when deploying locally.

The `functions` section is simply where we declare the lambda handler function that is the entry point once deployed to lambda.

# Frontend

## Deployment
Frontend deployment is done through AWS Amplify. For now this is done manually, but only needs to be done once. Then continuous deployment is setup to update with every push to the repository.
  - Create a new app on Amplify. Select 'Host web app'
  - Select Github
  - Select the repository
    - If using a monorepo:
      - Check the box and type in the root directory of the app
      - Make sure `appRoot` in `amplify.yml` and what you type here match exactly
  - Select Amazon Linux:2023 as the build image (required to build Next applications)
    - Build settings
    - Build image settings -> Edit
      - Select Amazon Linux:2023
  - In Advanced Settings, add any necessary environment variables
    - If using a monorepo:
      - Check again to make sure `AMPLIFY_MONOREPO_APP_ROOT` matches `appRoot` in `amplify.yml`
  - Save and Deploy
  - Go to Domain management to configure a custom domain
  - Go to Rewrites and redirects. Add the following rule to make React's SPA routing work:
    - Source address: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>`
    - Target address: `/index.html`
    - Type: `200 (Rewrite)`
  - From now on, every time there is a push to the repository, the app should update automatically.

## Environment Variables
The following Environment Variables need to be set up for the application to work. In Amplify, this is easy to do through the console.

- NEXT_PUBLIC_BACKEND_URL

## Localization

Next-intl is used for localization.

I have created a custom hook `useRichTranslations` to wrap next-intl's `useTranslations` hook. `useRichTranslations` keeps track of mark-up tags and how they should be displayed.

Translation injection is slightly different in client and server components. `useTranslations` can normally only be used in a server component, since client components do not have access to the full library of translations. I have remedied this by wrapping the application in a `<NextIntlClientProvider>` for now, but am also worried that this is not the best way to go about it.

I have introduced type safety to translations via `intl/messages/interface.ts`. All languages implement this interface, and `useRichTranslations` understands all the possible keys of this interface, so incorrect values are flagged by the TypeScript compiler, both in the language files, and in components trying to display translations.

In other words, messages can be extended by simply adding them to `interface.ts`. The compiler will tell the developer to add those messages in the language files. `useRichTranslations` will also only accept values that are included in the interface.

### Packages
I use a few packages beyond what Next comes with out of the box.

- clsx / tailwind-merge
  - work together to merge class strings together

- lucide-react
  - large icon library

- tw-colors
  - allows creation of color themes in tailwind

- react-country-flags
  - used to create country flag icons for language changing

- @radix-ui/react-switch
  - used to create ui switches, like the one used to switch theme

- react-hook-form
  - form framework, especially useful for validating form fields