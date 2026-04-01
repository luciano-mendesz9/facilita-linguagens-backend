import { adminMiddleware } from "@/middleware/adminMiddleware.js";
import { authMiddleware } from "@/middleware/authMiddleware.js";
import { textInfoVerifyMiddleware } from "@/middleware/textInfoVerifyMiddleware.js";
import { Router } from "express";

const QuestionsRoutes = Router();

// criar as questoes para um textoInfo (somente para o admin)
QuestionsRoutes.post('/:textInfoId/questions', authMiddleware, adminMiddleware, textInfoVerifyMiddleware, async (req, res) => {});

// pegar 1 questão de um texto via textInfoId e textQuestionId
QuestionsRoutes.get('/:textInfoId/questions/:textQuestionId', textInfoVerifyMiddleware, async (req, res) => {
    res.status(200).json({ message: 'Questão encontrada com sucesso!' });
});

// pegar todas as questões de um texto via textInfoId (somente para o admin)
QuestionsRoutes.get('/:textInfoId/questions/', authMiddleware, adminMiddleware, textInfoVerifyMiddleware, async (req, res) => {});

// deletar 1 de um texto via textInfoId e textQuestionId (somente para o admin)
QuestionsRoutes.delete('/:textInfoId/questions/:textQuestionId', authMiddleware, adminMiddleware, textInfoVerifyMiddleware, async (req, res) => {});

// atualizar 1 de um texto via textInfoId e textQuestionId (somente para o admin)
QuestionsRoutes.put('/:textInfoId/questions/:textQuestionId', authMiddleware, adminMiddleware, textInfoVerifyMiddleware, async (req, res) => {});


export default QuestionsRoutes;