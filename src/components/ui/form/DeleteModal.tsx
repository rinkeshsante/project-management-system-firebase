import React, { useState } from "react";

type Props = {};

export default function DeleteModal({}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Launch demo modal
      </button>

      <div
        className={`modal fade ${open ? "show" : ""}`}
        style={{
          display: `${open ? "block" : "none"}`,
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
              <button
                type="button"
                className="btn-close"
                onClick={() => setOpen(false)}
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setOpen(false)}
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
    </div>
  );
}
