import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kine from "./pages/Kine";
import Osteo from "./pages/Osteo";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/scrollToTop";

function App() {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };
  return (
    <BrowserRouter>
      <AnimatePresence>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home variants={variants} />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/Kine" element={<Kine variants={variants} />}></Route>
            <Route
              path="/Osteo"
              element={<Osteo variants={variants} />}
            ></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </ScrollToTop>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
