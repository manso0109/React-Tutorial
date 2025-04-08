import PropTypes from "prop-types"

function UserGreeting (props) {
        const welcomeMessage = <h2>Welcome {props.username}</h2>
        const pleaseLogIn = <h2>Please log in to continue</h2>

        return (props.isLoggedIn ? welcomeMessage : pleaseLogIn )
    }
// function UserGreeting (props) {
//     return (props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please log in to continue</h2>)
// }

// class UserGreeting extends React.Component{
//     render(){
//         if(this.props.isLoggedIn) {
//             return <h2>Welcome {this.props.username}</h2>
//         } else 
//         {
//             return <h2>Please log in to continue</h2>
//         } 
//     }
// }

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'guest'
}


export default UserGreeting