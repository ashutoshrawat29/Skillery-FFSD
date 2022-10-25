import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './components/ContactUs/Contact';
import Courses from './components/Courses/Courses';
import Home from "./components/Home"
import Footer from './components/Layout/Header/Footer';
import Header from './components/Layout/Header/Header';
import Request from './components/Request/Request';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
