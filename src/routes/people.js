import express from "express";
import {
  findPeople, addPerson
} from "../controllers/people";


const router = express.Router();

router.get("/", findPeople);
router.post("/", addPerson);

export default router;