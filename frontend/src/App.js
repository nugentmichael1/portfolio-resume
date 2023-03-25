//Software Engineering Portfolio 2023

//import routes (links) ability from react
import { Routes, Route } from 'react-router-dom';

//components
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'

//pages
import Skills from './Pages/Skills'
import Summary from './Pages/Summary'
import WorkExperience from './Pages/WorkExperience';
import Education from './Pages/Education'

//css
import './CSS/App.css'

//functions
import retrieveAllData from './Utility/retrieveAllData';



//Complete download of all data from backend instead of individually as needed.  
//This will reduce api calls (which cost money if over google's set limit) from regular users, and challenge nefarious actors who want to abuse the api; they would have to reopen tabs.
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
        <Route path="/" element={<Summary myTest={allData} />} />
        <Route path="/Summary" element={<Summary />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Work_Experience" element={<WorkExperience />} />
        <Route path="/Education" element={<Education />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
