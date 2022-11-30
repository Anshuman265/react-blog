// command to run json-server = npx json-server --watch data/db.json --port 8000
import BlogList from "./Components/BlogList";
import useFetch from "./customHooks/useFetch";

const Home = () => {
    const {data:blogs, isPending,error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;