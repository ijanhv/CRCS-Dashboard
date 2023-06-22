import { Box, Card, Container, Typography } from "@mui/material";
import Header from "components/Header";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCard = ({ text }) => {
  return (
    <Box
      sx={{
        boxShadow: "40px",
        width: "300px",
        height: "200px",
        margin: "20px",
      }}
    >
      <Card sx={{ border: "0.25px solid grey", backgroundColor: "#E6F0FF" }}>
        <Typography
          variant="h5"
          color="#0F1B4C"
          padding="30px"
          fontWeight="bold"
        >
          {text}
        </Typography>
      </Card>
    </Box>
  );
};

const News = () => {
  return (
    <Box sx={{ marginTop: "0" }}>
      <Container maxWidth="xl">
        {/* <Navbar /> */}

        <Typography
          variant="h2"
          sx={{
            color: "#687690",
            fontWeight: "800",
          }}
        >
          News/Events
        </Typography>

        <Marquee>
          <MarqueeCard text="Notice for winding up_Khusi Credit Cooperative Society_Dated 15-06-2023 khhihiohihoihuhiihhii" />
          <MarqueeCard text="Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd dated 05.06.2023" />
          <MarqueeCard text="Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd dated 05.06.2023" />
          <MarqueeCard text="Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd dated 05.06.2023" />
          <MarqueeCard text="Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd dated 05.06.2023" />
        </Marquee>
      </Container>
    </Box>
  );
};

export default News;
