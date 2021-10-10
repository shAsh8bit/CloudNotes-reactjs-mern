import React from "react";

const Noteitem = (props) => {
  const { note } = props;

  return (
    <div className="card my-2" style={{ backgroundColor: "#f5adad" }}>
      <div className="card-body" data-toggle="modal" data-target="#viewContent">
        <h5 className="card-title">
          {note.title.charAt(0).toUpperCase() + note.title.slice(1)}
        </h5>
        <p className="card-text">
          {note.description.charAt(0).toUpperCase() + note.description.slice(1)}
        </p>
        
      </div>{" "}
      
      

      <div className="card-footer" style={{ backgroundColor: "#fbdede" }}>
        <small>{new Date(note.date).toUTCString().slice(4)}</small>

        {/* Update and Delete button  */}
        <div className="btn-group ml-5" role="group">
          
        
          {/* Update button  */}
          <button
            type="button"
            className="btn btn-secondary ml-2"
            style={{ backgroundColor: "#5cb122" }}
            data-toggle="modal"
            data-target="#updateModal"
            title="update note"
          >
            <i className="far fa-edit"></i>
          </button>

          {/* update Modal */}
          <div
            className="modal fade"
            style={{ backgroundColor: "#5cb1223b" }}
            id="updateModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="updateModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="updateModalLabel">
                    Update
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
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End update Modal */}

          {/* Delete Button  */}
          <button
            type="button"
            className="btn btn-danger rounded-right"
            style={{ backgroundColor: "#fb5e5e" }}
            data-toggle="modal"
            data-target="#deleteModal"
            title="delete note"
          >
            <i className="far fa-trash-alt "></i>
          </button>

          {/* Modal for Delete */}
          <div
            className="modal fade"
            style={{ backgroundColor: "#fb5e5e26" }}
            id="deleteModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="deleteModalTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="updateModalLongTitle">
                    Delete
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
                  Are you sure you want to delete note ?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    No
                  </button>
                  <button type="button" className="btn btn-danger">
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end Delete Modal */}
        </div>
      </div>
      {/* Modal for view Content */}
      <div
        className="modal fade"
        style={{ backgroundColor: "#f5adad78" }}
        id="viewContent"
        tabindex="-1"
        role="dialog"
        aria-labelledby="viewContentLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="viewContentLabel">
                Your Contents
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
            <div className="modal-body">{note.content}</div>
          </div>
        </div>
      </div>
      {/* END modal */}
    </div>
  );
};

export default Noteitem;
{
  /* <a
className="btn btn-primary"
data-toggle="collapse"
href="#collapseExample"
role="button"
aria-expanded="false"
aria-controls="collapseExample"
>
View Content
</a>
<div className="collapse" id="collapseExample">
<div className="card card-body">{note.content}</div>
</div> */
}
