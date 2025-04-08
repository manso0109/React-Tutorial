import {useState} from "react";

function MyComponentCars () {
    
    const [car, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")


    function handleAddCar () {
        const newCar = {year:carYear, make:carMake, model:carModel}
        setCars(c => [...c,newCar]);

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    } 

    function handleRemoveCar (index) {
        setCars(c => c.filter((_,i) => i !== index))
    }

    function handleYearChange (event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange (event) {
        setCarMake(event.target.value);
        
    }

    function handleModelChange (event) {
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>{car.map((cars,index) => 
                <li key={index} onClick={() =>handleRemoveCar(index)}>
                    {cars.year} {cars.make} {cars.model}
                </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" placeholder="enter car make" value={carMake} onChange={handleMakeChange}/><br/>
            <input type="text" value={carModel} placeholder="enter car model" onChange={handleModelChange}/><br/>
            <button onClick={handleAddCar}>add car</button>

        </div>
    );
} 

export default MyComponentCars