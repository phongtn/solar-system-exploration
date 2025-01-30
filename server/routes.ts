import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";

export function registerRoutes(app: Express): Server {
  // Serve static files from public directory
  app.use(express.static(path.join(process.cwd(), "public")));

  const httpServer = createServer(app);
  return httpServer;
}