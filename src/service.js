const gateway = 3003;
const express = require('express')
const app = express()
const db = require('./data')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/products', (req,res) => {
    res.send(db.getProducts()) //Convert into JSON
})

app.get('/products/:id', (req, res) =>{
    res.send(db.getProductId(req.params.id))
})


app.post('/products', (req,res) =>{
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON
})

app.put('/products/:id', (req,res) =>{
    const product = db.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/products/:id', (req,res) =>{
    const product = db.deleteProduct(req.params.id)
    res.send(product) //JSON
})



app.listen(gateway, () => {
    console.log(gateway)
})