const express = require('express');


const app = express();

const users = ["asad", "hablu", "sabana", "josim", "kabila", "hakim"]

app.get('/', (req, res) =>{
    const fruit = {
        product: 'ada',
        price: '230'
    }
    res.send(fruit);
})

app.get('/fruits/banana', (req, res) => {
    const product = {
        fruit: 'banana', quantity: 10000, price: 100000
    }
    res.send(product);
})
 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query);
    const name = users[id];
    res.send({id, name});
})

app.listen(4000, () => console.log('listening to port 4000'));