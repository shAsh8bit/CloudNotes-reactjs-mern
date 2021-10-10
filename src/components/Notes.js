import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <>
    {/* <div className="d-flex ">
      <div className="container my-2">
      <h2 className="my-2">
        <span className="badge badge-rounded badge-warning my-2  mx-4" >
          Your Notes <span className="rounded-circle badge badge-light"></span>
        </span>{" "}
      </h2></div>

      
    </div> */}
    
    <div className="container rounded-lg" >
      
        
      <div className=" card-columns col-md-12 "> 
        {notes.map((note) => {
          return <Noteitem note={note} />;
        })}
        </div>
      </div>
    </>
  );
};

export default Notes;
