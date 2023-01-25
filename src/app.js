import express from "express";
import db from "./config/db.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Error connection"));
db.once("open", () => {
  console.log("Connection OK with the DB");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
