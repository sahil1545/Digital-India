import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve static files from client/Assets (dev) or public/Assets (prod)
  const assetsPath = path.join(__dirname, "../client/Assets");
  const publicAssetsPath = path.join(__dirname, "../public/Assets");
  
  // Try client/Assets first (dev), then public/Assets (prod)
  if (fs.existsSync(assetsPath)) {
    app.use("/Assets", express.static(assetsPath));
  } else if (fs.existsSync(publicAssetsPath)) {
    app.use("/Assets", express.static(publicAssetsPath));
  }

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}
