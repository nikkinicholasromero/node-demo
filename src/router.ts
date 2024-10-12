import http from "http";
import sum from "./core";

const router = (req: http.IncomingMessage, res: http.ServerResponse): void => {
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

export default router;
