const express = require('express');
const app = express();
const connectDB = require('./config/connection');
const todoRoutes = require('./Routes/routeTodo');
const bodyParser = require('body-parser');
port = process.env.PORT ||3002
const cors = require('cors')
app.use(express.json());

app.get('/', (req, res) =>{
    res.send("welcome i m online wating for u")
})
app.use(cors());
app.use('/api', todoRoutes);
app.use(bodyParser.json({extended : true}))
app.use(express.json({extended : true}))


connectDB();
app.listen(port,()=>{
console.log(`http://localhost:${port}`);
});