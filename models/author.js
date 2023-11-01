const mongoose = require("mongoose")
const AuthorSchema = mongoose.Schema({
   FirstName : { type: String, required: true},
   LastName :  {type: String , required: true},
   Biography:{type: String , required: false},
   nationality:{type: String , required: true},
})
module.exports = mongoose.model("Author",AuthorSchema)