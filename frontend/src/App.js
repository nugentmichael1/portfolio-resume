import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Languages from './Components/Languages';
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
        <Route path="/" element={<Languages />} />
        <Route path="/Skills" element={<Languages />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>

    </>
  );
}

export default App;
