import { useState, React } from 'react'
import Tallies from 'tallies';

function App () {
  const [randomNum, setRandomNum] = useState(0)

  return (
    <>
    <button onClick={()=>setRandomNum(Math.floor(Math.random()*101))}>PUSH ME</button>
    <p>{randomNum}</p>
    <Tallies number={randomNum} />
    </>
  );
}

export default App;
