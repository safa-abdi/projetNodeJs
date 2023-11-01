const Book = require("../models/book")

const AddBook = (req, res) => {
    const book = new Book(req.body);
    book.save().then(() =>
      res.status(201).json({
        model: book,
        message: "Book created !",
      })
    );
  }
  const FetchAllBook = (req, res) => {
    Book.find()
      .populate("author")  
      .populate("Genre_Category")  
      .then((books) =>
        res.status(200).json({
          model: books,
          message: "success",
        })
      )
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "problème d'extraction",
        });
      });
  }



const FetchOneBook = (req, res) => {
Book.findOne({ _id: req.params.id })
  .populate("author")  
  .populate("Genre_Category")  
  .then((book) => {
    if (!book) {
      res.status(404).json({
        message: "Livre non trouvé"
      });
      return;
    }

    res.status(200).json({
      model: book,
      message: "Objet trouvé"
    });
  })
  .catch((error) => {
    res.status(400).json({
      error: error.message,
      message: "Problème",
    });
  });
}

const FetchAndUpdate= (req, res) => {
    Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((book) => {
        if (!book) {
          res.status(404).json({
            message: "Book not found ",
          });
          return;
        }
        res.status(200).json({
          model: book,
          message: "Book uploaded",
        });
      })
      .catch((error) =>
        res.status(400).json({
          error: error.message,
          message: "Id format of book not correct",
        })
      );
  }
const deleteBook = (req, res) => {
    Book.findByIdAndRemove({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Book to delete not found" }))
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "Id format not correct ",
        });
      });
  }
  module.exports = {
    AddBook : AddBook ,
    FetchAllBook : FetchAllBook ,
    FetchAndUpdate : FetchAndUpdate ,
    FetchOneBook : FetchOneBook ,
    deleteBook : deleteBook ,
}