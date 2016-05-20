import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeModal from './Modal';

class App extends React.Component {
  constructor(){
    super();
    this.state = {count: 1};
    this.update = this.update.bind(this);
  }

  update() {
    this.add();
    ReactDOM.render(<App text="" />, document.getElementById('app'))
    this.clear();
  }

//Called when remove button is pressed, removes last element on table
  remove() {
    const table = document.getElementById('table'); //get table from page
    if(this.state.count!=1 && this.state.count!=0){
      table.deleteRow(this.state.count-1);
      this.setState({count: this.state.count-1});
    }
  }

//Add method for taking text from text box and adding to table
  add(){
    const textToAdd = document.getElementById('textToAdd').value; //get text from text box
    if(textToAdd!="") {
        const table = document.getElementById('table'); //get table from page
        var row = table.insertRow(this.state.count);  //add blank row to table
        var cell1 = row.insertCell(0);                //add blank cells to row
        var cell2 = row.insertCell(1);
        cell1.innerHTML = this.state.count;           //modify cell contents
        cell2.innerHTML = textToAdd;
        this.setState({count: this.state.count+1});   //increment state number
      }
      this.clear();                                 //clear textbox
  }

//Clear method for clearing text out of text box before next button click
  clear(){
    document.getElementById("textToAdd").value = "";
  }

  render(){
    return (
      <div>
        <WelcomeModal/>
        <form>
          <div className="row">
          <div className="col-lg-6">

          <div className="input-group">
            <input type="text" className="form-control" placeholder="List item..." name="textToAdd" id="textToAdd" size="75" defaultValue={this.props.text} data-toggle="tooltip" data-placement="bottom" title="This is the new text we will add to the list!"/>
            <span className="input-group-btn">
              <button type="button" className="btn btn-default" data-toggle="popover" data-container="body" data-placement="right" title="Add Item"
                data-content="This will add the item to the list!" data-trigger="hover" onClick={this.update.bind(this)}>
                Add!
              </button>
              <button type="button" className="btn btn-default" data-toggle="popover" data-container="body" data-placement="bottom" title="Remove Item"
                data-content="This remove the last item from the list" data-trigger="hover" onClick={this.remove.bind(this)}>
                Remove!
              </button>
            </span>
          </div>

          <br/> <br/> <hr size="50"/> <br/>

          <div>
            <table data-toggle="table" className="table" id="table" >
              <thead className="thead-inverse">
                <tr>
                  <th>#</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody id="tbody">
              </tbody>
            </table>
          </div>

          </div>
          </div>
        </form>
    </div>
    );
  }
}


App.defaultProps = { text: "" }

export default App
