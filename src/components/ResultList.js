import React from "react";

function EmployeeList(props) {
  return (
    <div className="card">
      
      {props.results.map(results => (

        <div className="list-group-item" >
          <img alt={results.name} className="img-fluid" src={results.picture.medium} />
      <p>Name: {results.name.first}  {results.name.last}</p>
      <p>Email: {results.email}</p>
      <p>Phone number: {results.cell}</p>
      <p>Age: {results.dob.age}</p>
        </div>
        
        
      ))}
    </div>
  );
}

export default EmployeeList;
