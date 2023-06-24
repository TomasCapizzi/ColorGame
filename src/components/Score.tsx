type Props = {
    score: number
}

export default function Score({score}: Props) {
  return (
    <h1>{score} Points</h1>
  )
}