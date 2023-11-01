const express=require("express")
const router =express.Router()
const taskController = require("../controllers/Task")
const auth=require ("../middlewares/auth")
router.get("/",auth.loggedMiddleware,taskController.fetchAll)
  
  router.get("/:id",taskController.ShowTask)
  
  
  router.post("/",taskController.addTask)
   

//modifier
router.patch("/:id",auth.loggedMiddleware,auth.isAdmin,taskController.fetcUpdateTask)


router.delete("/:id",taskController.deleteTask)


 module.exports=router