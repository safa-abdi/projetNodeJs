const Task=require("../models/task")

const fetcUpdateTask = (req,res)=>{
    Task.findOneAndUpdate({_id:req.params.id},
        req.body,{ new : true})
        .then((task)=>{
            if(!task){
                res.status(404).json({
                    message: "Objet non trouvé ",
                })
                return
            }
            res.status(200).json({
                model: task,
                message:"Objet modifié",
            })
        })
    .catch((error)=> res.status(400).json({error : error.message , message:"objet non trouvé"}))
}
const ShowTask = (req,res)=>{
    Task.find({_id:req.params.id})
    .then((tasks)=> res.status(200).json({
        model : tasks ,
        message : "objet trouvé",
    }))
    .catch((error)=>{
    res.status(400).json({
           error : error.message ,
           message : "objet non trouvé ",
    })
})
}
const deleteTask = (req,res)=>{
    Task.findOne({_id:req.params.id})
    .then(()=>res.status(200).json({message: "objet supprimé"}))
    .catch((error)=>res.status(400).json({error}))


}
const addTask = (req,res)=>{
    //console.log(req.body)
    //res.send(req.body)
    const task = new Task(req.body)
    task
    .save()
    .then(()=>
    res.status(201).json({
        model: task ,
        message: "Objet créé !"
    })
    )
}
const fetchAll = (req,res)=>{
    Task.find()
    .then((tasks)=> res.status(200).json({
        model : tasks ,
        message : "success",
    }))
    
    .catch((error)=>{
    res.status(400).json({
           error : error.message ,
           message : " problème d'extraction",
    })
})
}
module.exports = {
    fetcUpdateTask : fetcUpdateTask ,
    ShowTask : ShowTask ,
    deleteTask : deleteTask ,
    addTask : addTask ,
    fetchAll : fetchAll ,
}