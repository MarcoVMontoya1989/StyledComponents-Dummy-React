import React from 'react';
import styled from "styled-components";
import './App.css';
import {CardComponent} from "./components/card/card.component";

const Text = styled.div`
 color: red;
 font-size: 29px;
 border: ${({isActive}) => isActive ? '1px solid black' : '3px dotted green'};
`;

function App() {
  return (
    <div className="App">
      <CardComponent>
        <Text isActive={true}>I am a component.</Text>
      </CardComponent>
    </div>
  );
}

export default App;
