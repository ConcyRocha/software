var express = require("express");
var app = express();
var port = process.env.PORT || 4000;
app.use('/public', express.static(__dirname + '/public'))

app.get("/", function(req,res){
    res.sendFile(__dirname + '/index.html')
    
})
app.get("/camera_index", function(req,res){
    res.sendFile(__dirname + '/camera_index.html')
    
})
app.get("/teste", function(req,res){
    res.sendFile(__dirname + '/teste.html')
    
})

app.listen(port,function(){
    console.info('servidor rodando em http://localhost:4000')
})
