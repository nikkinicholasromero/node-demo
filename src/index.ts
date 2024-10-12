import "dotenv/config";
import http from "http";
import initializeWebSocket from "./websocket";
import initializeRouter from "./router";

const server = http.createServer();
const wss = initializeWebSocket(server);
const router = initializeRouter(wss);
server.on("request", router);
server.listen(8080);
