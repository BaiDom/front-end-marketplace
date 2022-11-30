const dbConfig = require("../knexfile");
const db = require("knex")(dbConfig);
const ENV = process.env.NODE_ENV || "development";

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("PGDATABASE or DATABASE_URL not set");
}

const config =
  ENV === "production"
    ? {
        connectionString: process.env.DATABASE_URL,
      }
    : {};

module.exports = new Pool(config);

module.exports = db;
