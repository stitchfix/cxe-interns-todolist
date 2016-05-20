import React, { PropTypes } from 'react'


const Modal = React.createClass({
  render () {
    return (
      <div>
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h3 className="modal-title" id="myModalLabel" align="center"><b><u>Notes!</u></b> (v0.3.0)</h3>
            </div>
            <div className="modal-body">
              Welcome to <u>Notes!</u> This program will temporarily store your notes. You can add
              them to your list by typing them in the text box and clicking on the <b>add</b> button. Clicking
              on <b>remove</b> will remove your previous note.
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
})

export default Modal
