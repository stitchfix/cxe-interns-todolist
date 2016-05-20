import React from 'react';

class ListTable extends React.Component {

  render(){

    return (
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
    );
  }
}

export default ListTable
