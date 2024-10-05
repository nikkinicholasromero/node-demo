# TODO: Initial
- (done) Build a basic node JS app
- (done) Turn it into typescript
- (done) Enable auto refresh

## STEPS
- Create folder (node-demo)
- npm init (creates package.json)
- npm install typescript @types/node --save-dev (creates package-lock.json)
- npm install ts-node nodemon --save-dev (auto-refresh)
- npx tsc --init (creates tsconfig.json)
- manually update tsconfig.json to include outDir and rootDir
- manually create src/index.ts
- Add "start": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts" in package.json
- npm start

# TODO: Test, Build, and Deploy
- (done) Add linter
- (done) Add prettier
- (done) Add unit tests (jests)
- Add e2e tests
- Dockerize
- Run in K8s
- Use reverse proxy (ngRok)

## STEPS: Prettier
- npm install --save-dev prettier
- Manually create .prettierrc
- Manually create .prettierignore
- Add "format": "prettier --write 'src/**/*.{ts,tsx}' '**/*.json'", to package.json
- Add npm run format

## STEPS: TSLint
- npm install --save-dev tslint @types/node
- Add "lint": "tslint -p tsconfig.json 'src/**/*.ts'" in package.json
- Add "build": "npm run lint && npx tsc" in package.json

## STEPS: Jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- npm install --save-dev @babel/preset-typescript
- npm install --save-dev ts-jest
- npm install --save-dev @jest/globals
- Manually create babel.config.js
- Add "test": "jest" to package.json

## STEPS: Build
- Add "build": "npm run format && npm run lint && npm run test && npx tsc" in package.json

# TODO: Capabilities
- env variables
- add endpoints with full http features
- DB access (crud and transactional)
- file io
- network calls using full http features
- JWT authentication and authorization
