// refce
import Layout from "@/layouts/layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import About from "@/pages/About";
import Camping from "@/pages/admin/Camping";
import Dashboard from "@/pages/admin/Dashboard";
import Mannge from "@/pages/admin/Mannge";
import Notfound from "@/pages/admin/Notfound";
import Home from "@/pages/Home";
import Profile from "@/pages/user/Profile";

import { BrowserRouter, Routes, Route, Outlet } from "react-router";


function AppRoutes() {
  return (
     <BrowserRouter>
    <Routes>
        {/* Public */}
        <Route element={<Layout/>} >
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        </Route>

        {/* Private User */}
        <Route path="user" element={<Layout/>} >
        <Route path="profile" element={<Profile/>} />
        </Route>

        {/* Private Admin*/}
        <Route path="admin" element={<LayoutAdmin/>}>
         
        
           
            <Route index element={<Dashboard/>} />
            <Route path="manage" element={<Mannge/>} />
            <Route path="camping" element={<Camping />} />
        </Route>
        <Route path="*" element={<Notfound/>} />
    </Routes>
  </BrowserRouter>
  
  )
}

export default AppRoutes