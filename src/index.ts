import "dotenv/config";
import http from "http";
import router from "./router";
import initializeWebSocket from "./websocket";

const server = http.createServer(router);
initializeWebSocket(server);
server.listen(8080);
