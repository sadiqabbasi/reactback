const express = require('express');
const broute = require('./Routes/Bollywood');
const hroute = require('./Routes/Hollywood');
const fitroute = require('./Routes/Fitness');
const froute = require('./Routes/Food');
const troute = require('./Routes/Technology');
const homeroute = require('./Routes/Home');

const cors = require("cors");
const app = express();

app.use(cors())
app.use('/api',homeroute) 
// app.use('/' , function(req,res){
//     res.send('function is running');
// })
// app.use(detailRouter1 )
// app.use("/" , express.static('route'))
// app.use(express.static(__dirname + "/route/bollywood"));
// app.use('/api',homeroute) 
// app.get('/', function(req, res){
//     res.render('./Routes/Home');
//   });
app.use("/api" ,broute )
app.use("/api" ,hroute )
app.use("/api" ,troute )
app.use("/api" ,fitroute )
app.use("/api" ,froute )

app.listen(process.env.PORT||40021,()=>{console.log("Application in progress..")})