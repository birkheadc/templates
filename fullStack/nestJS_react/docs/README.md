# NestJS & React

This is my current working template for creating full stack applications. It uses a NestJS REST API on the backend, React on the frontend, and integrates with AWS for deployment.

## How to Create

- Copy all of the folders and files in the root `basic` directory to a new directory.

- Create .env in the root directory (.env is not included in the repository as it is in .gitignore)
  - Lately I have begun to use .env only in development; I set environment variables differently in production

- Initialize the app with `npm init`, then follow the prompts.
  - entry point should be `index.tsx`

- Install dependencies and dev-dependencies with the following commands:
  - `npm install react react-dom react-router-dom react-modal`
  - `npm install --save-dev @babel/cli @babel/core @babel/preset-react @babel/preset-typescript @types/node @types/react-dom @types/react-modal babel-loader css-loader dotenv-webpack html-webpack-plugin node-polyfill-webpack-plugin style-loader typescript webpack webpack-cli webpack-dev-server webpack-merge`

- Add scripts to `package.json` for start / build:
  ```
  "scripts": {
    "start": "webpack-dev-server . --config ./webpack/webpack.dev.js",
    "build": "webpack . --config ./webpack/webpack.prod.js"
  },
  ```

- Run `npm run start` and confirm that `localhost:3000` displays the app.

- Delete the contents of this README from the new project if you like.