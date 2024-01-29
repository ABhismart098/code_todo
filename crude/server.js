const express = require('express');
const app = express();
const connectDB = require('./config/connection');
const todoRoutes = require('./Routes/routeTodo');
port = process.env.PORT ||3002
const cors = require('cors')

app.get('/', (req, res) =>{
    res.send("welcome i m online wating for u")
})
app.use(cors());
app.use('/app', todoRoutes);

connectDB();
app.listen(port,()=>{
console.log(`http://localhost:${port}`);
});