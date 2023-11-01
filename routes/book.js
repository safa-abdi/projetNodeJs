const express=require("express")
const router =express.Router()
const bookController=require("../controllers/book")

router.get("/",bookController.FetchAllBook)
  
  router.get("/:id",bookController.FetchOneBook)
  
  
  router.post("/",bookController.AddBook)
   

//modifier
router.patch("/:id",bookController.FetchAndUpdate)


router.delete("/:id",bookController.deleteBook)



module.exports=router



