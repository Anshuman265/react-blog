import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Could not find the page that you were looking for :( </p>
            <Link to="/">Back to Home</Link>
        </div>
     );
}
 
export default NotFound;