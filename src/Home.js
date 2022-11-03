import { useState } from "react";
import BlogList from "./Components/BlogList";

const Home = () => {
    { /*
        const [name,setName] = useState('mario');
        const [age,setAge] = useState(25);
        const handleClickAgain = (name , e) => {
            setName('luigi');
            setAge(35);
        }
    */ }
    const [blogs,setBlogs] = useState([ 
        {'title':'Blog number 1', body:'Body of blog 1' , author:'Author 1', id:1},
        {'title':'Blog number 2', body:'Body of blog 2' , author:'Author 2', id:2},
        {'title':'Blog number 3', body:'Body of blog 3' , author:'Author 3', id:3},
    ]);
// Changing the state value triggers react to re-render the state-component
// We automatically get access to the event parameter
    return ( 
        <div className="home">
            {/*<button onClick={handleClick}>Click me</button> 
            <p> {name } is {age}</p>
    <button onClick={(e) => handleClickAgain('Zelda' , e )}>Click me again</button> */}
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}
 
export default Home;