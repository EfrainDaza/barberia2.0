const express = require("express");
const path = require("path");//busca rutas mas rapidas y las muestra en el navegador
//solictamos el expres que anteriormente guardamos en un variable
const app = express();
const mainRouter = require("./routers/mainRouter")
app.use(express.static("public"));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');




//poner a correr el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});
//comprobacion de que funciona el servidor-rutas

app.use(mainRouter);


/*app.get("/", function (req, res) {
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
app.get("/productsDetail", function (req,res){
    res.sendFile(path.join(__dirname,"/views/productsDetail.html"))
})*/
