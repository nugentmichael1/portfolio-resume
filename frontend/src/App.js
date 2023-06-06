//Software Engineering Portfolio 2023

//import routes (links) ability from react
import { Routes, Route } from 'react-router-dom';

//components
import Footer from './Components/Footer'
import Header from './Components/Header'

//pages
import Skills from './Pages/Skills'
import WorkExperience from './Pages/WorkExperience';
import Education from './Pages/Education'
import AcademicProjects from './Pages/AcademicProjects'

//css
import './CSS/App.css'

//functions
import retrieveAllData from './Utility/retrieveAllData';
import { useEffect, useState } from 'react';


function App() {

  const [projectsData, setProjectsData] = useState(null)

  const [languagesData, setLanguagesData] = useState(null)

  const [experienceData, setExperienceData] = useState(null)

  useEffect(() => {

    const retrieveData = async () => {

      const data = await retrieveAllData();

      console.log(data)

      distributeData(data);

    }

    const distributeData = (data) => {

      setProjectsData(data.projects)
      setLanguagesData(data.languages)
      setExperienceData(data.experience)
      console.log(data)
    }

    //Complete download of all data from backend instead of individually as needed.  
    //This will reduce api calls (which cost money if over google's set limit) from regular users, and challenge nefarious actors who want to abuse the api; they would have to reopen tabs.
    const dataStr = sessionStorage.getItem("allData")

    //Check to see if data is already present.  Retrieve if not.
    if (dataStr === null) {
      // console.log(retrieveAllData())
      retrieveData();
    }
    else {
      const data = JSON.parse(dataStr);
      distributeData(data);
    }
  }, [])

  return (
    <>
      <Routes>
        {/* <Route path="/" element={[<Header key={"title"} />, <NavBar key={"nav"} />]} />
        <Route path="/:page" element={[<Header key={"title"} />, <NavBar key={"nav"} />]} /> */}
        <Route path="/" element={<Header key={"title"} />} />
        <Route path="/:page" element={<Header key={"title"} />} />
      </Routes>
      <Routes>
        <Route path="/" element={<AcademicProjects data={projectsData} />} />
        <Route path='/Projects' element={<AcademicProjects data={projectsData} />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Skills" element={<Skills languagesData={languagesData} />} />
        <Route path="/Work_Experience" element={<WorkExperience data={experienceData} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
