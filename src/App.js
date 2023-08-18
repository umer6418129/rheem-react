import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./root-components/nav";
import Footer from "./root-components/Footer";
import Home from "./components/Home";
import Store from "./components/Store";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/store' element={<Store></Store>}></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
