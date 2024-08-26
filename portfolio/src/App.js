import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import "../src/App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Testimonials />
        <Footer />
      </Router>
    </>
  );
};

export default App;
