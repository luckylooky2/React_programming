import smallImage from './image/small.jpeg'
import bigImage from './image/big.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={smallImage} alt='big'/>
      <img src={bigImage} alt='big'/>
    </div>
  );
}

export default App;
