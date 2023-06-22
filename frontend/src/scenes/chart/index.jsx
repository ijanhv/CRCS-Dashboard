import React, { useState } from "react";
import { Box, MenuItem, OutlinedInput, Select, useTheme } from "@mui/material";
import Header from "components/Header";
import { useGetSocietiesByStateQuery, useGetSocietiesByYearQuery, useGetSocietiesByTypeQuery } from "state/api";
import BarChart from "components/Charts/BarChartState";
import FlexBetween from "components/FlexBetween";
import BarChartState from "components/Charts/BarChartState";
import BarChartYear from "components/Charts/BarChartYear";
import BarChartType from "components/Charts/BarChartType";

const Chart = () => {
  const theme = useTheme();
  const { data, isLoading, error } = useGetSocietiesByStateQuery();
   
  console.log("society count by state", data);

  const [value, setValue] = useState("Type");
  return (
    <Box
      sx={{
        m: "1.5rem 2.5rem",
      }}
    >
      <FlexBetween
        sx={{
          width: "300px",
        }}
      >
        <Header title="CHARTS" subtitle="No. of registerd societies" />
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="State">State</MenuItem>
          <MenuItem value="Year">Year</MenuItem>
          <MenuItem value="Type">Type</MenuItem>
        </Select>
      </FlexBetween>
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid black`}
        borderRadius="4px"
      >
        { isLoading ? "Loading..." : (<>
        {value == "State" && <BarChartState />}
        {value == "Year" && <BarChartYear />}
        {value == "Type" && <BarChartType />}
        </>)
    }

      </Box>
    </Box>
  );
};

export default Chart;
