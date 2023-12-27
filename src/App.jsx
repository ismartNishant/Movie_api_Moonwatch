import "./App.css";
import { Header } from "./Components/Header/Header";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieCard from "./Components/Movies/MovieCard";
import About from "./Components/About/About";
import React from "react";
const APIURL = "https://www.omdbapi.com/?i=tt3896198&apikey=3c7bea22";

function App() {
  const [movies, setMovies] = useState([]);
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${APIURL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const enterpress = (event) => {
    if (event.key === "Enter") {
      searchMovies(serachTerm);
    }
  };

  useEffect(() => {
    // searchMovies(serachTerm);
  }, [serachTerm]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className=" search col-5 gap-2 m-auto d-flex justify-content-between">
                <input
                  type="email"
                  placeholder="Search for Movies.."
                  className="form-control"
                  id="exampleInputEmail1"
                  value={serachTerm}
                  onKeyDown={enterpress}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    console.log(e.target.value.length);
                  }}
                  aria-describedby="emailHelp"
                />
                <button className={` ${serachTerm} search-btn`}>
                  {" "}
                  <i
                    className="bx bx-search fs-2 bx-tada-hover"
                    onClick={() => searchMovies(serachTerm)}
                  ></i>{" "}
                </button>
              </div>

              <div className="container ">
                {movies?.length > 0 ? (
                  <div className="w-100 d-flex gap-3 flex-wrap justify-content-center">
                    {movies.map((movie, index) => (
                      <MovieCard movie={movie} key={index} />
                    ))}
                  </div>
                ) : (
                  <div>
                    <h1 className="text-center">
                      N <i className="bx bx-sad bx-tada" style={{ color: "#9c05e7" }}  ></i>Results
                    </h1>
                    <p className="text-center">
                      Please type in above search bar to see movies
                    </p>
                  </div>
                )}
              </div>
            </div>
          }
        ></Route>
        <Route path="/about" element={<About />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
