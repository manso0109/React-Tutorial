import {useState,useEffect} from "react";

function MyComponentResize () {

    const [width, setWidth] = useState(window.innerWidth)

    const [height, setHeight] = useState(window.innerHeight)

    useEffect (() => {
        window.addEventListener("resize", handleResize)
        console.log('Event listener added');
        return () => {
            window.removeEventListener("resize", handleResize)
            console.log('Event listener removed');
        }
        
    },[])

    useEffect (() => {
        document.title = `${width} ${height}`
    }, [width, height])

    function handleResize () {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    
    return(
        <div>
            <p>Width {width} px</p>
            <p>height {height}</p>
        </div>
    );
} 

export default MyComponentResize