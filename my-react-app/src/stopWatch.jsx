import {useState,useEffect,useRef} from "react"

function StopWatch () {

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)

    const startTimeRef = useRef (0)
    useEffect (() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current)
            },10)
        }

        return () => {
            clearInterval (intervalIdRef.current)
        }
    },[isRunning])

    function StartStopWatch () {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
        console.log(startTimeRef.current);
        

    }

    function StopStopWatch () {
        setIsRunning(false)
        
    }

    function ResetStopWatch () {
        setElapsedTime(0)
    }

    function formatTimeStopWatch () {
        let hours = Math.floor(elapsedTime / (1000*60*60))
        let min = Math.floor(elapsedTime / (1000*60) % 60)
        let sec = Math.floor(elapsedTime / (1000) % 60)
        let ms = Math.floor(elapsedTime % 1000 /10)

        hours = String(hours).padStart(2, "0")
        min = String(min).padStart(2, "0")
        sec = String(sec).padStart(2, "0")
        ms = String(ms).padStart(2, "0")
        return `${hours}:${min}:${sec}:${ms}`
    }

    return(
        <div className="stopWatch">
            <div className="display">
                {formatTimeStopWatch()}
            </div>
            <div className="controls">
                <button className="start-button" onClick={StartStopWatch}>Start</button>
                <button className="stop-button" onClick={StopStopWatch}>Stop</button>
                <button className="reset-button" onClick={ResetStopWatch}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch