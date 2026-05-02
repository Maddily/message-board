import Router from "express";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import {
  formatDate,
  generateRandomColor,
  generateRandomPastelColor,
} from "../utils.js";

// Only set globalThis.crypto if it doesn't already exist
if (typeof globalThis.crypto === "undefined") {
  globalThis.crypto = crypto;
}

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
  {
    id: uuidv4(),
    text: "Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
    user: "Mimi",
    added: formatDate(new Date()),
  },
  {
    id: uuidv4(),
    text: "Coffee is delicious",
    user: "Latte",
    added: formatDate(new Date()),
  },
  {
    id: uuidv4(),
    text: "Hehehe",
    user: "Squirrel",
    added: formatDate(new Date()),
  },
  {
    id: uuidv4(),
    text: "Helloooooooooooooooooooooooooo",
    user: "Rabbit",
    added: formatDate(new Date()),
  },
  {
    id: uuidv4(),
    text: "Hello again!!!!!!!!!!!!!!!!!",
    user: "Mimi",
    added: formatDate(new Date()),
  },
  {
    id: uuidv4(),
    text: "Good morning",
    user: "Munch",
    added: formatDate(new Date()),
  },
  {
    id: uuidv4(),
    text: "........................................................................................................",
    user: "Susu",
    added: formatDate(new Date()),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", {
    messages,
    generateRandomColor,
    generateRandomPastelColor,
  })
);
indexRouter.get("/new", (req, res) =>
  res.render("form", { generateRandomColor, generateRandomPastelColor })
);
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
