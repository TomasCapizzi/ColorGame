import Score from './Score';
import Timer from './Timer';
import styles from './Header.module.css'

type Props = {
    score: number;
    status:"initial" | "playing" | "finished"
    time: number
    setTime: React.Dispatch<React.SetStateAction<number>>
}

export default function Header({score, status, time, setTime}: Props) {
  return (
    <header className={styles.header}>
        <Score score={score} />
        <Timer status={status} time={time} setTime={setTime} />
    </header>
  )
}