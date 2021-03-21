const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    
var siteUrl = "https://shahvani.com";
var userName = "83Mehmet";
var siteService = "profile";
var serviceUrl = siteUrl+'/'+ siteService+'/'+ userName;
  res.send(serviceUrl)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})