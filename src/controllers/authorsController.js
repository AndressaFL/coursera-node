import authors from "../models/Author.js";

class AuthorController {
  static listAuthor = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };
  static listAuthorsById = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id not found.` });
      } else {
        res.status(200).send(authors);
      }
    });
  };
  static newAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Failed adding a new book.` });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };
  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Book updated successfully" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  static deleteAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Book deleted" });
      } else {
        response.status(500).send({ message: err.message });
      }
    });
  };
}
export default AuthorController;
