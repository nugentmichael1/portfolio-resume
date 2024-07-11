//Software Engineering Portfolio 2023

//import routes (links) ability from react
// import { Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//components
import LoadingScreen from './Components/LoadingScreen';
import Content from './Components/Content';

//css
import './CSS/App.css'

//functions
// import retrieveAllData from './Utility/retrieveAllData';
import retrieveAllData from './FireBaseAdmin/retrieveAllData';
import loadScreenFadeOut from './Utility/LoadingScreenFadeOut';

import { useEffect, useState } from 'react';


function App() {

  const [projectsData, setProjectsData] = useState(null)

  const [languagesData, setLanguagesData] = useState(null)

  const [experienceData, setExperienceData] = useState(null)


  //Data retrieval and load screen tranisition
  useEffect(() => {

    const retrieveData = async () => {

      const data = await retrieveAllData();

      distributeData(data);
    }

    const distributeData = (data) => {
      //useState setters
      setProjectsData(data.projects)
      setLanguagesData(data.languages)
      setExperienceData(data.experience)

      loadScreenFadeOut();
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
      //When data is still in the local storage, but not in the respective components
      const data = JSON.parse(dataStr);
      distributeData(data);
    }
  }, [])


  //navbar scroll
  const { hash } = useLocation();

  useEffect(() => {
    // console.log(hash);
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // console.log("Scroll to ", id);
      }
    }
  }, [hash]);

  return (
    <>
      <LoadingScreen />
      <Content projectsData={projectsData} languagesData={languagesData} experienceData={experienceData} />
    </>
  );
}

export default App;


//This is the routes layout for a multi-page format as opposed to the single page scroll format.
/* <Routes>
        <Route path="/" element={<Header key={"title"} />} />
        <Route path="/:page" element={<Header key={"title"} />} />
      </Routes>
      <Routes>
        <Route path="/" element={<AcademicProjects data={projectsData} />} />
        <Route path='/Projects' element={<AcademicProjects data={projectsData} />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Skills" element={<Skills languagesData={languagesData} />} />
        <Route path="/Work_Experience" element={<WorkExperience data={experienceData} />} />
      </Routes> */