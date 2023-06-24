import { COLORS, Color } from './../types/Color';

type Props = {
    setMoves:React.Dispatch<React.SetStateAction<number>>
    moves: number
    setScore: React.Dispatch<React.SetStateAction<number>>
    score: number
    setStatus: React.Dispatch<React.SetStateAction<"finished" | "initial" | "playing">>
    setGameColors:React.Dispatch<React.SetStateAction<Color[]>>
}

const useHandleColorClick = ({setMoves,moves,setScore,setStatus,setGameColors}: Props) => {

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


  return {
    handleColorClick
  }
}

export default useHandleColorClick