// const Seller = require("../models/Seller");
// const Mongoose = require("mongoose");


const createSeller = (req, res) => {
//   const { name, email, phone } = req.body;
//   if (!name || !email || !phone) {
//     return res
//       .status(400)
//       .json({ errorMessage: "Please enter all requiured fields" });
//   }
//   const newSeller = new Seller({
//     name,
//     email,
//     mobile,
//     otherInfo,
//   });
//   newSeller.save((err, seller) => {
//     if (err) {
//       return res.status(400).json({ errorMessage: err });
//     }
//     return res.status(201).json({ message: "seller created successfully" });
//   });

    const { name, email, phone } = req.body;
    console.log(name, email, phone);

}

module.exports = { createSeller };