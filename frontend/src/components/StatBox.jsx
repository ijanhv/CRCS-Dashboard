import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from './FlexBetween';

const StatBox = ({ title, value, increase, icon, description, color }) => {
  const theme = useTheme();
  return (
    <Box
        gridColumn="span 2"
        gridRow="span 1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p="1.25rem 1rem"
        flex="1 1 100%" // flex-grow, flex-shrink, flex-basis
        // backgroundColor="#6940E6"
        borderRadius="0.55rem"
        className={color}
    >
        <FlexBetween>
            <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>{title}</Typography>
            {icon}
        </FlexBetween>

        <Typography variant="h3" fontWeight="600" sx={{ color: "white", }}>
            {value || 78 }
        </Typography>

        <FlexBetween gap="1rem">
        <Typography variant="h5" fontStyle="italic" sx={{ color: "white", }}>
            {increase}
        </Typography>
        <Typography sx={{ color: "white" }} >
            {description}
        </Typography>
        </FlexBetween>

    </Box>
  )
}

export default StatBox