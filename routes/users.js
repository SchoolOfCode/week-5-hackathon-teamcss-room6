import express from "express";

import {
  getAllUsers,
  getUserById,
  postUser,
  updateUserInfoById,
  updateUserPasswordById,
  deleteUserByUserId,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", postUser);
router.patch("/:id", updateUserInfoById);
router.patch("/:id", updateUserPasswordById);
router.delete("/:id", deleteUserByUserId);

export default router;
