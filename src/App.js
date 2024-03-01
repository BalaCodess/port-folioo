
import './App.css';
import Header from './component/header';
import Hero from './component/hero';
import About from './component/About';
import Project from './component/Projects';
import Resume from './component/Resume';
import Contact from './component/contact';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
