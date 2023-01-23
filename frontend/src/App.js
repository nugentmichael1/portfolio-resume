import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import './CSS/App.css'

//mock example of initial and complete download from backend instead of individual and as needed.  This will reduce api calls (which cost me money if over google's set limit) from regular users.  It will also as challenge nefarious actors who want to abuse my api as they would have to at least clear session data before page refreshes.
var BackendData = sessionStorage.getItem("data");
console.log(BackendData);
if (BackendData === null) {
  //mock example.  will replace with actual call to backend, which grabs ALL database tables' information
  console.log("Calling backend for data.")
  sessionStorage.setItem("data", "Some data")
  console.log(sessionStorage.getItem("data"))
}

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
