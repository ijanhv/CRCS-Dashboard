import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CustomButton from "components/CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container maxWidth="xl">
        {/* <Navbar /> */}
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              MULTI-STATE CO-OPERATIVE SOCIETIES
            </Typography>
            <Title variant="h3">
            Multi State Cooperative Societies ACT, 2002
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "17px", width:"800px", color: "#5A6473", my: 4 }}
            >
              An Act to consolidate and amend the law relating to co-operative
              societies, with objects not confined to one State and serving the
              interests of members in more than one State, to facilitate the
              voluntary formation and democratic functioning of co-operatives as
              people's institutions based on self-help and mutual aid and to
              enable them to promote their economic and social betterment and to
              provide functional autonomy ,was being felt necessary by the
              various cooperative societies, and federation of various
              cooperative societies as well as by the Government. In order to
              achieve the objective The Multi State Cooperative Societies Bill
              was introduced in the Parliament.The bill having been passed by
              both the Houses of Parliament received the assent of the President
              on 3rd July 2002 and it came on the Statute Book as The Multi
              State Cooperative Societies ACT 2002 (39 of 2002).
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "0.5" }}>
            <img
              src="https://mscs.dac.gov.in/images/MSCS_LOGO.png"
              alt="heroImg"
              style={{ maxWidth: "100%", marginTop: "10rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
