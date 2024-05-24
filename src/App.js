//All Work is Done by Cameron Weiss, unless stated otherwise

import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.js";
import ResumePage from "./pages/ResumePage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";


//the main return of the app
export default function App() {

    //build the app visually
    return (
        <>
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </HashRouter>
    </>
    );
}


//this is what renders EVERYTHING
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);