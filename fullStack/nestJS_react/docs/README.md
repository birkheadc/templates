# NestJS & React

This is my current working template for creating full stack applications. It uses a NestJS REST API on the backend, React on the frontend, and integrates with AWS for deployment.

## How to Create

- Copy most of the folders and files in the root directory to a new directory.
  - Do not copy the following:
    - backend/.serverless
    - backend/dist
    - backend/node_modules
    - frontend/node_modules

- Create .env files (.env is not included in the repository as it is in .gitignore)
  - backend/env/.env.development
  - backend/env/.env.production
  - frontend/.env

- Replace all instances of `nextjsreacttemplate` in all files with the name of the new project.

- Initialize the git repo if using git: `git init`

- Install node packages in frontend and backend
  - `npm install --prefix frontend && npm install --prefix backend`

- Make sure the app works.
  - Grant executable permission to `start.sh` in the root directory, then run it with `./start.sh`.
  - Attempt to login with the credentials `admin`/`password`. If it works, the front- and back-end are connecting properly.

- Delete the contents of this README from the new project if you like.

# Deployment

## Backend
Backend deployment is done with Serverless. `serverless.yml` in the backend's root directory contains all the instructions Serverless needs to deploy the backend, including creating API Gateway, Lambda, and DynamoDB tables.

### Secrets
The only thing that must be manually created are the Secrets used by the app.

The template needs only one secret: the secret used to sign jwt tokens for authentication.

Create secrets however you like on AWS Secret Manager. AuthConfig expects the name of the Secret as the `secretId`, and the name of the secret (the key on the secret object that pertains to the JWT signing key) as `secretName`.

### Development
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

### Serverless Config
My serverless configuration has gotten difficult to follow, so I'll explain it here before I forget.

The `serverless` directory contains a script to seed the database after deploying (to AWS, not locally) and the data to be seeded (the data IS used both locally and on AWS)

`serverless.yml.custom` contains instructions for plugins to help streamline deployment.

`custom.serverless-dynamodb` contains information for the LOCAL instance of DynamoDB. `custom.serverless-dynamodb.seed` is where data to be seeded to the DynamoDB should be declared. Again, this section DOES NOT HAVE ANYTHING TO DO with production deployment to AWS.

`custom.scriptable` is where custome scripts to be run when deploying to AWS can be configured. At the moment, the only one is a script that seeds the database after deployment is finalized.

In `provider`, an IAM role is declared. This is the role that Serverless will create on our behalf. Any services not created by Serverless, that this role needs to access, should be declared here. Serverless will grant the newly created role the necessary permissions.

`resources` are where additional services can be declared, and Serverless will create them. At the moment, the only one is the DynamoDB table for Users. This DynamoDB table is also created when deploying locally. I would like to declare Secrets here eventually as well.

The `functions` section is simply where we declare the lambda handler function that is the entry point once deployed to lambda.

## Frontend
Frontend deployment is done through AWS Amplify. For now this is done manually, but only needs to be done once. Then continuous deployment is setup to update with every push to the repository.
  - Create a new app on Amplify. Select 'Host we app'
  - Select Github
  - Select the repository
    - If using a monorepo:
      - Check the box and type in the root directory of the app
      - Make sure `appRoot` in `amplify.yml` and what you type here match exactly
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