const express = require("express");
const path = require("path")//busca rutas mas rapidas y las muestra en el navegador

//solictamos el expres que anteriormente guardamos en un variable
const app = express();

//poner a correr el servidor
app.listen(3000, () => {
    console.log("es exitoso la marcha")
})
//comprobacion de que funciona el servidor-rutas
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./views/index.html"))
})