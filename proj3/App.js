import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = { };
    this.update = this.update.bind(this);
  }


//Update method called onClick of add button
  update() {
    this.add();       //add text item to ul
    this.clearText(); //clear text box
    ReactDOM.render(<App />, document.getElementById('app'))
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

//Clears value in text box
  clearText(){
    document.getElementById("textToAdd").value = "";
  }


  render(){
    return (
      <div>
        <input type="text" name="textToAdd" id="textToAdd" size="75" defaultValue={this.props.text}/>
        <input type="submit" value="Add" id="addbutton" onClick={this.update.bind(this)}/>
        <ul id="list"></ul>
      </div>
    );
  }
}

App.defaultProps = { text: "" }

export default App
