import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './container/home';
import About from './container/about';
import Resume from './container/resume';
import Skills from './container/skills';
import Portfolio from './container/portfolio';
import Contact from './container/contact';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
      {/* particles js */}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      
    </div>
  );
}

export default App;
