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
    },
    processCreate:(req,res) => {
        let altaProducts = {
            "id": producto.length+1,
            "nombre":req.body.nameProduct,
            "descripcion":req.body.descriptions,
            "stocks":req.body.stockProduct,
            "precio":req.body.priceProduct,
            "fotosProductos":req.file.filename,
            "borrado":false
        }
        fs.writeFileSync(rutaArchivo,JSON.stringify([...producto,altaProducts],null,2),"utf-8")
        return res.redirect("/products/create")
    },
    

}
module.exports = controller; 