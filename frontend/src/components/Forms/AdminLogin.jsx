import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Grid,
  Box,
  FormControl,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Navbar from "components/HomeComponents/Navbar";
import { useNavigate } from "react-router-dom";
import { setUser } from "state";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const user = useSelector((state) => state.global.user);

  const onSubmit = (data) => {
    const { email, password } = data;
    if (email === "admin@admin.com" && password === "admin") {
      // Perform login logic here
      // Set the user in Redux store
      dispatch(
        setUser({
          email: "admin@admin.com",
          // You can add more properties to the user object if needed
        })
      );
      navigate("/admin/dashboard");
      localStorage.setItem("currentUser", JSON.stringify("admin"));
    } else {
      // Show error message or handle invalid login attempt
      console.log("Invalid login credentials");
    }
  };

  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={2}
        alignItems="center"
        height="100%"
        sx={{ marginTop: "1px" }}
      >
        <Grid item xs={6} style={{ backgroundColor: "#3C5291", minHeight: "100vh" }}>
          {/* Blue color on the left */}
        </Grid>
        <Grid item xs={6}>
          {/* Fields on the right */}
          <Box p={4}>
            <Typography variant="h1" fontWeight="bold" gutterBottom>
              Admin Login
            </Typography>

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

export default AdminLogin;
