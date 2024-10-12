import http from "http";
import WebSocket from "ws";

const initializeWebSocket = (server: http.Server) => {
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

  return wss;
};

export default initializeWebSocket;
