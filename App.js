import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = { };
    this.update = this.update.bind(this);
  }


  update() {
    this.add();
    ReactDOM.render(<App text="" />, document.getElementById('app'))
    this.clear();
  }


//Add method for taking text from text box and adding to unordered list ul
  add(){
    var textToAdd = document.getElementById('textToAdd').value; //get text from text box
    //if text isn't blank/null, add
    if(textToAdd!="") {
      var ul = document.getElementById("list"); //get list
      var li = document.createElement("li");    //make li element
      li.appendChild(document.createTextNode(textToAdd));//add text node
      ul.appendChild(li); //append li to list
    }
  }

//Clear method for clearing text out of text box before next button click
  clear(){
    document.getElementById("textToAdd").value = "";
  }

  render(){
    return (
      <form>
      <div className="row">
      <div className="col-lg-6">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="List item..." name="textToAdd" id="textToAdd" size="75" defaultValue={this.props.text} data-toggle="tooltip" data-placement="bottom" title="This is the new text we will add to the list!"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-default" data-toggle="popover" data-container="body" data-placement="right" title="Add Item"
            data-content="This will add the item to the list!" data-trigger="hover" onClick={this.update.bind(this)}>
            Add!
          </button>
        </span>
      </div>
      </div>
      </div>
      </form>
    );
  }
}


App.defaultProps = { text: "" }

export default App
