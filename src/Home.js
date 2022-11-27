import { useState,useEffect } from "react";
import BlogList from "./Components/BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    // command to run json-server = npx json-server --watch data/db.json --port 8000
    const [name,setName] = useState('mario');
    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(
            res=> {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            }
        ).then((data)=>{
            setBlogs(data);
            setIsPending(false);
            setError(null);
        }).catch((err) => {
            // Instead of logging the error in the console, we are going to set that error
            // console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }) 
    }, []);
// Changing the state value triggers react to re-render the state-component
// We automatically get access to the event parameter
    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;