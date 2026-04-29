import Router from "express";
import { messages } from "./indexRouter.js";
import { generateRandomColor, generateRandomPastelColor } from "../utils.js";

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  const message = messages.find((message) => message.id === messageId);

  res.render("message", { message, generateRandomColor, generateRandomPastelColor });
});

export default messageRouter;
