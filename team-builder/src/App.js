import React, { useState } from 'react';
import './App.css';

import Form from "./components/Form";
import EmployeeCard from "./components/EmployeeCard";


function App() {
  const [list, setList] = useState({});
  return (
    <div className="App">
      <Form setList={setList} list={list}></Form>
      for (employee in list){
        <EmployeeCard employee={list[employee]}></EmployeeCard>
      }
    </div>
  );
}

export default App;
