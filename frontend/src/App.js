//Software Engineering Portfolio 2023

//routes (react links)
import { Routes, Route } from 'react-router-dom';

//components
import NavBar from './Components/NavBar';

//pages
import Skills from './Pages/Skills'
import Profile from './Pages/Profile'
import WorkExperience from './Pages/WorkExperience';
import Education from './Pages/Education'

//css
import './CSS/App.css'

//functions
import retrieveAllData from './Auxiliary/retrieveAllData';



//Complete download of all data from backend instead of individually as needed.  
//This will reduce api calls (which cost me money if over google's set limit) from regular users, and challenge nefarious actors who want to abuse the api; they would have to reopen tabs.
const allData = sessionStorage.getItem("allData")

//Check to see if data is already present.  Retrieve if not.
if (allData === null) retrieveAllData()


function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/:page" element={<NavBar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Profile myTest={allData} />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Work_Experience" element={<WorkExperience />} />
        <Route path="/Education" element={<Education />} />
      </Routes>

    </>
  );
}

export default App;
