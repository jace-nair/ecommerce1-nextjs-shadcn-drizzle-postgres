//import { cwd } from 'node:process'
import { cwd } from 'node:process';

import { loadEnvConfig } from '@next/env'

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "@/db/schema";

loadEnvConfig(cwd())

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema });

export default db;

//export type DB = typeof db;