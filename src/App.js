import './App.css';
import Home from './home.js';
import About from './about.js';
import Skills from './skills.js';
import Projects from './projects.js';
import Contact from './contact.js';

export default function App() {
    return (
        <div className='container'>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}