import { defineConfig } from "prisma/config";
import path from "node:path";
import fs from "node:fs";

function loadEnv() {
  const envPath = path.resolve(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const match = line.match(/^([^#=]+)=["']?(.+?)["']?$/);
    if (match && !process.env[match[1].trim()]) {
      process.env[match[1].trim()] = match[2];
    }
  }
}

loadEnv();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
