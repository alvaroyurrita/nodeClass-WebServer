const fs = require('fs')

const book = {
  title: "Ego is the enemy",
  author: "someboyd",
}

fs.writeFileSync("data.json",JSON.stringify(book));

const a = JSON.parse(fs.readFileSync("data.json").toString())
console.log(a.title)