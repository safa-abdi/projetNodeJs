const Author = require("../models/author.js");

const addAuthor = (req, res) => {
    const author = new Author(req.body);
    author.save()
    .then(() => {
      res.status(201).json({
        model: author,
        message: "author created !",
      });
    })
    .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "Données invalides",
        });
    });
}
module.exports = {
    addAuthor : addAuthor ,
}