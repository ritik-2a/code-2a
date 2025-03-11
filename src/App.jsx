import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CareerInsights from "./pages/CareerInsights";
import Layout from "./components/Layout";
import Consultation from "./pages/Consultation";

// Add route in <Routes>

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/career-insights" element={<CareerInsights />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
