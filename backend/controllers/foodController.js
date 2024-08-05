import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item
export const addFood = async (req,res) => {

    let image_filename = `${req.file?.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    })

    try{
        await food.save();
        res.json({success:true, message: "Food Added"})
    } catch (error) {
        console.log("error",error)
        res.json({success:false,message:"Error"})
    }
}

//all food list
export const listFood = async (req,res) => {
    try {
       const foods = await foodModel.find({});
       res.json({success: true, data: foods})
    } catch (error) {
        console.log("error list",error)
        res.json({success: false, message: "Error"})
    }
}

//remove Food Item
export const removeFood = async (req, res) => {
    try {
      //find food model using id
      const food = await foodModel.findById(req.body.id);
  
      //delete image from the folder
      fs.unlink(`uploads/${food.image}`, () => {});
  
      await foodModel.findByIdAndDelete(req.body.id);
      res.json({ success: true, message: "Food Removed" });
    } catch (error) {
      console.log("error removeFood", error);
      res.json({ success: false, message: "Error" });
    }
  };