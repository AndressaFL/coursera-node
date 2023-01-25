import express from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();
router
  .get("/authors", AuthorController.listAuthor)
  .get("/authors/:id", AuthorController.listAuthorsById)
  .post("/authors", AuthorController.newAuthor)
  .put("/authors/:id", AuthorController.updateAuthor)
  .delete("/authors/:id", AuthorController.deleteAuthor);

export default router;