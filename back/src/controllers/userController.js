import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// registrar (POST)
export const registrarUsuario = async (req, res) => {
  const user = await prisma.usuario.create({
    data: req.body
  });

  res.json(user);
};

// login (POST)
export const loginUsuario = async (req, res) => {
  const user = await prisma.usuario.findUnique({
    where: { email: req.body.email }
  });

  if (!user || user.senha !== req.body.senha) {
    return res.json({ erro: "Login inválido" });
  }

  res.json(user);
};