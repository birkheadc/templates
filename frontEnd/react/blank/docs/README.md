# React/Blank

This is a bare-bones React template, basically my replacement for create-react-app. It uses TypeScript, because I always use TypeScript. There are also some packages and code that are not strictly necessary for just getting a React app off the ground, but they are things I find myself using on essentially any project I create, so that's why I include them here.

## How to Create

- Copy all of the folders and files in the root `blank` directory to a new directory.

- Create .env in the root directory (.env is not included in the repository as it is in .gitignore)
  - Lately I have begun to use .env only in development; I set environment variables differently in production

- Initialize the app with `npm init`, then follow the prompts.
  - entry point should be `index.tsx`

- Install dependencies and dev-dependencies with the following commands:
  - `npm install react react-dom react-router-dom`
  - `npm install --save-dev @babel/cli @babel/core @babel/preset-react @babel/preset-typescript @types/node @types/react-dom babel-loader css-loader dotenv-webpack html-webpack-plugin node-polyfill-webpack-plugin style-loader typescript webpack webpack-cli webpack-dev-server webpack-merge`

- Add scripts to `package.json` for start / build:
  ```
  "scripts": {
    "start": "webpack-dev-server . --config ./webpack/webpack.dev.js",
    "build": "webpack . --config ./webpack/webpack.prod.js"
  },
  ```

- Run `npm run start` and confirm that `localhost:3000` displays the app.

- Delete the contents of this README from the new project if you like.