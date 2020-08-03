import React, {useState} from 'react';
import './App.css';

import Navigator from './components/navigator/navigator';
function App() {
  const [screen, setScreen] = useState("map");
  return (
    <div className="App">
      <div className="nav">
        <button onClick={()=> setScreen("map")} className="navButton">Mapa</button>
        <button onClick={()=> setScreen("pointslist")} className="navButton">Mis puntos</button>
        <button onClick={()=> setScreen("createpoint")} className="navButton">Crear punto</button>
      </div>
      <Navigator screen={screen}/>
    </div>
  );
}

export default App;
