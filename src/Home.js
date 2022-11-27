import { useState,useEffect } from "react";
import BlogList from "./Components/BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    // command to run json-server = npx json-server --watch data/db.json --port 8000
    const [name,setName] = useState('mario');
    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(
            res=> {
                return res.json();
            }
        ).then(data=>{
            setBlogs(data);
            setIsPending(false);
        })
    }, []);
// Changing the state value triggers react to re-render the state-component
// We automatically get access to the event parameter
    return ( 
        <div className="home">
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;