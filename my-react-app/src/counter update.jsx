import {useState} from "react";

function CounterUpdate () {
    const [count, setCount] = useState(0)
    const increment = () => {
        // c => c + 1 updater function
        // c + 1 setter function (doesn't update)

        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
        
    }
    const decrement = () => {
        // setter overrides the updater
        // setCount(count - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick = {decrement}>decrement</button>
            <button className="counter-button" onClick = {reset}>reset</button>
            <button className="counter-button" onClick = {increment}>increment</button>
        </div>
    )

}

export default CounterUpdate