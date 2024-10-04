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
- Add tests
- Minify
- Shake tree
- Prune dependencies
- Deploy in nginx
- Containerize
- Deploy in K8s
- Deploy in Azure AKS

## STEPS
- npm install --save-dev prettier
- Manually create .prettierrc
- Manually create .prettierignore
- Add "format": "prettier --write 'src/**/*.{ts,tsx}' '**/*.json'", to package.json
- Add npm run format
- npm install --save-dev tslint @types/node
- Add "lint": "tslint -p tsconfig.json 'src/**/*.ts'" in package.json
- Add "build": "npm run lint && npx tsc" in package.json
- npm run build

# TODO: Capabilities
- env variables
- add endpoints with full http features
- DB access (crud and transactional)
- file io
- network calls using full http features
- JWT authentication and authorization
