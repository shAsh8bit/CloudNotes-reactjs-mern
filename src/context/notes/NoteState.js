import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

const notesInitial=[
    {
      "_id": "615ae2a0f0f8fdf7fe0a4296",
      "user": "615a0b2af648be01256ea089",
      "title": "Lose Yourself",
      "description": "Best Solo Oscar",
      "content": "lose yourself in the moment you owe it just never let it go2222",
      "date": "2021-10-04T11:16:48.634Z",
      "__v": 0
    },
    {
      "_id": "615b8b690045a86cd3ed6f83",
      "user": "615a0b2af648be01256ea089",
      "title": "Revival",
      "description": "great song",
      "content": "Im not afraid to take a stand 2",
      "date": "2021-10-04T23:16:57.786Z",
      "__v": 0
    },
    {
      "_id": "615b8b770045a86cd3ed6f86",
      "user": "615a0b2af648be01256ea089",
      "title": "revival2",
      "description": "Best Solo2",
      "content": "Im not afraid to take a stand 2",
      "date": "2021-10-04T23:17:11.312Z",
      "__v": 0
    },
    {
      "_id": "615b8b7b0045a86cd3ed6f88",
      "user": "615a0b2af648be01256ea089",
      "title": "revival22",
      "description": "Best Solo2",
      "content": "Im not afraid to take a stand 2",
      "date": "2021-10-04T23:17:15.355Z",
      "__v": 0
    },
    {
      "_id": "615b8b840045a86cd3ed6f8a",
      "user": "615a0b2af648be01256ea089",
      "title": "im",
      "description": "Best Solo2",
      "content": "Im not afraid to take a stand 2",
      "date": "2021-10-04T23:17:24.278Z",
      "__v": 0
    },
    {
      "_id": "615b8b8a0045a86cd3ed6f8c",
      "user": "615a0b2af648be01256ea089",
      "title": "a",
      "description": "Best Solo2",
      "content": "Im not afraid to take a stand 2",
      "date": "2021-10-04T23:17:30.009Z",
      "__v": 0
    },
    {
      "_id": "615b8b8d0045a86cd3ed6f8e",
      "user": "615a0b2af648be01256ea089",
      "title": "b",
      "description": "Best Solo2",
      "content": "Im not afraid to take a stand 2",
      "date": "2021-10-04T23:17:33.934Z",
      "__v": 0
    },
    {
      "_id": "615ae2a0f0f8fdf7fe0a4296",
      "user": "615a0b2af648be01256ea089",
      "title": "Lose Yourself",
      "description": "Best Solo Oscar",
      "content": "lose yourself in the moment you owe it just never let it go",
      "date": "2021-10-04T11:16:48.634Z",
      "__v": 0
    },
    {
      "_id": "615ae2a0f0f8fdf7fe0a4296",
      "user": "615a0b2af648be01256ea089",
      "title": "Lose Yourself",
      "description": "Best Solo Oscar",
      "content": "lose yourself in the moment you owe it just never let it go",
      "date": "2021-10-04T11:16:48.634Z",
      "__v": 0
    },
    {
      "_id": "615ae2a0f0f8fdf7fe0a4296",
      "user": "615a0b2af648be01256ea089",
      "title": "Lose Yourself",
      "description": "Best Solo Oscar",
      "content": "lose yourself in the moment you owe it just never let it go",
      "date": "2021-10-04T11:16:48.634Z",
      "__v": 0
    },
   
    
  ]
const [notes, setNotes] = useState(notesInitial);

//add note
const addNote=(title,description,content)=>{

}

//update note
const updatenote=(title,description,content)=>{

}

//delete note
const deleteNote=(id)=>{

}

return (
     <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
)}
export default NoteState;