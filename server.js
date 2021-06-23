const express =  require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

app.use(express.json());

app.use('/api/items', items)

const db = require('./config/keys').mongoURI;

mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>console.log("db is connected"))
        .catch(err => console.log(err))

const port = process.env.PORT || 5000 ;

app.get('/', (req,res)=>{
    res.send('this is working')
})

app.listen(port , ()=> console.log(`Server is running on port ${port}`));

