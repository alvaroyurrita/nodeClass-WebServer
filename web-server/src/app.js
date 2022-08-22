const path = require('path');
const express = require('express');
const hbs = require('hbs')

const app = express();
const dirApp = path.join(__dirname, "../public");
const dirViews = path.join(__dirname,"../templates/views")
const dirPartials = path.join(__dirname,"../templates/partials")

app.set('view engine', 'hbs');
app.set('views',dirViews)
hbs.registerPartials(dirPartials);


app.use(express.static(dirApp));

app.get('', (req, res) => {
  res.render('index',{
    title: 'Weather',
    name: 'me',
  })
})

app.get('/about', (req, res) => {
  res.render('about',{
    title: 'about',
    name: 'me',
  })
})

app.get('/help', (req, res) => {
  res.render('help',{
    title: 'help',
    helpMessage: 'this is a helpful message',
    name: 'me',
  })
})


app.get('/help/*', (req, res) => {
  res.render('notFound',{
    title: '404',
    notFoundMessage: 'Help Page Not Found',
    name: 'me',
  })
})

app.get('*', (req, res) => {
  res.render('notFound',{
    title: '404',
    notFoundMessage: 'Page Page Not Found',
    name: 'me',
  })
})


app.listen(3000, () => {
  console.log("server started")
})