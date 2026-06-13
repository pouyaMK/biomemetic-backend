const pool = require("../db");

const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS phones (
        id SERIAL PRIMARY KEY,
        phone VARCHAR(11) NOT NULL,
        feature VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log("Table ready");
  } catch (err) {
    console.log("Table error:", err.message);
  }
};

createTable();

module.exports = pool;