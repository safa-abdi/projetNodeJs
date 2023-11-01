const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
   title : { type: String, required: true},
   Publication_Year:{type: Date , required: true},
   Description:{type: String , required: true},
   Number_of_Pages:{type: Number , required: false},
   Language:{type: String , required: true},
   author: { type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true },
   Genre_Category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
})
module.exports = mongoose.model("Book",bookSchema)