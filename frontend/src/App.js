import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/ContactUs/Contact';
import Courses from './components/Courses/Courses';
import Home from './components/Home';
import Footer from './components/Layout/Footer/Footer';
import Aboutus from './components/AboutUs/Aboutus';
import Header from './components/Layout/Header/Header';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Subscribe from './components/Payments/Subscribe';
import Request from './components/Request/Request';
import CreateCourse from './components/Admin/CreateCourse';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  const [courses, setCourses] = useState([
    {
      title: 'Sample1',
      description: 'Sample1',
      imageSrc:
        'https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      id: 'sample1',
      creator: 'sample1 creator',
    },
  ]);
  const coursesHandler = newCourse => {
    setCourses(previousList => {
      return [...previousList, newCourse];
    });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses courses={courses} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin/createcourse" element={<CreateCourse coursesHandler={coursesHandler} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
