import React from "react";
import Notes from "./Notes";

function Home() {
  return (
      <>

    <div className="container rounded"  style={{backgroundColor:"#acdff3"}} >
      <div className="container my-4 ">
        <h5 className="mx-2">
          <button
            type="button"
            className="rounded-circle btn btn-primary btn-lg font-weight-bold mx-2 my-3"
            data-toggle="modal" 
            data-target="#exampleModal"
            data-placement="bottom" title="click to add new notes"
          >
            <h4>+</h4>
          </button>
          <a className="text-secondary" type="button"  data-toggle="modal" 
            data-target="#exampleModal">Add Notes</a> 
        </h5>
      
      {/* Modal */}
      <div
        className="modal fade"
        style={{backgroundColor:"#acdff35c"}}
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Add a new note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Form  inside Modal*/}
              <form>
                <div className="form-group">
                  
                  <input
                    type="text"
                    className="form-control"
                    
                    placeholder="Title"
                  />
                 
                </div>
                <div className="form-group">
                  
                  <input
                    type="text"
                    className="form-control"
                    
                    placeholder="Description"
                  /></div>
                   <div className="form-group mb-2">
            
            <textarea className="form-control" placeholder="Content"></textarea>
          </div>
                
              </form>
              {/* Form End */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal End */}
      </div>
</div>

    <Notes/>
      </>
  );
}

export default Home;
