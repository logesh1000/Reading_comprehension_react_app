import React from 'react';

import Card from './components/Card';
import {BrowserRouter} from 'react-router-dom'



const h1Style = {
  color: 'blue',
  textAlign: 'center',
};



function App() {
  return (
    <div>
      <h1 style={h1Style}>Reading Comprehension: Q&A</h1>
      <BrowserRouter>
      <Card />
      </BrowserRouter>
    </div>
  );
}

export default App;
