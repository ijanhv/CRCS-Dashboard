import React, { useState } from "react";
import { Typography, Box, useTheme, Button } from "@mui/material";
import Header from "components/Header";
import { useGetSocietiesQuery, useGetSocietiesByStateQuery, useGetSocietiesByTypeQuery, useGetSocietiesByYearQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";

const Societies = () => {
  const theme = useTheme();
  //  const { data, isLoading } = useGetCustomersQuery();
  const [society, setSociety] = useState("All Societies");
  const { data, isLoading, error } = useGetSocietiesQuery();
  console.log("error", error);
  console.log("society", data);

  const { data: dataByState, isLoading: isLoadingByState } = useGetSocietiesByStateQuery();

  const { data: dataByType, isLoading: isLoadingByType } = useGetSocietiesByTypeQuery();

  const { data: dataByYear, isLoading: isLoadingByYear } = useGetSocietiesByYearQuery();

  // get state wise count of societies


  const stateColumns = [
    
    {
      field: "_id",
      headerName: "State",
      flex: 0.25,
    },
    {
      field: "count",
      headerName: "Count",
      flex: 0.25,
    },
  ];

  const yearColumns = [
    {
      field: "_id",
      headerName: "Year",
      flex: 0.25,
    },
    {
      field: "count",
      headerName: "Count",
      flex: 0.25,
    }
  ];


  const columns = [
    {
      field: "srNo",
      headerName: "ID",
      flex: 0.25,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "state",
      headerName: "State",
      flex: 0.5,
    },
    {
      field: "district",
      headerName: "District",
      flex: 0.5,
    },
    {
      field: "dateOfRegistration",
      headerName: "Date of Registration",
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="SOCIETIES" subtitle="List of socities" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            borderBottom: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: "black",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.background.main,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: "grey",
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `gray !important`,
          },
        }}
      >
        <Box
          mb="1rem "
          sx={{
            display: "flex",
          }}
        >
          <Button
            sx={{
              mr: "1rem",
              color: "black",
              background: society == "All Societies" ? theme.palette.background.alt : "white",
              borderBottom: society == "All Societies" ? "2px solid black" : "",
              // hover bg
              
            }}
            variant="outlined"
           
            size="medium"
            onClick={() => setSociety("All Societies")}
          >
            ALL SOCIETIES
          </Button>
          <Button
            onClick={() => setSociety("State-wise List")}
            sx={{
              mr: "1rem",
              color: "black",
              background: society == "State-wise List" ? theme.palette.background.alt : "white",
              borderBottom: society == "State-wise List" ? "2px solid black" : "",
            }}
            variant="outlined"
            size="medium"
          >
            STATE-WISE LIST
          </Button>
          <Button
            onClick={() => setSociety("Calender-wise List")}
            sx={{
              mr: "1rem",
              color: "black",
              background: society == "Calender-wise List" ? theme.palette.background.alt : "white",
              borderBottom: society == "Calender-wise List" ? "2px solid black" : "",
            }}
            variant="outlined"
            size="medium"
          >
            CALENDER-WISE LIST
          </Button>
        </Box>
        {society == "All Societies" && (
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={data || []}
            columns={columns}
          />
        )}
        {society == "State-wise List" && 
        <DataGrid
        loading={isLoadingByState || !dataByState}
        getRowId={(row) => row._id}
        rows={dataByState || []}
        columns={stateColumns}
        
      
      />
        }
        {society == "Calender-wise List" && 
        <DataGrid
        loading={isLoadingByYear|| !dataByYear}
        getRowId={(row) => row._id}
        rows={dataByYear|| []}
        columns={yearColumns}
        
      
      />
        }
      </Box>
    </Box>
  );
};

export default Societies;
