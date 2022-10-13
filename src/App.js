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
  return (
    <BrowserRouter>
      <AnimatePresence>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/Kine" element={<Kine />}></Route>
            <Route path="/Osteo" element={<Osteo />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </ScrollToTop>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
