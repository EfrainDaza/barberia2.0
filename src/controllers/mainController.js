const path = require("path");

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
        return res.render("products");
    }

}
module.exports = controller; 