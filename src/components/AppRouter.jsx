import React from 'react';
import {Route, Routes} from "react-router-dom";
import Certificates from "./pages/Certificates";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Certificates/>} exact={true}/>
            <Route path="/certificates" element={<Certificates/>} exact={true}/>
            <Route path="/about" element={<About/>} exact={true}/>
            <Route path="/login" element={<Login/>} exact={true}/>
            <Route path="*" element={<NotFound/>} exact={true}/>
        </Routes>
    );
};

export default AppRouter;