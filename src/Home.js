import { useState,useEffect } from "react";
import BlogList from "./Components/BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState([ 
        {'title':'Blog number 1', body:'Body of blog 1' , author:'Devashish', id:1},
        {'title':'Blog number 2', body:'Body of blog 2' , author:'Darshan', id:2},
        {'title':'I am vegeance', body:'I am the night' , author:'Batman', id:3},
    ]);
    // command to run json-server = npx json-server --watch data/db.json --port 8000
    const [name,setName] = useState('mario');
    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(
            res=> {
                return res.json();
            }
        ).then(data=>{
            setBlogs(data);
        })
    }, []);
// Changing the state value triggers react to re-render the state-component
// We automatically get access to the event parameter
    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;