import PropTypes from "prop-types"
import React from "react"

class List extends React.Component {
    render()  {
        // const fruits = [
    //     {id:1, name: "apple", calories: 95} ,
    //     {id:2,name:"orange" , calories:45},
    //     {id:3,name: "banana" , calories: 105},
    //     {id:4,name: "coconut", calories:159},
    //     {id:5,name: "pineapple", calories:37}]

    const category = this.props.category

    const itemList = this.props.items

    itemList.sort((a,b) => a.name.localeCompare(b.name))
    // const lowCalFruit = fruits.filter (fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >=100)
    // highCalFruits
    const listItems = itemList.map(highCalFruits => <li key={highCalFruits.name}>{highCalFruits.name}: &nbsp; <b>{highCalFruits.calories}</b></li>)
    return(
        <>
            <h3 className="list-Category">{category.toUpperCase()}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
)
    }
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name:PropTypes.string,
        calories:PropTypes.number,
    })),
    category: PropTypes.string
}

List.defaultProps = {
    category:"Category",
    items:[]
}

export default List