import Router from "express";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import { formatDate } from "../utils.js";

globalThis.crypto = crypto;
const indexRouter = Router();

const messages = [
  {
    id: uuidv4(),
    text: "Hi there!",
    user: "Eva",
    added: formatDate(new Date()),
  },
  {
    id: uuidv4(),
    text: "Hello World!",
    user: "Espresso",
    added: formatDate(new Date()),
  },
];

indexRouter.get("/", (req, res) => res.render("index", { messages }));
indexRouter.get("/new", (req, res) => res.render("form"));
indexRouter.post("/new", (req, res) => {
  const message = {
    id: uuidv4(),
    text: req.body.message,
    user: req.body.name,
    added: formatDate(new Date()),
  };
  messages.push(message);
  res.redirect("/");
});

export { indexRouter, messages };
