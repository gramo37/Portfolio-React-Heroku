import './css/mainStyle.css';
import './css/smallScreen.css';
import './css/smallerScreen.css';
import './css/phone.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Project from './components/Project/Project';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/skills" element={<Skill />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
