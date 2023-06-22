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
import { usePostRegisterSocietyMutation } from "state/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
 const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const [ registerSociety, { isLoading, error }] = usePostRegisterSocietyMutation();

  const [value, setValue] = useState();
  const [districtOptions, setDistrictOptions] = useState([]);

  const [myState, setMyState] = useState();

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    console.log(selectedState);
    setDistrictOptions(selectedState.districts);
  };
  const onSubmit = (data) => {
    console.log({
        ...data,
        state: data.state.state,
    });
    try {
        registerSociety({
            ...data,
            state: data.state.state,
        });
        navigate("/login");

     } catch (error) {
            console.log(error);
     }
    // Perform form submission logic here
  };

  return (
    <Box bgcolor="#E6F0FF" height="100%">
      <Navbar />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          color="black"
          fontWeight="bold"
          sx={{ my: "15px" }}
        >
          Registration Form
        </Typography>

        <Box mt={3}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel labelId="demo-simple-select-label">
                    Select State
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    {...register("state")}
                    onChange={handleStateChange}
                   >
                    <MenuItem value="">-- Select State --</MenuItem>

                    {states.map((item) => (
                      <MenuItem value={item}>{item.state}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                  <InputLabel id="district-label">Select District</InputLabel>
                  <Select
                    {...register("district")}
                    labelId="district-label"
                    id="district-select"
                  >
                    <MenuItem value="">-- Select District --</MenuItem>

                    {districtOptions.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                  <InputLabel id="type-label">
                    Select Type / Class of the Society
                  </InputLabel>
                  <Select
                    {...register("societyType")}
                    labelId="type-label"
                    id="type-select"
                    margin="normal"
                  >
                    <MenuItem value="">-- Select Type --</MenuItem>
                    
                  </Select>
                </FormControl>

                <TextField {...register("name")} label="Name" fullWidth />

                <TextField
                  {...register("email")}
                  label="Email ID"
                  fullWidth
                  margin="normal"
                />

                <TextField
                  {...register("password")}
                  label="Password"
                  fullWidth
                  margin="normal"
                />

                <TextField
                  {...register("confirmPassword")}
                  label="Confirm Password"
                  fullWidth
                  margin="normal"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  {...register("panNo")}
                  label="PAN No."
                  fullWidth
                  margin="normal"
                />

                <TextField
                  {...register("tanNo")}
                  label="TAN No."
                  fullWidth
                  margin="normal"
                />

                <TextField
                  {...register("authorizedName")}
                  label="Name of MD/Chairman/Vice Chairman/Officers Authorized"
                  fullWidth
                  margin="normal"
                />

                <TextField
                  {...register("address")}
                  label="Complete Registered Address (with PIN code)"
                  fullWidth
                  margin="normal"
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel id="designation-label">Designation</InputLabel>
                  <Select
                    {...register("designation")}
                    labelId="designation-label"
                    id="designation-select"
                  >
                    <MenuItem value="">-- Select Designation --</MenuItem>
                    {/* Add options for designations */}
                  </Select>
                </FormControl>

                <TextField
                  {...register("mobileNumber")}
                  label="Mobile No. of Authorized Officer"
                  fullWidth
                  margin="normal"
                />

                <TextField
                  {...register("serviceTaxNo")}
                  label="Service Tax No."
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Box mt={2}>
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  color: "white",
                  width: "100%",
                  backgroundColor: "black",
                  alignItems: "center",
                  borderRadius: "10px",

                  "&:hover": {
                    color: "black",
                    border: "1px solid black",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
