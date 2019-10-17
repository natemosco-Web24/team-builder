import React, { useState } from 'react';
import './App.css';

import Form from "./components/Form";
import EmployeeCard from "./components/EmployeeCard";


function App() {
  const [list, setList] = useState({});
  const array = []
  for (var property in list) {
    array.push(<EmployeeCard key={list[property].employeeid} employee={list[property]}></EmployeeCard>)
  }

  return (
    <div className="App">
      <Form setList={setList} list={list}></Form>
      {array}
      {/* {
        Object.keys(list).map((property) => (
          <EmployeeCard key={list[property].employeeid} employee={list[property]}></EmployeeCard>
        ))} */}
    </div>
  );
}

export default App;
