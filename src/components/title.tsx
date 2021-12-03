import React from "react";
//Material-UI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
//CSS
import "../App.css";

const Title = () => {
  return (
    <Container maxWidth='lg'>
      <Typography
        gutterBottom
        variant='h3'
        component='div'
        className='AppTitle'>
        Comedy Movies 🎭
      </Typography>
      <hr className='underline' />
    </Container>
  );
};

export default Title;
