import React from "react";

function EmployeeList(props) {
  return (
    <div className="card">
      
      {props.results.map(results => (

        <tr className="list-group-item" >
         <th scope="row"> <img alt={results.name} className="img-fluid" src={results.picture.medium} /></th>
      <td> {results.name.first}  {results.name.last}</td>
      <td> {results.email}</td>
      <td> {results.cell}</td>
      <td> {results.dob.age}</td>
        </tr>
        
        
      ))}
    </div>
  );
}

export default EmployeeList;
