import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Navbar from "components/HomeComponents/Navbar";
import { states } from "assets/data";
import { useNavigate } from "react-router-dom";
import { usePostLoginSocietyMutation } from "state/api";
import { setUser } from "state";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Login = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
    const [loginSociety, { isLoading, error }] = usePostLoginSocietyMutation();
    const user = useSelector((state) => state.global.user);
  
  const onSubmit = (data) => {
    console.log(data);
    try {
      loginSociety(data);
      navigate("/dashboard");
      localStorage.setItem("currentUser", JSON.stringify(data));
      console.log("loginData", loginSociety());
      dispatch(setUser(data));

    } catch (error) {
      console.log(error);
    }
    // Perform form submission logic here
  };

  return (
    <>
      <Navbar />
        <Grid container spacing={2} alignItems="center" height="100%" sx={{ marginTop: "1px",  }}>
          <Grid item xs={6} style={{ backgroundColor: "#3C5291", minHeight: "100vh" }}>
            {/* Blue color on the left */}
          
          </Grid>
          <Grid item xs={6}>
            {/* Fields on the right */}
            <Box p={4}>
           
              <Typography variant="h1" fontWeight="bold" gutterBottom>Login</Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth margin="normal">
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    {...register("email")}
                  />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    {...register("password")}
                  />
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
        </>
  );
};

export default Login;
