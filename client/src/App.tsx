import MovieDetails from "./components/MovieDetails/MovieDetails";
import Home from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

