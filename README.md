React Website for Explazeite
---

Features
ES6 and greater => ES5 code transpiling (with Babel)
Styling with SASS
File bundling with webpack
local development with the webpack development server
Requirements
To run this project, you’ll need to install node 5 and above. The latest version of Node.js is recommended.

The dependencies of this project are managed with yarn (see installation guide here). However you can simply use the node package manager, npm for your dependency management.

Setting up
Clone this project to any folder on your local machine
Navigate into the folder name specified

Installing Packages
For those who love yarn
yarn install
For those who love NPM
npm install
Runnning the bundle
 yarn build
or
 npm run build
 
Running the app in Development
Run npm start to intialize and run the webpack development server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.

Running the app in Production
To run the app in production build of the app, use either of the following.
 yarn start
or
 npm start
