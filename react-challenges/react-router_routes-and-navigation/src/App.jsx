import "./styles.css";
import { initialCharacters } from "./data/characters";
import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar.jsx";

export default function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={<CharacterList characters={initialCharacters} />}
        />
        <Route path="/*" element={<h2>Page not found</h2>} />
      </Routes>
    </main>
  );
}
