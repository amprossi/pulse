import { Router, Request, Response } from "express";
import { monitorRepository } from "../repositories/monitorRepository.js";

const controller = Router();

// GET all Monitors
controller.get("/", async(req: Request, res: Response) => {
    const list = await monitorRepository.findAll();
    res.json(list);
});

export default controller;