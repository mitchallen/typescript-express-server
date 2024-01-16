typescript-express-server
==

An example of creating a Web server using TypeScript and Express.

## Usage

```sh
npm run build 

npm start
```

After the server starts, browse to:

* http://localhost:3000/

* * *

## Patch

```sh
npm run push:patch
```

* * *

## Setup Notes

Here are my notes from creating this project

### Make project folder

```sh
mkdir -p ~/projects/typescript/typescript-express-server
cd ~/projects/typescript/typescript-express-server
```

### Init Project

```sh
npm init -y
```

* Edit package.json
* Change license to MIT
* Update author and keyword fields
* Copy over MIT LICENSE file
* Add .gitignore file (using VS Code extension)
* Make sure .gitignore includes the **dist** folder

### Install TypeScript

```sh
npm install typescript --save-dev
```

### Make src folder

```sh
mkdir src
```

### Make tsconfig.json

* Make this file and populate it:

```sh
touch tsconfig.json
```

### Make server file

Note that this is a **Ts** file (not js ...)

```sh
touch src/server.ts
```

### Add a build script to package.json

```json
  "scripts": {
    "build": "tsc",
```

### Updatte main in package.json to point to transpiled result

```json
 "main": "./dist/server.js",
```

### Run the build

```sh
npm run build

ls -ls dist
```

### Add start, prestart and clean scripts

* Add a start script
* Add a prestart script to build first
* Add a clean script

```json
  "scripts": {
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node dist/server.js",
    "clean": "rm -rf dist",
```

### Install express and its types

```sh
npm install express --save
npm install @types/express --save-dev
```

* * *

## Testing

### Setup

```sh
npm install --save-dev axios @cucumber/cucumber
```

### Create features folder

Note that the steps file is **.js** file (may change)

```sh
mkdir features
touch features/server.feature
touch features/server-steps.js
```

Update the test script in **package.json**

```json
"test": "./node_modules/.bin/cucumber-js ./features/*.feature"
```

* * *

## References

* [Getting Started with TypeScript (Hello World, Mac)](https://scriptable.com/typescript/getting-started-with-typescript-hello-world)