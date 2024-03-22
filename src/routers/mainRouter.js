const path = require("path"); 
const express = require("express");
const router = express.Router();
//controllers
const controller = require("../controllers/mainController")

router.get("/", controller.index)
router.get("/register", controller.register)
router.get("/login", controller.login)
//lista de productos en la web
router.get("/products", controller.products)
//consulta de productos con sus detalles/id:
router.get("/productsDetail/:id", controller.Detalle)

module.exports = router;