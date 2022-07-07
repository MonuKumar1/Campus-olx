const Seller = require("../Modals/Seller");
const Mongoose = require("mongoose");


const createSeller = async(req, res) => {
    const { _id, name, email, mobile, otherInfo } = req.body;
    console.log(req.body);

    if (!_id || !name || !email || !mobile) {
    return res
        .status(400)
        .json({ message: "Please enter all requiured fields" });
    }

    const newSeller = new Seller({_id, name, email, mobile, otherInfo });
    try {
        const savedSeller = await newSeller.save();
        res.json({message: "seller created successfully", savedSeller});
    }
    catch (err) {
        console.log(err);
        if(err.code === 11000){
            return res.status(400).json({message: "seller already exists"});
        }
        res.status(500).json({message: "error creating seller"});
    }
    


    // try{
    //     // console.log(_id, typeof(_id));
    //     const newSeller = new Seller({_id, name, email, mobile, otherInfo });
    //     console.log(newSeller);
    //     await newSeller.save();
    //     return res.status(201).json({ message: "seller created successfully" });
    // }
    // catch(err){
    //     return res.status(400).json({ message: err });
    // }


    
}
    
module.exports = { createSeller };