import { useEffect } from "react"

type Props = {
    status:"initial" | "playing" | "finished"
    time: number
    setTime: React.Dispatch<React.SetStateAction<number>>
}

function Timer({status, time, setTime}: Props) {
    

    useEffect(()=>{
        let interval : number;
        if(status === 'playing'){
          interval = setInterval(()=> {
            setTime((time) => time + 1)
          }, 1000)
        }
    
        return () => {
          clearInterval(interval);
        }
      },[status])
  return (
    <h1>{time} Seconds</h1>
  )
}

export default Timer