const express = require("express");
const path = require("path");//busca rutas mas rapidas y las muestra en el navegador
//solictamos el expres que anteriormente guardamos en un variable
const app = express();
app.use(express.static("public"));


//poner a correr el servidor
app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor corriendo en el puerto 3000")
})
//comprobacion de que funciona el servidor-rutas
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get("/products", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/products.html"))
})
app.get("/register", function (req,res){
    res.sendFile(path.join(__dirname,"/views/register.html"))
})
app.get("/login", function (req,res){
    res.sendFile(path.join(__dirname,"/views/login.html"))
})
