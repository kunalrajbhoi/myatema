import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/Aboutus';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Customer from './pages/Customer';
import Home from './pages/Home';
import Whatwedo from './pages/Whatwedo';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/About' element={ <About />} />
        <Route path='/Whatwedo' element={ <Whatwedo />} />
        <Route path='/Blog' element={ <Blog />} />
        <Route path='/Contact' element={ <Contact />} />
        <Route path='/Customer' element={ <Customer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
