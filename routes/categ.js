const express=require("express")
const router =express.Router()
const CategController=require("../controllers/categ")

router.post("/",CategController.addCategory)
  
module.exports=router


