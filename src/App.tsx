import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import TableModal from './components/Modal/Modal';

const Button = styled.button`
  background-color: cornflowerblue;
  color: #fff;
  outline: none;
  border: 1px solid cornflowerblue;
  border-radius: 7px;
  padding: 7px;
`

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const showTable = () =>
  {
    setIsOpen(true)
  }

  const closeTable = () => {
    setIsOpen(false)
  }

  return (
    <div className="App">
      <Button onClick={showTable}>Click Me</Button>
      <TableModal isOpen={isOpen} onCloseTable={closeTable} />
    </div>
  );
}

export default App;
