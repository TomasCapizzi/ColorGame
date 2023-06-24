import {Color} from '../types/Color';

type Props = {
    handleColorClick: (clickedColor: Color) => void
    gameColors: Color[]
}

export default function GameButtons({handleColorClick, gameColors}: Props) {
  return (
    <>
        <button onClick={()=> handleColorClick(gameColors[0])} style={{width:128, height:128, backgroundColor: gameColors[0].color}}></button>
        <button onClick={()=> handleColorClick(gameColors[1])} style={{width:128, height:128, backgroundColor: gameColors[1].color}}></button>
    </>
  )
}