import WebSocket from "ws";
import { Request, Response } from "express";
import sum from "./core";

const initializeRoutes = (app: any, wss: WebSocket.Server) => {
  app.get("/", (req: Request, res: Response) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send("HTTP route was accessed!");
      }
    });

    res.send(
      "Hello, World: " +
        sum(2, 5) +
        ": " +
        process.env.LOGNAME +
        ": " +
        process.env.ABC,
    );
  });

  app.get("*", (req: Request, res: Response) => {
    res.status(404).send("Not Found");
  });
};

export default initializeRoutes;
