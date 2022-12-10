import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Create from './Components/Create';
import NotFound from './Components/NotFound';
import BlogDetails from './Components/BlogDetails';


function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  return (
    // Wrapping the entire app into Router component for better routing through out the application
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path="/react-blog/" element={<Home/>}>
            </Route>
            <Route path="/react-blog/create" element={<Create/>}>
            </Route>
            <Route path="/react-blog/blogs/:id" element={<BlogDetails/>}>
            </Route>
            <Route path="*" element={<NotFound/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
