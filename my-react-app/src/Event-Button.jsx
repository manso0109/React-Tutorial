import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component{
    render(){
        // let count = 0
        // const handleClick = (name)=>{
        //     if(count < 3){
        //         count++
        //         console.log(`${name} you clicked me ${count} time/s`)
        //     } else {
        //         console.log(`${name} stop clicking me!`)
        //     }
        // }

        const handleClick = (e) => e.target.textContent = "OUCH!!"
        
        return (
            <button onClick={(e) => handleClick(e)}>Click me</button>
        )
    }
}

Button.propTypes = {
    name: PropTypes.string
}

export default Button