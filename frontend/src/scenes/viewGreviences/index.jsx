import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "components/Header";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useGetGrievencesQuery } from "state/api";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const ViewGriences = () => {
  const { data, isLoading } = useGetGrievencesQuery();
  console.log("data", data);
  const theme = useTheme();

  return (
    <div>
      <Box m="1.5rem 2.5rem">
        <Header title="NEW GREVIENCES" subtitle="List of new applications" />
        <TableContainer component={Paper} sx={{ my: 5 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: theme.palette.background.alt }}>
                <TableCell>Society Name</TableCell>
                <TableCell>Tittle</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading
                ? "Loading...."
                : data.map((society, i) => (
                    <TableRow key={i}>
                      <TableCell>{data[0]._id}</TableCell>
                      <TableCell>{data[0].title}</TableCell>
                      <TableCell>
                        <Accordion
                        sx={{
                            boxShadow: "none",

                        }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >View
                          </AccordionSummary>
                          <AccordionDetails
                          dangerouslySetInnerHTML={{ __html: data[0].description }}
                          >
                           
                          </AccordionDetails>
                        </Accordion>
                      </TableCell>
                      {/* <TableCell dangerouslySetInnerHTML={{ __html: data[0].description }}></TableCell> */}
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ViewGriences;
