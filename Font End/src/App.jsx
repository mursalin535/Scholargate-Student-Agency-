// App.jsx
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import './App.css';
import Nav from '../Nav';
import Footer from '../Footer';


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll
  }, [pathname]);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

