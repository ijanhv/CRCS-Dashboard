import React from "react";
import FlexBetween from "components/FlexBetween";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import { useGetDashboardStatsQuery, useGetSocietiesByStateQuery, useGetSocietiesQuery } from "state/api";
import StatBox from "components/StatBox";
import { useSelector } from "react-redux";
import LineChart from "components/Charts/LineChart";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardStatsQuery();

  const { data : societyData , isLoading: societyLoading, error } = useGetSocietiesQuery();

  console.log("dashboard", data);
  const user = useSelector(state => state.global.user)
  console.log("user", user);


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
      <FlexBetween>
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: "#7F38EC",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            {" "}
            <DownloadOutlined
              sx={{
                mr: "10px",
              }}
            />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12",
          },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Total States"
          color="bg-c-blue"
          value="24"
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: "white", fontSize: "26px" }}
            />
          }
          

        />
        <StatBox
          title="Number of Societies"
        
          color="bg-c-yellow"
          value="90"
          increase="+21%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{ color: "white", fontSize: "26px" }}
            />
          }
          className="bg-c-green"

        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          {/* <OverviewChart view="sales" isDashboard={true} /> */}
          <LineChart />
        </Box>
        <StatBox
          color="bg-c-green"
          title="Total Districts"
          value="45"
          increase="+5"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{ color: "white", fontSize: "26px" }}
            />
          }
        />
        <StatBox
          color="bg-c-pink"
          title="New Registraitons"
          value="30"
          increase="+43%"

          description="Since last month"
          icon={
            <Traffic
              sx={{ color: "white", fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderBottom: "none",
              borderRadius: "0.5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: "black",
              borderBottom: "none",
            },
          
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
          
          }}
        >
           <DataGrid
            loading={societyLoading || !societyData}
            getRowId={(row) => row._id}
            rows={societyData || []}
            columns={columns}
          />
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Societies by states
          </Typography>
          <BreakdownChart isDashboard={true} />
          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of real states and information 
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
