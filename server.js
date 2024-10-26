const express = require('express')
const app = express()
const PORT = 3000

//Middlware
app.use(express.json())

//APi endpoint to calculate total value of products
app.post('/api/products/total', (req, res) => {
    const products = req.body;

    if (!Array.isArray(products)) {
        return res.status(400).json({error: 'Input must be an array of products'})
    }

    //calculate total value
    let totalValue = 0
    products.forEach(product => {
        const { price, quality } = product
        if (typeof price === 'number' && typeof quality === 'number') {
            totalValue += price * quality
        }
    })

    res.json({ totalValue })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})