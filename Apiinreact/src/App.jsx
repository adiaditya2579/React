import About from "./components/About";
import Products from "./components/Products";
import Home from "./components/Home";
import {Link,Routes,Route} from "react-router-dom"

function App() {


  
  return (
    <div className="m-3">
      <nav className=" flex justify-center gap-5">
        <Link to="/">Home</Link>
        <Link to="/product">product</Link>
        <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Products />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
