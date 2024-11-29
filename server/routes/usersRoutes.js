import express from "express";
import fs from "fs";
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const usersDetailsJSON = process.env.USERS;

export default router;