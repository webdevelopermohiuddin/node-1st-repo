const express = require('express');


const app = express();


app.get('/', (req, res) =>{
    res.send('I know how to open node.. YAY')
})

app.listen(4000, () => console.log('listening to port 4000'));