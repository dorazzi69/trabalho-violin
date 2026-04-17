import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPlayer = async (req, res) => {
  const { nome, stats, userId } = req.body;

  const media = Math.round(
    Object.values(stats).reduce((a, b) => a + Number(b), 0) /
    Object.values(stats).length
  );

  const player = await prisma.jogador.create({
    data: { nome, ...stats, media, userId }
  });

  res.json(player);
};


export const getPlayers = async (req, res) => {
  const players = await prisma.jogador.findMany({
    where: { userId: Number(req.params.userId) }
  });

  res.json(players);
};


export const deletePlayer = async (req, res) => {
  await prisma.jogador.delete({
    where: { id: Number(req.params.id) }
  });

  res.json({ ok: true });
};