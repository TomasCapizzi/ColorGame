import Score from './Score';
import Timer from './Timer';

type Props = {
    score: number;
    status:"initial" | "playing" | "finished"
    time: number
    setTime: React.Dispatch<React.SetStateAction<number>>
}

export default function Header({score, status, time, setTime}: Props) {
  return (
    <header>
        <Score score={score} />
        <Timer status={status} time={time} setTime={setTime} />
    </header>
  )
}