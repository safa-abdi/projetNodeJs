const mongoose=require ("mongoose")
const categorySchema=mongoose.Schema({
    title: {
        type: String,
        required: true,
        enum:
        ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Science Fiction (Sci-Fi)", "Thriller", "War", "Western", "Musical", "Biographical", "Historical", "Documentary", "Fantasy", "Superhero", "Sports", "Family", "Musical", "Silent", "Independent (Indie)", "Cult", "Experimental", "Romantic Comedy (Rom-Com)", "Mockumentary", "Disaster"]}
})
module.exports=mongoose.model("Category",categorySchema)



 



