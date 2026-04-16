import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPlayer = async (req, res) => {
  const { nome, stats, userId } = req.body;

  if (!nome || !stats || !userId) {
    return res.status(400).json({ error: "Nome, estatísticas e userId são obrigatórios" });
  }

  try {
    const valores = Object.values(stats).map(Number);
    const media = Math.round(valores.reduce((a, b) => a + b, 0) / valores.length);

    const player = await prisma.jogador.create({
      data: {
        nome,
        ...stats,
        media,
        userId
      }
    });

    res.status(201).json(player);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Erro ao criar jogador" });
  }
};

export const getPlayers = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: "UserId é obrigatório" });
  }

  try {
    const players = await prisma.jogador.findMany({
      where: {
        userId: Number(userId)
      }
    });

    if (players.length === 0) {
      return res.status(404).json({ message: "Nenhum jogador encontrado" });
    }

    res.json(players);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Erro ao buscar jogadores" });
  }
};

export const deletePlayer = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "ID do jogador é obrigatório" });
  }

  try {
    const player = await prisma.jogador.delete({
      where: {
        id: Number(id)
      }
    });

    res.json({ message: "Jogador deletado com sucesso", player });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Erro ao deletar jogador" });
  }
};