import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "components/Header";
import { useGetSocietyByEmailQuery } from "state/api";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
 

  },
}));


const Profile = () => {
  let currentUser = null;
  if (typeof window !== "undefined") {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  const { data: society, isLoading } = useGetSocietyByEmailQuery(`${currentUser.email}`)
  console.log("society", society);
  const classes = useStyles();

 
  // const society = {
  //   _id: "649302bf166c5ab50f4538c6",
  //   address: "123 Main Street",
  //   authorizedName: "John Doe",
  //   confirmPassword: "password123",
  //   designation: "Manager",
  //   district: "Mumbai",
  //   email: "johndoe@example.com",
  //   mobileNumber: "1234567890",
  //   name: "John Doe",
  //   panNo: "ABCD1234",
  //   serviceTaxNo: "ST12345",
  //   societyType: "Condo Association",
  //   state: "Maharashtra",
  //   tanNo: "TAN6789",
  //   __v: 0,
  // };

  return (
    <Container maxWidth="xl">
      <Box p={2}>
        <Header title="Profile" subtitle="Society Profile" />
        <Paper elevation={2} sx={{ p: 2, mt: 5, borderBottom: "2px solid #7F38EC" }} >
          {isLoading ? "Loading..." :  <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" fontWeight="bold">
                {society[0].name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Authorized Name: {society[0].authorizedName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Email: {society[0].email}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Mobile Number: {society[0].mobileNumber}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Designation: {society[0].designation}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Society Type: {society[0].societyType}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Address: {society[0].address}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                District: {society[0].district}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                State: {society[0].state}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                PAN Number: {society[0].panNo}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Service Tax Number: {society[0].serviceTaxNo}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                TAN Number: {society[0].tanNo}
              </Typography>
            </Grid>
          </Grid>}
        </Paper>
      </Box>
    </Container>
  );
};

export default Profile;
