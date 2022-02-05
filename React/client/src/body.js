import React from "react";
import Inicio from "./inicio";
import {Routes, Route} from "react-router-dom"; 
import Foro from "./foro";
import Login from "./login";
import Signup from "./signup"; 
import Guias from "./guias";

const Body = () =>  {
    return(
       
        <Routes>
            <Route path="/" element={<Inicio />} /> 
            <Route path="/guias" element={<Guias />} />
            <Route path="/Foro" element={<Foro />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
        </Routes>
        
    );
}
export default Body;
