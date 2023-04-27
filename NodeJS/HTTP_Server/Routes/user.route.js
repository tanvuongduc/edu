import express from "express";
import controller from "../Controllers/user.controller";

const router = express.Router();

router.get('/',controller.get);

export default router;

