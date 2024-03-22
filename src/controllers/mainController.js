const fs = require("fs"); 
const path = require("path");

const rutaArchivo = path.resolve("./src/database/products.json");
const producto = JSON.parse(fs.readFileSync(rutaArchivo));

//funciones de controllers
const controller = {
    index:(req,res) => {
       return res.render("index");
    },
    register:(req,res) => {
        return res.render("register");
    },
    login:(req,res) => {
        return res.render("login");
    },
    products:(req,res) => {
        const listaProducts = producto.filter(producto => producto.borrado != true) 
        return res.render("products",{productoList:listaProducts});
    },
    Detalle:(req,res) => {
        const productoEcontrado = producto.find(row =>row.id == req.params.id)
        if(productoEcontrado && productoEcontrado.borrado != true) return res.render("productsDetail", {producto:productoEcontrado})
        else return res.send("PRODUCTO NO ENCONTRADO 404")
    },
    create:(req,res) => {
        return res.render("createProducts")
    }
    

}
module.exports = controller; 