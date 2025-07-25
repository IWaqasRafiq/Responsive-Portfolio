
import {Navbar} from './components/Navbar/Navbar.jsx'
import './App.css'
import Hero from './components/hero/hero.jsx';
import About from './components/about/about.jsx';

function App() {

  return (
    <div className='App'>
        <Navbar />
        <Hero />
        <About />
    </div>
  )
}
export default App;
