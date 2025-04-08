import {useContext} from 'react';
import { UserContext } from './componantA';
function ComponentD(){
    const user = useContext(UserContext)

    return (
        <div className="box">
            <h1>ComponentD </h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}

export default ComponentD