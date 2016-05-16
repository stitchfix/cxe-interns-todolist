import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = { };
    this.update = this.update.bind(this);
  }


  update() {
    console.log("update");
    this.add();
    console.log('rendering..');
    console.log(this.props.text);
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
      <div>

        <input type="textarea" name="textToAdd" id="textToAdd" size="75" defaultValue={this.props.text}/>

        <button type="submit" class="btn btn-secondary" data-toggle="popover" data-container="body" data-placement="right" title="Add Item"
          data-content="This will add the item to the list!" data-trigger="hover" onClick={this.update.bind(this)}>
          Add Item!
        </button>

        <ul id="list"></ul>
      </div>
    );
  }
}

App.defaultProps = { text: "" }

export default App
