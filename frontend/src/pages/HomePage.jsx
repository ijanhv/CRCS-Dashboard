import { Box } from "@mui/material";
import Hero from "components/HomeComponents/Hero";
import Navbar from "components/HomeComponents/Navbar";
import News from "components/HomeComponents/News";
import React from "react";

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#E6F0FF"}} width="100%" height="100%">
      <Navbar />
      <Hero />
      <News />
    </Box>
  );
};

export default HomePage;
