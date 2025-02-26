import { cwd } from "node:process";
import { loadEnvConfig } from '@next/env';
import { defineConfig } from "drizzle-kit";

loadEnvConfig(cwd())


export default defineConfig({
  schema: "./src/db/schema/index.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});