import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CareerInsights from "./pages/CareerInsights";
import Layout from "./components/Layout";
import Consultation from "./pages/Consultation";
import Roadmaps from "./pages/Roadmaps";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import QuestionnaireForm from './components/QuestionnaireForm';



const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/career-insights" element={<CareerInsights />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
