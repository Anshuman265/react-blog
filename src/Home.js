import { useState } from "react";

const Home = () => {
    const [name,setName] = useState('mario');
    const [age,setAge] = useState(25);
    const handleClickAgain = (name , e) => {
        setName('luigi');
        setAge(35);
    }
// Changing the state value triggers react to re-render the state-component
// We automatically get access to the event parameter
    return ( 
        <div className="home">
            <h2> Research Blog </h2>
            {/*<button onClick={handleClick}>Click me</button> */}
            <p> {name } is {age}</p>
            <button onClick={(e) => handleClickAgain('Zelda' , e )}>Click me again</button>
        </div>
     );
}
 
export default Home;