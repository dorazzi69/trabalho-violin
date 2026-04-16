// src/controllers/userController.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const register = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await prisma.usuario.create({
      data: { email, senha }
    });

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Erro ao cadastrar usuário" });
  }
};

export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await prisma.usuario.findUnique({
      where: { email }
    });

    if (!user || user.senha !== senha) {
      return res.status(401).json({ error: "Login inválido" });
    }

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Erro ao fazer login" });
  }
};