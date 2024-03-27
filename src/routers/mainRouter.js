const path = require("path"); 
const express = require("express");
const router = express.Router();
const multer = require("multer");
//controllers
const controller = require("../controllers/mainController");
const multerDiskStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(__dirname, "../../public/assets/img"));
    },
    filename: function(req,file,cb){
        let imageName = Date.now() + path.extname(file.originalname);
        cb(null,imageName)
    }
});
const fileUpload = multer({storage:multerDiskStorage});

router.get("/", controller.index)
router.get("/register", controller.register)
router.get("/login", controller.login)
//lista de productos en la web
router.get("/products", controller.products)
//consulta de productos con sus detalles/id:
router.get("/productsDetail/:id", controller.Detalle)
//crear o dar alta producto
router.get("/products/create", controller.create)
//proceso de alta POST
router.post("/products",fileUpload.array("imgProduct",3),controller.processCreate)

module.exports = router;