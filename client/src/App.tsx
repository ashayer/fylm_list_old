import MovieDetails from "./pages/MovieDetails/MovieDetails";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import "@fontsource/manrope";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AccountPage from "./pages/AccountPage/AccountPage";
import Error from "./components/Error/Error";
import MovieSearchResults from "./pages/MovieSearchResults/MovieSearchResults";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/user/:username" element={<AccountPage />} />
        <Route path="/search/:searchText" element={<MovieSearchResults />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
