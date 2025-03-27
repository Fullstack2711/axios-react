
const pool = require('../config/db')

//ishladi
exports.allProducts = async (req, res) => {
    try {
        const allResults = await pool.query("SELECT * FROM products");
        return res.status(200).json(allResults.rows);

    } catch (error) {
        res.status(500).json({ error: `Ma'lumot olishda xatolik: ${error.message}` });
    }
};

//ishladi
exports.addProducts = async (req, res) => {
    try {
        const { title, price, description, image } = req.body;
        const result = await pool.query(
            `INSERT INTO products (title, price, description, image) VALUES ($1, $2, $3, $4 ) RETURNING *`,
            [ title, price, description, image]
        );
        res.status(201).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//ishladi
exports.deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`DELETE FROM products WHERE id = ${id}`)
        res.status(200).json("Maxsulot muvafaqiyatli o'chirildi")
    } catch (error) {
        res.status(403).json(err)
    }
}


