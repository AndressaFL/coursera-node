import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";

//centralize the routes
const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ name: "Library" });
  });
  app.use(express.json(), books, authors);
};
export default routes;
