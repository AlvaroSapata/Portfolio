import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Background/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
