const express = require("express");
const router = express.Router();
const { createSeller } = require("../Controllers/sellerController");
const { addProduct, upload } = require("../Controllers/productController");



router.get("/api", (req, res) => {
    res.json({ message: "Hello from Durga server!" });
  });

router.post("/api/create/seller", createSeller);

router.post("/api/add/product", upload.single('image') ,addProduct);


module.exports = router;  