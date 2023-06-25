import styles from './Score.module.css'

type Props = {
    score: number
}

export default function Score({score}: Props) {
  return (
    <h1 className={styles.h1}>{score} Points</h1>
  )
}