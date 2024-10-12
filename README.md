# TODO: Initial
- (done) Build a basic node JS app
- (done) Turn it into typescript
- (done) Enable auto refresh

## STEPS
- Create folder (node-demo)
- npm init (creates package.json)
- npm install --save-dev typescript @types/node
- npm install --save-dev ts-node nodemon
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
- (done) Dockerize
- (done) Run in K8s
- (done) Use reverse proxy (ngRok)

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

## STEPS: Dockerize
- Manually create Dockerfile
- Manuall create .dockerignore
- docker build -t nikkinicholasromero/node-demo:latest .
- docker push nikkinicholasromero/node-demo:latest
- docker run -p 8080:8080 nikkinicholasromero/node-demo:latest

## STEPS: Deploy in K8s
- Manually create deployment.yaml
- Manually create service.yaml
- kubectl delete service --ignore-not-found=true node-demo
- kubectl delete deployments --ignore-not-found=true node-demo
- kubectl apply -f kubernetes/deployment.yaml
- kubectl apply -f kubernetes/service.yaml

## STEPS: Expose in ngRok
- brew install ngrok/ngrok/ngrok
- ngrok config add-authtoken {{auth_token}}
- kubectl port-forward service/node-demo 8080:8080
- ngrok http 8080

# TODO: Capabilities
- (done) WebSocket
- (done) Environment Variables
- HTTP Server
- DB
- File IO
- HTTP Client
- JWT Auth

## STEPS: WebSocket
- npm install ws
- npm install @types/ws --save-dev

## STEPS: Environment Variables
- npm install dotenv --save
