import React from 'react';
import './App.css';

import Home from './views/home/Home';
import HomeClass from './views/home/HomeClass';

function App() {
  return (
    <div className="App">
      <Home msg="Component Home"></Home>
      {/* <HomeClass msg="Component Home (Class)"></HomeClass> */}
    </div>
  );
}

export default App;
