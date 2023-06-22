import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, RouterProvider, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import Societies from "scenes/societies";
import Chart from "scenes/chart";
import Forms from "scenes/forms";
import HomePage from "pages/HomePage";
import Register from "components/Forms/Register";
import Breakdown from "scenes/breakdown";
import Login from "components/Forms/Login";
import Profile from "scenes/profile";
import AdminLayout from "scenes/adminLayout";
import NewApplications from "scenes/newRegistrations";
import Grevience from "scenes/grevience";
import ViewGriences from "scenes/viewGreviences";
import AdminLogin from "components/Forms/AdminLogin";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const store = useSelector((state) => state.global.user); 
  
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>

      <ThemeProvider theme={theme} >

        <CssBaseline />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route element={<AdminLayout/>} >
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/societies" element={<Societies />} />
              <Route path="/admin/charts" element={<Chart />} />
              <Route path="/admin/applications" element={<NewApplications/>} />
              <Route path="/admin/grevience" element={<ViewGriences/>} />
            </Route>

            <Route element={<Layout />} >
            <Route path="/grevience" element={<Grevience />} />
            <Route path="/dashboard" element={<Dashboard />} />
       
            <Route path="/breakdown" element={<Breakdown />} />
            <Route path="/societies" element={<Societies />} />
            <Route path="/charts" element={<Chart />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        
        </Routes>
      </ThemeProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
