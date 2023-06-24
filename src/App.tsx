import { COLORS, Color } from "./types/Color";
import { useMemo, useState } from "react";

import GameButtons from "./components/GameButtons";
import GameDirections from "./components/GameDirections";
import Header from "./components/Header";

function App() {

  const [status, setStatus] = useState<"initial" | "playing" | "finished">("initial");
  const [moves, setMoves] = useState<number>(10);
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [gameColors, setGameColors] = useState<Color[]>([])
  const correctColor = useMemo<Color>(() => gameColors.find((color) => color.correct)!, [gameColors])

  const handlePlay = () => {
    setStatus("playing");
    setTime(0);
    setScore(0);
    setMoves(10)

    const [correctColor, wrongColor] = COLORS.slice().sort(()=> Math.random()-0.5)
    setGameColors([{...correctColor, correct: true}, {...wrongColor, correct: false}].sort(() => Math.random() - 0.5))
  }


  const handleColorClick = (clickedColor: Color) => {
    setMoves((moves) => moves - 1)
    if(clickedColor.correct){
      setScore((score)=> score + 1);
      if(moves === 1){
        setStatus("finished")
      } else {
        const [correctColor, wrongColor] = COLORS.slice().sort(()=> Math.random()-0.5)
        setGameColors([{...correctColor, correct: true}, {...wrongColor, correct: false}].sort(() => Math.random() - 0.5))
      }
    } else {
      setScore((score)=> score - 1);
      if(moves === 1){
        setStatus("finished")
      }else {
        const [correctColor, wrongColor] = COLORS.slice().sort(()=> Math.random()-0.5)
        setGameColors([{...correctColor, correct: true}, {...wrongColor, correct: false}].sort(() => Math.random() - 0.5))
      }
      
    }
  }

  return (
    <main>
      <Header score={score} status={status} time={time} setTime={setTime} />
      {status === 'playing' && (<GameDirections  moves={moves} gameColors={gameColors} correctColor={correctColor} />)}
      <footer>
        {status === 'initial' && <button onClick={handlePlay}>Play</button>}
        {status === 'finished' && <button onClick={()=> setStatus('initial')}>Start Over</button>}
        {status === 'playing' && gameColors && <GameButtons handleColorClick={handleColorClick} gameColors={gameColors} />}
      </footer>
    </main>
  );
}

export default App;