import PropTypes from 'prop-types'
import React from 'react';

class Student extends React.Component{
    render (){
    return (
        <div className="student">
            <p>name: {this.props.name}</p>
            <p>age: {this.props.age}</p>
            <p>Student: {this.props.isStudent ? 'Yes' :'No'}</p>
        </div>
    )
}}

Student.propTypes ={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,

}

Student.defaultProps ={
    name:'guest',
    age:0,
    isStudent:false,
}

export default Student