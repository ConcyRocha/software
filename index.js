const http= require("http")
const express = require('express')
const server = express()
server.use(express.static(__dirname + 'public'));
const port = 4000;
server.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
    
})

server.listen(port,function(){
    console.info('servidor rodando em http://localhost:4000')
})
