import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Skills from './Pages/Skills'
import Profile from './Pages/Profile'
import Education from './Pages/Education'
import './CSS/App.css'

//mock example of initial and complete download from backend instead of individual and as needed.  This will reduce api calls (which cost me money if over google's set limit) from regular users.  It will also as challenge nefarious actors who want to abuse my api as they would have to at least clear session data before page refreshes.
var BackendData = sessionStorage.getItem("data");
console.log("Session Storage Experiment:", BackendData);
if (BackendData === null) {
  //mock example.  will replace with actual call to backend, which grabs ALL database tables' information
  console.log("Session Storage Experiment: Calling backend for data.")
  sessionStorage.setItem("data", "Some data")
  console.log("Session Storage Experiment:", sessionStorage.getItem("data"))
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
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Education" element={<Education />} />
      </Routes>

    </>
  );
}

export default App;
