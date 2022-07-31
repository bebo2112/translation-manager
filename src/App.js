import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import DashboardLayout from "./layouts/Dashboard";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Clients from "./pages/Clients";
import Users from "./pages/Users";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>

                    <Route element={<DashboardLayout/>}>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/orders" element={<Orders/>}/>
                        <Route path="/clients" element={<Clients/>}/>
                        <Route path="/users" element={<Users/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
