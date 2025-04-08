import React from "react";
class ProfilePicture extends React.Component {
    render() {
        const imageUrl = './src/assets/Ken Takakura.jpeg'
        const handleClick = (e) => e.target.style.display = "none"
        return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)
    }
}

export default ProfilePicture