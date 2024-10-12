import http from "http";
import sum from "./core";
import WebSocket from "ws";

const initializeRouter = (wss: WebSocket.Server) => {
  return (req: http.IncomingMessage, res: http.ServerResponse): void => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      "Hello, World: " +
        sum(2, 5) +
        ": " +
        process.env.LOGNAME +
        ": " +
        process.env.ABC,
    );

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send("HTTP route was accessed!");
      }
    });
  };
};

export default initializeRouter;
