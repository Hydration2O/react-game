import "./App.css";
import { useState } from "react";
import upgradeData from "./data/upgradeData";
import Upgrade from "./components/upgrade";

function App() {
  const [counter, setcounter] = useState(0);
  const increment = (num) => {
    return (num += 1);
  };
  const pay = (num, cost) => {
    return (num -= cost);
  };

 

  const upgradeList = upgradeData.map((elem) => {
    if(counter>=elem.cost){
      return <Upgrade
      setcounter={setcounter}
      counter={counter}
      pay={pay}
      myUpgrades={elem}
    />
    }
    
  }
   
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <button
          className="mainButton"
          onClick={(event) => {
            setcounter(increment);
          }}
        >
          make a webSite
        </button>
      </header>
      <div className="upgradeButtons">
        {upgradeList}
      </div>
    </div>
  );
}

export default App;
