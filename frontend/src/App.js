import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import './CSS/App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/:page" element={<NavBar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Skills />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>

    </>
  );
}

export default App;
