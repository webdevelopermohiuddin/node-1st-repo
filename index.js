const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json())

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
    const name = users[id];
    res.send({id, name});
})

// post
app.post('/addUser', (req, res) => {
   //save to database
   const user = req.body;
   user.id = 55;
    res.send(user);
})

app.listen(4000, () => console.log('listening to port 4000'));