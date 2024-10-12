import WebSocket from "ws";
import "dotenv/config";

const initializeWebSocket = (server: any) => {
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
};

export default initializeWebSocket;
