import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubmitFeedback from "./components/SubmitFeedback";
import Home from "./components/home";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile"
import Login from "./components/login"

import "./App.css";

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit-feedback" element={<SubmitFeedback />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;