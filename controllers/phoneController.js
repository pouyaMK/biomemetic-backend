const pool = require("../db");

exports.savePhone = async (req, res) => {
  try {
    const { phone, feature } = req.body;
    const result = await pool.query(
      "INSERT INTO phones (phone, feature) VALUES ($1, $2) RETURNING *",
      [phone, feature]
    );
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getPhones = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM phones ORDER BY created_at DESC"
    );
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};