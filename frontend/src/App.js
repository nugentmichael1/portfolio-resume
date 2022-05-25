import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Languages from './Languages';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={[<NavBar key={0}/>, <Languages key={1}/>]}/>
    </Routes>
    </>
  );
}

export default App;
