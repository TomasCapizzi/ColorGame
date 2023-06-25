import { Color } from "../types/Color"
import styles from './ChooseLevels.module.css'
import useHandlePlay from "../hooks/useHandlePlay"

type Props = {
    setTime: React.Dispatch<React.SetStateAction<number>>
    setMoves:React.Dispatch<React.SetStateAction<number>>
    setScore: React.Dispatch<React.SetStateAction<number>>
    setStatus: React.Dispatch<React.SetStateAction<"finished" | "initial" | "playing">>
    setGameColors:React.Dispatch<React.SetStateAction<Color[]>>
}

export default function ChooseLevels({setTime, setMoves, setScore, setStatus, setGameColors}: Props) {

    const {handlePlayEasy, handlePlayHard} = useHandlePlay({setTime, setMoves, setScore, setStatus, setGameColors})

  return (
    <div className={styles.choose_levels}>
        <h1>Let's Play!</h1>
        <p className={styles.choose_levels_p}>Choose Difficulty</p>
        <div className={styles.buttons_cont}>
          <button onClick={handlePlayEasy}>Easy</button>
          <button onClick={handlePlayHard}>Hard</button>
        </div>

    </div>
  )
}