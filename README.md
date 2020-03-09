# Express and Sequelize template app
Nodejs mysql app with auth implementation


Getting started with node,express and mysql using sequalize

### Required Tools
Let's take a moment to review the tools we're going to be using:

Nodejs
Express
Mysql
Sequelize 
NPM
Postman

### Project Setup
```sh
$ mkdir party-organizer
$ cd party-organizer
```
create nodejs package by using this command

```sh
$ npm init
```
### Express Setup

install express and few of it's dependencies.
```sh
$ npm install express body-parser cors morgan
```

we have some development dependencies

```sh
$ npm install nodemon --save-dev
```
Create a file in the root folder and call it `server.js`

At this point in time, your project structure look like:

```
├── app.js
├── package.json
└── node_modules
```
### Sequelize Setup
At this point, we are going to need to install the actual sequelize package and it's dependencies

```sh
$ npm isntall sequelize 
$ npm install mysql2
```
### The .sequelizerc File
```js
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'database.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
}
```

### Initializes Sequelize
After installation, let us the CLI to generate migration, seeders, config and models derectories and config file.
```sh
$ npx sequelize-cli init
```
Your project structure should look like this.
```sh
myApp
── server.js
├── package.json
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
└── seeders
```
### Database configuration
Now `config.json` file which is located at `config/config.json` and update your database details.
To create model and migration for company
```sh
npx sequelize-cli model:create --name Company --attributes name:string
```
Now lets generate Employee model. 
```sh
npx sequelize-cli model:create --name Employee --attributes name:string,designation:string,salary:number
```
We are also going to be defining the relationship between our models(Company and Employee). One company can hire multiple employees(One to Many relationship).

We will edit name field in company model and added a not-null constraints.
We also define relation between company and employee.
At first we have to create empty database with following command.

```sh
$ npx sequelize-cli db:create
```
After model modification we are going to migrate database with following command.

```sh
$ npx sequelize-cli db:migrate
```
Resource:
https://github.com/fatukunda/go-party/tree/develop/src
https://freeappsforme.com/11-best-party-planner-apps/#my-party-planner-8211-lite
This is sequelize short tutorial
https://ajbraus.github.io/sequelize-it/#/?id=include-or-eager-loading

https://medium.com/@prajramesh93/getting-started-with-node-express-and-mysql-using-sequelize-ed1225afc3e0

