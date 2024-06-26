
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./wesite/Pages/Home";
import About from "./wesite/Pages/About";
import Contact from "./wesite/Pages/Contact";
import Service from "./wesite/Pages/Service";
import Project from "./wesite/Pages/Project";
import Adashboard from "./admin/Pages/Adashboard";
import Addservice from "./admin/Pages/Addservice";
import AMangeservice from "./admin/Pages/AMangeservice";


function App() {
  return (
    <div className="App">
      {/* <h1>hello react</h1> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home/></>} />
          <Route path="/about" element={<><About /> </>} /> 
          <Route path="/contact" element={<><Contact/></>} />
          <Route path="/service" element={<><Service/></>} />  
          <Route path="/project" element={<><Project /></>} />


          <Route path="/Dashboard"  element={<><Adashboard /></>}/>
          <Route path="/addservice" element={<><Addservice /></>} />
          <Route path="/Mangesev" element={<><AMangeservice/></>} /> 
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
