import Router from "express";
import { messages } from "./indexRouter.js";

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  const message = messages.find((message) => message.id === messageId);

  res.render("message", { message });
});

export default messageRouter;
