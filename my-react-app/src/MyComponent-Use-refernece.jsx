import {useRef, useEffect} from "react";

function MyComponentUseRef () {
    
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    
    useEffect (() => {
        console.log("component rendered");        
    })
    function handleClick () {
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor ="yellow"
        
    }

    function handleClick1 () {
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor ="red"
        
    }
    function handleClick2 () {
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor ="green"
        
    }


    

    return(
        <div>
            <button onClick={handleClick}>
                click Me 1
            </button>
            <input ref={inputRef1}/>
            <button onClick={handleClick1}>
                click Me 2
            </button>
            <input ref={inputRef2}/>
            <button onClick={handleClick2}>
                click Me 3
            </button>
            <input ref={inputRef3}/>
        </div>
    );
} 

export default MyComponentUseRef