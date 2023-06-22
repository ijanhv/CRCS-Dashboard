import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const Header = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box>
        <Typography variant="h2" color="black" fontWeight="bold" sx={{ mb: "5px" }}>
            {title}
        </Typography>
        <Typography variant="h5" color="black">
            {subtitle}
        </Typography>
    </Box>
  )
}

export default Header