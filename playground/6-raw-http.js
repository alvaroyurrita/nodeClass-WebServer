const http=require('http');
const { getNotes } = require('../notes-app/notes');

const weatherUrl = "http://api.weatherstack.com/current?access_key=c8b816ec91b6de21953ef002b6cf9e51&units=f";
latitude = 53.33928;
longitude = -6.281314
const url = `${weatherUrl}&query=${latitude},${longitude}`;

const request =  http.request(url, (incoming)=>{
  let data = '';
  incoming.on('data', (chunk) => {
      console.log(chunk);
      data += chunk.toString();
    });
  incoming.on('end',() =>{
    console.log("ended");
    console.log(data);
    console.log(JSON.parse(data));

  })
})

request.on('error',(error)=>{
  console.log(error);
})
request.end();