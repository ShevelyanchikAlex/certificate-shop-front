import React from 'react';
import {Route, Routes} from "react-router-dom";
import Certificates from "./pages/Certificates";
import About from "./pages/About";
import Login from "./pages/Login";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/certificates" element={<Certificates/>} exact={true}/>
            <Route path="/about" element={<About/>} exact={true}/>
            <Route path="/login" element={<Login/>} exact={true}/>
        </Routes>
    );
};

export default AppRouter;