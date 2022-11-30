import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';


function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  return (
    // Wrapping the entire app into Router component for better routing through out the application
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/create" element={<Create/>}>
            </Route>
            <Route path="/blogs/:id" element={<BlogDetails/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
