const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Load products
const products = require('./data/products.json');

// GET all products
app.get('/products', (req, res) => {
    res.json(products);
});

// POST cart (just log or return success)
app.post('/cart', (req, res) => {
    console.log('Cart received:', req.body.cart);
    res.json({ success: true, cart: req.body.cart });
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});