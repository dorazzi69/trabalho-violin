import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const registrarUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await prisma.usuario.create({
      data: {
        email,
        senha
      }
    });

    res.json(usuario);
  } catch (erro) {
    res.json({ erro: "Erro ao cadastrar usuário" });
  }
};

export const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        email
      }
    });

    if (!usuario || usuario.senha !== senha) {
      return res.json({ erro: "Login inválido" });
    }

    res.json(usuario);
  } catch (erro) {
    res.json({ erro: "Erro ao fazer login" });
  }
};