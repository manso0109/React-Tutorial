import {useState} from "react";

function MyComponent () {
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState ('')
    const [payment, setPayment] = useState()
    const [shipping, setShipping] = useState()
    // const [age, setAge] = useState(0)
    // const [isEmployed, setIsEmployed] = useState(false)
    // const updateName = () => {
    //     setName("manso0109")
    // }
    // const incrementAge = () => {
    //     setAge(age+1)
    // }

    // const toggleEmployedStatus = () => {
    //     setIsEmployed(!isEmployed)
    // }

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange (event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange (event) {
        setComment(event.target.value)
    }

    function handlePaymentChange (event) {
        setPayment(event.target.value)
    }

    function handleShippingChange (event) {
        setShipping(event.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>
            
            <textarea name="test" id="text-area-test" value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value=''>Select an Option</option>
                <option value='Visa'>Visa</option>
                <option value='MasterCard'>MasterCard</option>
                <option value='Gift card'>Gift card</option>
            </select>
            <p>payment: {payment}</p>
            
            <label>
                <input type="radio" value='Pick Up' checked={shipping ==='Pick Up'}  onChange={handleShippingChange}/>
                Pick up
            </label>
            <label>
                <input type="radio" value='Delivery' checked={shipping ==='Delivery'}  onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Delivery: {shipping}</p>
        </div>
    //     <div>
    //         <p>Name: {name}</p>
    //         <button onClick={updateName}>Set name</button>

    //         <p>age: {age}</p>
    //         <button onClick={incrementAge}>Increment Age</button>

    //         <p>Is employed: {isEmployed ?"yes":'no'}</p>
    //         <button onClick={toggleEmployedStatus}>Toggle Status</button>
    //     </div>
    )
    
}

export default MyComponent