
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Language   from './components/Language'
import LibrariesFrameworks   from './components/LibrariesFrameworks'
import Projects from './components/Projects'
import Design   from './components/Design'
import Contact   from './components/Contact'



function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Home />
        <About />
        <Language/>
        <LibrariesFrameworks/>
        <Projects/>
        <Design/>
        <Contact/>
      </div>

    </div>
  );
}


export default App;
