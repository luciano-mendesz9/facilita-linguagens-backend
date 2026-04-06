import { adminMiddleware } from "@/middleware/adminMiddleware.js";
import { authMiddleware } from "@/middleware/authMiddleware.js";
import { textInfoVerifyMiddleware } from "@/middleware/textInfoVerifyMiddleware.js";
import { Router } from "express";
import questionService from "./question.service.js";

const QuestionsRoutes = Router();

// CREATE
QuestionsRoutes.post(
  "/:textInfoId/questions",
  authMiddleware,
  adminMiddleware,
  textInfoVerifyMiddleware,
  async (req, res) => {
    try {
      const { textInfoId } = req.params;

      const question = await questionService.create(
        textInfoId as string,
        req.body
      );

      return res.status(201).json(question);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
);

// GET ONE
QuestionsRoutes.get(
  "/:textInfoId/questions/:textQuestionId",
  //authMiddleware,
  textInfoVerifyMiddleware,
  async (req, res) => {
    try {
      const { textQuestionId } = req.params;

      const question = await questionService.getOne(textQuestionId as string);

      if (!question) {
        return res.status(404).json({ error: "Questão não encontrada" });
      }

      return res.json(question);
    } catch (error) {
      return res.status(500).json("Erro interno");
    }
  }
);

// GET ALL
QuestionsRoutes.get(
  "/:textInfoId/questions",
  //authMiddleware,
  textInfoVerifyMiddleware,
  async (req, res) => {
    try {
      const { textInfoId } = req.params;

      const questions = await questionService.getAll(textInfoId as string);

      return res.json(questions);
    } catch (error) {
      return res.status(500).json("Erro interno");
    }
  }
);

// DELETE
QuestionsRoutes.delete(
  "/:textInfoId/questions/:textQuestionId",
  //authMiddleware,
  //adminMiddleware,
  textInfoVerifyMiddleware,
  async (req, res) => {
    try {
      const { textQuestionId } = req.params;

      await questionService.delete(textQuestionId as string);

      return res.json({ message: "Deletado com sucesso" });
    } catch (error) {
      return res.status(500).json("Erro interno");
    }
  }
);

// UPDATE
QuestionsRoutes.put(
  "/:textInfoId/questions/:textQuestionId",
  //authMiddleware,
  //adminMiddleware,
  textInfoVerifyMiddleware,
  async (req, res) => {
    try {
      const { textQuestionId } = req.params;

      const updated = await questionService.update(
        textQuestionId as string,
        req.body
      );

      return res.json(updated);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
);

export default QuestionsRoutes;