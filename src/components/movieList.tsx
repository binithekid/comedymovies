import React, { useEffect, useState } from "react";
//Interfaces
import Props from "../interfaces/interfaces";
//Components
import Movie from "./movie";
//Material-UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
//CSS
import "../App.css";

const MovieList = () => {
  //Populate Movie List
  const [movieList, setMoveList] = useState<Props[]>([]);
  //Range Slider State
  const [value, setValue] = useState<number[]>([0, 10]);
  //Search query state
  const [searchTerm, setSearchTerms] = useState<string>("");

  //Fetch Data for the movie List
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`
    )
      .then((response) => response.json())
      .then((data) => setMoveList(data.results));
  }, []);

  //Function for range slider - rating
  const handleSliderChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  //Marks for range slider
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
      label: "10",
    },
  ];

  //Function for search query
  const searchTermData = (event: any) => {
    setSearchTerms(event.currentTarget.value);
  };

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={5} className='header'>
        <Grid item xs={12} sm={6}>
          <div className='rangeSlider'>
            <h3 className='filterTitles'>Filter by rating</h3>
            <Slider
              value={value}
              min={0}
              max={10}
              onChange={handleSliderChange}
              marks={marks}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className='textField'>
            <h3 className='filterTitles'>Search for movie</h3>
            <TextField
              id='outlined-basic'
              label='Search..'
              variant='outlined'
              fullWidth
              size='small'
              onChange={searchTermData}
            />
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        {movieList
          .filter((movie) => {
            if (searchTerm === "") {
              return movie;
            } else if (
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return movie;
            }
          })
          .map((movie) => {
            if (movie.vote_average > value[0] && movie.vote_average < value[1])
              return (
                <Grid item xs={12} sm={6} md={4} key={movie.title}>
                  <Movie
                    title={movie.title}
                    vote_average={movie.vote_average}
                    backdrop_path={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    key={movie.title}
                    overview={movie.overview}
                  />
                </Grid>
              );
          })}
      </Grid>
    </Container>
  );
};

export default MovieList;
