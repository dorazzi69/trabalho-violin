import express from "express";
import {
  createPlayer,
  getPlayers,
  deletePlayer
} from "./controllers/playerController.js";

const router = express.Router();

router.post("/", createPlayer);
router.get("/:userId", getPlayers);
router.delete("/:id", deletePlayer);

export default router;