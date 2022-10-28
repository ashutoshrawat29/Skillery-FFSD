import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './components/ContactUs/Contact';
import Courses from './components/Courses/Courses';
import Home from "./components/Home"
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Subscribe from './components/Payments/Subscribe';
import Request from './components/Request/Request';
import CreateCourse from './components/Admin/CreateCourse';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />

        {/* Admin Routes */}
        <Route path="/admin/createcourse" element={<CreateCourse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
