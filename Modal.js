import React, { PropTypes } from 'react'



class Modal extends React.Component {
  constructor() {
    super();
    this.initializeModal();
  }

//Turn on Modal to appear in App
  initializeModal(){
    $(function() {
      $('#myModal').modal('show');
    });
  }

  render () {
    return (
      <div>
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h3 className="modal-title text-center" id="myModalLabel" ><b><u>Notes!</u></b> (v 0.4.0)</h3>
            </div>
            <div className="modal-body">
              Welcome to <u>Notes!</u> This program will temporarily store your notes. You can add
              them to your list by typing them in the text box and clicking on the <button>Add!</button> button or pressing <kbd>Enter</kbd>. Clicking
              on <button>Remove!</button> will remove your previous note.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" >Okay, sounds good!</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Modal
