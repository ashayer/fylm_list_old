import MovieDetails from "./components/MovieDetails/MovieDetails";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import "@fontsource/manrope";
import Home from "./pages/Home/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

