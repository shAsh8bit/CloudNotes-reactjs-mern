const express = require("express");
const Notes = require("../models/Notes");
const router = express.Router();
const getuser = require("../middleware/getuser");
const { body, validationResult } = require("express-validator");


//get all notes associated with the user
//localhost:5000/api/notes/getallmotes
router.get("/getallnotes", getuser, async (req, res) => {
  try {
    const note = await Notes.find({ user: req.user.id });
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;

//add notes   //localhost:5000/api/notes/addnotes
router.post(
  "/addnotes",
  getuser,
  [
    //setting requirements for each element
    body("content", "Add something to save").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const { title, description, content } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const notes = new Notes({
        user: req.user.id,
        title,
        description,
        content,
      });
      const savedNote = await notes.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);
module.exports = router;

//update note  ///localhost:5000/api/notes/updatenote/:id
router.put("/updatenote/:id", getuser, async (req, res) => {

    const {title,description,content}=req.body 
    const updatedNote ={};
    if(title){updatedNote.title = title}
    if(description){updatedNote.description = description}
    if(content){updatedNote.content =content}

    await Notes.findByIdAndUpdate(req.params.id , updatedNote)
    res.send(updatedNote)
});
module.exports = router;


//delete note //localhost:5000/api/notes/deletenote/:id

router.delete("/deletenote/:id",getuser, async (req,res) =>
{
   await Notes.findByIdAndDelete(req.params.id)
   res.send('deleted')

});

