import http from "http";
import sum from "./core";
import WebSocket from "ws";

const initializeRouter = (wss: WebSocket.Server) => {
  return (req: http.IncomingMessage, res: http.ServerResponse): void => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send("HTTP route was accessed!");
      }
    });

    if (req.url === "" || req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(
        "Hello, World: " +
          sum(2, 5) +
          ": " +
          process.env.LOGNAME +
          ": " +
          process.env.ABC,
      );
      return;
    }

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  };
};

export default initializeRouter;
