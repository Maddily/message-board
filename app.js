import express from "express";
import { indexRouter } from "./routes/indexRouter.js";
import messageRouter from "./routes/messageRouter.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public/styles")));
app.use(express.static(path.join(__dirname, "public/images")));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App running on port ${PORT}`);
});
