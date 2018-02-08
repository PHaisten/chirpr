import { Router } from "express";
import {
  getChirp,
  getChirps,
  postChirp,
  deleteChirps,
  updateChirp,
  getMention
} from "../db";

let router = Router();

router.get("/", (req, res) => {
  getChirps().then(results => {
    res.send(results[0]);
  });
  console.log("GetChirps");
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  getChirp(id).then(results => {
    res.send(results);
  });
  console.log("GetChirp");
});

// router.post("/:id", (req, res) => {
//   let id = req.params.id;
//   let text = req.body.text;
//   updateChirp(id, text).then(results => {
//     res.send(results);
//   });
//   console.log("UpdateChirp");
// });

router.post("/", (req, res) => {
  let chirp = req.body;
  postChirp(chirp).then(results => {
    res.send(results);
  });
  console.log(req);
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  deleteChirps(id).then(results => {
    res.send(results);
  });
  console.log("DeleteChirps");
});

router.get("/:id", (req, res) => {
  let userid = req.params.userid;
  getMention(userid).then(results => {
    res.send(results);
  });
  console.log("MentionedChirp");
});
export default router;
