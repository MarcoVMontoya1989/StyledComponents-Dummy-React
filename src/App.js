import React from 'react';
import './App.css';
import {CardComponent} from "./components/card/card.component";

function App() {
  return (
    <div className="App">
      <CardComponent>
        <div>
          I am a component.
        </div>
      </CardComponent>
    </div>
  );
}

export default App;
