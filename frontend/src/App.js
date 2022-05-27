import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Languages from './Languages';
import Projects from './Projects'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={[<NavBar key={0}/>, <Languages key={1}/>, <Projects key={2}/>]}/>
    </Routes>

    </>
  );
}

export default App;
