import express from "express";
import { routeDetails, routeList } from "./controllers/routesController.mjs";

const router = express.Router();

router.get("/routes", routeList);
router.get("/routes/:id", routeDetails);

export default router;
