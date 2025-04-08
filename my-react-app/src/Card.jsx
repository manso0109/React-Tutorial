import profilePic from './assets/Ken Takakura.jpeg'
function Card () {
    return(
        <div className="card">
            <img className='card-image' alt="profile picture" src={profilePic}></img>
            <h2 className='card-title'>Manso0109</h2>
            <p className='card-text'>A front end developer</p>
        </div>
    )
}

export default Card