
import {Navbar} from './components/Navbar/Navbar.jsx'
import './App.css'
import Hero from './components/hero/hero.jsx';
import About from './components/about/about.jsx';
import Experience from './components/Experience/Experience.jsx';

function App() {

  return (
    <div className='App'>
        <Navbar />
        <Hero />
        <About />
        <Experience />
    </div>
  )
}
export default App;
