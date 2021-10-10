import React from "react";

function Alert(props) {
  return (
    <div>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        {props.message}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

export default Alert;
