import React from "react";
//CSS
import "./App.css";
//Components
import MovieList from "./components/movieList";
import Title from "./components/title";

function App() {
  return (
    <div>
      <Title />
      <MovieList />
    </div>
  );
}

export default App;
