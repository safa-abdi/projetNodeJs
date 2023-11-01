const Category = require("../models/Category.js");

const addCategory = (req, res) => {
    const category = new Category(req.body);
    category.save()
    .then(() => {
      res.status(201).json({
        model: category,
        message: "category created !",
      });
    })
    .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "False Data",
        });
    });
}
module.exports = {
    addCategory : addCategory ,
}