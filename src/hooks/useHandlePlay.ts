import { COLORS, Color } from './../types/Color';

type Props = {
    setTime: React.Dispatch<React.SetStateAction<number>>
    setMoves:React.Dispatch<React.SetStateAction<number>>
    setScore: React.Dispatch<React.SetStateAction<number>>
    setStatus: React.Dispatch<React.SetStateAction<"finished" | "initial" | "playing" >>
    setGameColors:React.Dispatch<React.SetStateAction<Color[]>>
}

const useHandlePlay = ({setTime, setMoves, setScore, setStatus, setGameColors}: Props) => {

    const handlePlayEasy = () => {
        setStatus("playing");
        setTime(0);
        setScore(0);
        setMoves(10);
    
        const [correctColor, wrongColor] = COLORS.slice().sort(()=> Math.random()-0.5)
        setGameColors([{...correctColor, correct: true}, {...wrongColor, correct: false}].sort(() => Math.random() - 0.5))
      }
      const handlePlayHard = () => {
        setStatus("playing");
        setTime(0);
        setScore(0);
        setMoves(10);
    
        const [correctColor, wrongColor1] = COLORS.slice().sort(()=> Math.random()-0.5)
        console.log([correctColor, wrongColor1])
        setGameColors([{...correctColor, correct: true}, {...wrongColor1, correct: false}].sort(() => Math.random() - 0.5))
      }


  return {
    handlePlayEasy,
    handlePlayHard
  }
}

export default useHandlePlay