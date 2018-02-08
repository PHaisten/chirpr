import { Router } from "express";
import { getMention } from "../db";
let router = Router();

router.get("/:id", (req, res) => {
  let userid = req.params.id;
  getMention(userid).then(results => {
    res.send(results);
  });
  console.log("GetMention");
});

export default router;
