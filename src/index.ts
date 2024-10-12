import http from "http";
import { sum } from "./core";
import WebSocket from "ws";
import "dotenv/config";

const requestHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
): void => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(
    "Hello, World: " +
      sum(2, 5) +
      ": " +
      process.env.LOGNAME +
      ": " +
      process.env.ABC,
  );
};

const server = http.createServer(requestHandler);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws: WebSocket) => {
  ws.send("WebSocket open");

  ws.on("message", (message: any) => {
    ws.send(`Server received: ${message}`);
  });

  ws.on("close", () => {
    ws.send("WebSocket closed");
  });
});

server.listen(8080);
