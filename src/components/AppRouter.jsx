import React from 'react';
import {Route, Routes} from "react-router-dom";
import Certificates from "./pages/certificates/Certificates";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/register/SignUp";
import Checkout from "./pages/checkout/Checkout";
import CertificateItem from "./pages/certificates/CertificateItem";
import Profile from "./pages/Profile";
import Admin from "./pages/admin/Admin";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Certificates/>} exact={true}/>
            <Route path="/certificates" element={<Certificates/>} exact={true}/>
            <Route path="/certificates/:id" element={<CertificateItem/>} exact={true}/>
            <Route path="/about" element={<About/>} exact={true}/>
            <Route path="/login" element={<Login/>} exact={true}/>
            <Route path="/register" element={<SignUp/>} exact={true}/>
            <Route path="/checkout" element={<Checkout/>} exact={true}/>
            <Route path="/profile" element={<Profile/>} exact={true}/>
            <Route path="/admin" element={<Admin/>} exact={true}/>
            <Route path="*" element={<NotFound/>} exact={true}/>
        </Routes>
    );
};

export default AppRouter;