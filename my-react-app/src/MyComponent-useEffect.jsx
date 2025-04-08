import {useState,useEffect} from "react";

function MyComponentCount () {
    const [count, setCount] = useState(0)

    const [color, setColor] = useState("Green")

    function addCount (){
        setCount(c => c+1)
    }

    function subtractCount (){
        setCount(c => c-1)
    }

    function handleColorChange () {

        setColor(c => c ==="Green" ? "Red" : "Green" )
    }

    useEffect (() => {
        document.title = `Count: ${count} ${color}`
    }, [count , color])

    return(
        <div>
            <p style={{color:color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={handleColorChange}>Change Color</button>
        </div>
    );
} 

export default MyComponentCount