import React from 'react';
import ReactDOM from 'react-dom';

class HeaderBar extends React.Component {

  constructor(){

    super();
  }

  // Enables the popover and tooltips to display their content when hovered over
  enablePopoversAndTooltips(){

    this.enablePopovers();
    this.enableTooltips();
  }

  enablePopovers(){

    // select all elements with the 'data-toggle = popover'
    $(function () {
      $('[data-toggle="popover"]').popover()
    });
  }

  enableTooltips(){

    // select all elements with the 'data-toggle = tooltip'
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });
  }

  // Separately prevents the popovers on the page from displaying
  hidePopovers(){

    $(function () {
      $('[data-toggle="popover"]').popover('destroy')
    });
  }

  // Separately prevents the tooltips on the page from displaying
  hideTooltips(){

    $(function () {
      $('[data-toggle="tooltip"]').tooltip('destroy')
    });
  }

  // Calls both the functions that prevent the tooltips and popovers from displaying
  hidePopoversAndTooptips(){

    this.hidePopovers();
    this.hideTooltips();
  }

  checkForEnter(str_expression) {

    if (str_expression.key == 'Enter') {
      
      this.props.update();
    }
  }

  // Method to visually change button back and forth between on/off for tutorial
  changeButton(on, off){

      if (on.className == "btn btn-default"){

        on.className = "btn btn-primary active";
        off.className = "btn btn-default";

      }else if (off.className == "btn btn-default") {

        off.className = "btn btn-primary active";
        on.className = "btn btn-default";
    }
  }

    toggle(){

      console.log("HIT!");
      var on = document.getElementById('button_on');
      var off = document.getElementById('button_off');

      this.changeButton(on, off);

      if (on.className == "btn btn-primary active"){

        this.enablePopoversAndTooltips()

      }else if (off.className == "btn btn-primary active") {

        this.hidePopoversAndTooptips();
      }
    }

  render(){
    return (

        <div className="input-group" ref = "button_group">

          <input type="text" className="form-control" placeholder="List item..." name="text" id="text" onKeyUp={this.checkForEnter.bind(this)} size="75" defaultValue={this.props.text}
           data-toggle="tooltip" data-placement="bottom" title="This is the new text we will add to the list!"/>

          <span className="input-group-btn">
            <div>
              <button type="button" className="btn btn-default" data-toggle="popover" data-container="body" data-placement="right" title="Add Item"
                data-content="This will add the item to the list!" data-trigger="hover" onClick={this.props.update}>
                Add!
              </button>

              <button type="button" className="btn btn-default" data-toggle="popover" data-container="body" data-placement="bottom" title="Remove Item"
                data-content="This remove the last item from the list" data-trigger="hover" onClick={this.props.remove}>
                Remove!
              </button>

              <div id = "toggle_groups" className = "btn-group btn-toggle" data-toggle = "buttons">
                  <button className = "btn btn-default" id = "button_on" onClick = {this.toggle.bind(this)} > ON </button>
                  <button className = "btn btn-primary active" id = "button_off" onClick = {this.toggle.bind(this)} > OFF </button>
              </div>
            </div>
          </span>
        </div>
    );
  }
}

export default HeaderBar
