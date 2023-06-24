import { useMemo, useState } from "react";

import ChooseLevels from "./components/ChooseLevels";
import { Color } from "./types/Color";
import GameButtons from "./components/GameButtons";
import GameDirections from "./components/GameDirections";
import Header from "./components/Header";
import useHandleColorClick from "./hooks/useHandleColorClick";
import useHandlePlay from "./hooks/useHandlePlay";

function App() {

  const [status, setStatus] = useState<"initial" | "playing" | "finished">("initial");
  const [moves, setMoves] = useState<number>(10);
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [gameColors, setGameColors] = useState<Color[]>([])
  const correctColor = useMemo<Color>(() => gameColors.find((color) => color.correct)!, [gameColors])
  const {handleColorClick} = useHandleColorClick({setMoves,moves,setScore,score,setStatus,setGameColors}) 
  //const {handlePlayEasy} = useHandlePlay({setTime, setMoves, setScore, setStatus, setGameColors})
/*
  const initialState = () => ({
    score: 0
  })
  const reducer = (state = initialState(), action = {}) => {
    switch(action.type){
      case 'INCREMENT':
        return {score: state.score + 1}
      case 'DECREMENT':
        return {score: state.score - 1}
      case 'RESET':
        return {score: 0}
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, reducer())
  const incrementScore = ()=> dispatch({type: 'INCREMENT'})*/

  return (
    <main>
      <Header score={score} status={status} time={time} setTime={setTime} />
      {status === 'playing' && (<GameDirections  moves={moves} gameColors={gameColors} correctColor={correctColor} />)}
      <footer>
        {status === 'initial' && <ChooseLevels setTime={setTime}  setMoves={setMoves} setScore={setScore} setStatus={setStatus} setGameColors={setGameColors} />}
        {status === 'finished' && <button onClick={()=> setStatus('initial')}>Start Over</button>}
        {status === 'playing' && gameColors && <GameButtons handleColorClick={handleColorClick} gameColors={gameColors} />}
      </footer>
    </main>
  );
}

export default App;