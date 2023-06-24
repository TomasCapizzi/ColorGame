import  {Color} from '../types/Color'

type Props = {
    moves: number,
    gameColors: Color[]
    correctColor: Color
}

export default function GameDirections({moves, gameColors, correctColor}: Props) {
  return (
    <section>
        <p>{moves}</p>
        <span style={{textTransform: 'capitalize', color: gameColors[0].color}}>{correctColor.name}</span>
    </section>
  )
}