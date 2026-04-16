import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPlayer = async (req, res) => {
  const { nome, stats, userId } = req.body;

  const valores = Object.values(stats).map(Number);
  const media = Math.round(
    valores.reduce((a, b) => a + b, 0) / valores.length
  );

  const player = await prisma.jogador.create({
    data: {
      nome,
      ...stats,
      media,
      userId
    }
  });

  res.json(player);
};

export const getPlayers = async (req, res) => {
  const { userId } = req.params;

  const players = await prisma.jogador.findMany({
    where: { userId: Number(userId) }
  });

  res.json(players);
};

export const deletePlayer = async (req, res) => {
  const { id } = req.params;

  await prisma.jogador.delete({
    where: { id: Number(id) }
  });

  res.json({ message: "Deletado" });
};