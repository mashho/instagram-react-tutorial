import logo from './logo.svg';
import './App.css';
import LeftSide from './Component/leftSide';
import MiddleSide from './Component/middleSide';
import RightSide from './Component/rightSide';

function App() {
  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide />
      </div>
      <div className="middlSide">
        <MiddleSide/>
       

      </div>
      <div className="rightSide">
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
