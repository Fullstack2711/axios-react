const express = require('express');
const app = express()
const cors = require('cors');
const productRouter = require('./routes/productRouter');

app.use(express.json());
app.use(cors())




app.use('/products', productRouter);


const port = 4000
app.listen(port, () => {
    console.log(`Severimiz ${port} da ishga tushdi`);
})