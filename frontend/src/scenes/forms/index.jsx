import { Box, Button } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import Header from "components/Header";
import Form1 from "components/Forms/Form1";

const Forms = () => {
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="FORMS" subtitle="" />
      <Box
        my="1rem "
        sx={{
          display: "flex-wrap",
        }}
      >
        <Button
          sx={{
            mr: "1rem",
            mb: "1rem",
            color: "black",
          }}
          variant="outlined"
          size="medium"
        >
          FORM - 1
        </Button>
        <Button
          sx={{
            mr: "1rem",
            mb: "1rem",

            color: "black",
          }}
          variant="outlined"
          size="medium"
        >
          FORM - 2
        </Button>
        <Button
          sx={{
            mr: "1rem",
            mb: "1rem",

            color: "black",
          }}
          variant="outlined"
          size="medium"
        >
          FORM - 3
        </Button>
      </Box>

      <Form1 />
    </Box>
  );
};

export default Forms;
