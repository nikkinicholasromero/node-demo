import "dotenv/config";
import express from "express";
import http from "http";
import initializeWebSocket from "./websocket";
import initializeRoutes from "./router";

const app = express();
const server = http.createServer(app);
const wss = initializeWebSocket(server);
initializeRoutes(app, wss);
app.listen(8080);
