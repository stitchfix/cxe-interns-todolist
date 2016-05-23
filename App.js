import React from 'react';
import ReactDOM from 'react-dom';
import ListTable from "./ListTable";
import WelcomeModal from './Modal';
import HeaderBar from './HeaderBar';

class App extends React.Component {
  constructor(){

    super();
    this.state = {count: 1};
    this.update = this.update.bind(this);
  }

  update() {

    this.add();
    this.clear();
  }

  // Called when remove button is pressed, removes last element on table
  remove() {

    const table = document.getElementById('table'); //get table from page

    if(this.state.count!=1 && this.state.count!=0){
      table.deleteRow(this.state.count-1);
      this.setState({count: this.state.count-1});
    }
  }

  // Add method for taking text from text box and adding to table
  add(){

    const text = document.getElementById('text').value; //get text from text box

    if(text != "") {

        const table = document.getElementById('table'); //get table from page
        var row = table.insertRow(this.state.count);  //add blank row to table
        var cell1 = row.insertCell(0);                //add blank cells to row
        var cell2 = row.insertCell(1);
        cell1.innerHTML = this.state.count;           //modify cell contents
        cell2.innerHTML = text;
        this.setState({count: this.state.count+1});   //increment state number
      }
      this.clear();                                 //clear textbox
  }

  // Clear method for clearing text out of text box before next button click
  clear(){

    document.getElementById("text").value = "";
  }

  render(){
    return (

      <div>
        <WelcomeModal/>
          <div className="row">
          <div className="col-lg-8">

          <HeaderBar update = {this.update.bind(this)} remove = {this.remove.bind(this)}/>

          <br/> <br/> <hr size="50"/> <br/>

          <ListTable/>

          </div>
          </div>
      </div>
    );
  }
}

export default App
