const path = require('path')

const express = require('express');

const app = express();

const dirApp = path.join(__dirname,"../public");

app.use(express.static(dirApp));


// app.get('',(req, res)=>{
//   res.send("This is express!")

// })

// app.get('/help',(req, res)=>{
//   res.send("This is help!")

// })

// app.get('/about',(req, res)=>{
//   res.send("This is about!")

// })

app.get('/weather',(req, res)=>{
  res.send("This is weather!")

})


app.listen(3000,()=>{
  console.log("server started")
})