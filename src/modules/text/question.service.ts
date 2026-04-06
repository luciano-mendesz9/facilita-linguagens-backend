import { prisma } from "@/lib/prisma.js";

type AlternativeInput = {
  alternative: string;
  isCorrect: boolean;
};

type CreateQuestionInput = {
  statement: string;
  alternatives: AlternativeInput[];
};

class QuestionsService {
  async create(textInfoId: string, data: CreateQuestionInput) {
    const { statement, alternatives } = data;

    if (!alternatives || alternatives.length < 2) {
      throw new Error("A questão precisa de pelo menos 2 alternativas");
    }

    const correctCount = alternatives.filter(a => a.isCorrect).length;

    if (correctCount !== 1) {
      throw new Error("Deve existir apenas UMA alternativa correta");
    }

    return prisma.textQuestion.create({
      data: {
        statement,
        textInfoId,
        alternatives: {
          create: alternatives.map((alt) => ({
            alternative: alt.alternative,
            isCorrect: alt.isCorrect,
          })),
        },
      },
      include: {
        alternatives: true,
      },
    });
  }

  async getAll(textInfoId: string) {
    return prisma.textQuestion.findMany({
      where: { textInfoId },
      include: {
        alternatives: true,
      },
    });
  }

  async getOne(textQuestionId: string) {
    return prisma.textQuestion.findUnique({
      where: { id: textQuestionId },
      include: {
        alternatives: true,
      },
    });
  }

  async delete(textQuestionId: string) {
    // deleta alternativas primeiro
    await prisma.questionAlternative.deleteMany({
      where: { questionId: textQuestionId },
    });

    return prisma.textQuestion.delete({
      where: { id: textQuestionId },
    });
  }

  async update(textQuestionId: string, data: CreateQuestionInput) {
    const { statement, alternatives } = data;

    const correctCount = alternatives.filter(a => a.isCorrect).length;

    if (correctCount !== 1) {
      throw new Error("Deve existir apenas UMA alternativa correta");
    }

    // remove antigas
    await prisma.questionAlternative.deleteMany({
      where: { questionId: textQuestionId },
    });

    return prisma.textQuestion.update({
      where: { id: textQuestionId },
      data: {
        statement,
        alternatives: {
          create: alternatives.map((alt) => ({
            alternative: alt.alternative,
            isCorrect: alt.isCorrect,
          })),
        },
      },
      include: {
        alternatives: true,
      },
    });
  }
}

export default new QuestionsService();