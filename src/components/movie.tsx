import React from "react";
//Interfaces
import Props from "../interfaces/interfaces";
//Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const Movie = ({ title, backdrop_path, vote_average, overview }: Props) => {
  return (
    <Card>
      <CardMedia
        component='img'
        height='140'
        image={backdrop_path}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {overview}
        </Typography>
        <br />
        <Rating
          name='half-rating'
          defaultValue={vote_average}
          precision={0.5}
          readOnly
          max={10}
        />
      </CardContent>
    </Card>
  );
};

export default Movie;
