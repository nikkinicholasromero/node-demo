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
- run "npm start"

# TODO: Test, Build, and Deploy
- Add linter
- Add tests
- Build app
- Deploy in nginx

## STEPS
- Add "build": "npx tsc" in package.json
- run "npm run build"

# TODO: Capabilities
- env variables
- add endpoints with full http features
- DB access (crud and transactional)
- file io
- network calls using full http features
- JWT authentication and authorization
