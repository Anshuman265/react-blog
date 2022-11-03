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
        {'title':'Blog number 1', body:'Body of blog 1' , author:'Devashish', id:1},
        {'title':'Blog number 2', body:'Body of blog 2' , author:'Darshan', id:2},
        {'title':'I am vegeance', body:'I am the night' , author:'Batman', id:3},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => {
            return (blog.id !== id);
        });
        setBlogs(newBlogs);
    }
// Changing the state value triggers react to re-render the state-component
// We automatically get access to the event parameter
    return ( 
        <div className="home">
            {/*<button onClick={handleClick}>Click me</button> 
            <p> {name } is {age}</p>
    <button onClick={(e) => handleClickAgain('Zelda' , e )}>Click me again</button> */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>
        </div>
     );
}
 
export default Home;