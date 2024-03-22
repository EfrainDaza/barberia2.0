const express = require("express");
const router = express.Router();
//controllers
const controller = require("../controllers/mainController")

router.get("/", controller.index)
router.get("/register", controller.register)
router.get("/login", controller.login)
router.get("/products", controller.products)

module.exports = router;