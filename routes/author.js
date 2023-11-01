const express=require("express")
const router =express.Router()
const AuthorController=require("../controllers/autho")

router.post("/",AuthorController.addAuthor)
  
module.exports=router



