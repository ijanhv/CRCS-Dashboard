import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Typography } from '@mui/material';
import Header from 'components/Header';
import {useTheme } from '@mui/material';
import { useGetAllSocietiesQuery, useUpdateSocietyByIdMutation } from 'state/api';
import { themeSettings } from 'theme';

const NewApplications = () => {
    const { data, isLoading } = useGetAllSocietiesQuery();
    const [updateSocietyById, { isSuccess }] = useUpdateSocietyByIdMutation();
    const theme = useTheme();

    const societies = [
        {
            id: 1,
            name: 'Society 1',
            contactPerson: 'Person 1',
            email: 'example@gmail.com',
            registrationStatus: 'Pending'
        },
        {
            id: 2,
            name: 'Society 2',
            contactPerson: 'Person 2',
            email: '',
            registrationStatus: 'Pending'
        },
    ]

  return (
    <Box m="1.5rem 2.5rem">
    <Header title="NEW APPLICATIONS" subtitle="List of new applications" />
    <TableContainer component={Paper} sx={{ my: 5 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: theme.palette.background.alt}}>
            <TableCell>Society Name</TableCell>
            <TableCell>Contact Person</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Registration Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? "Loading...." :  data.map((society, i) => (
            <TableRow key={i}>
              <TableCell>{society.name}</TableCell>
              <TableCell>{society.authorizedName}</TableCell>
              <TableCell>{society.email}</TableCell>
              <TableCell>
               
                {society.approved ? "Approved" : "Pending"}</TableCell>
              <TableCell>
                {society.approved  ? 
                
                <Typography variant="body2" sx={{ color: 'green' }}>
                    Approved
                </Typography>
                : (
                  <Button variant="contained" 
                  sx={{ borderRadius: "15px", backgroundColor: "#4D4DFF", color: "white" }}
                    onClick={() => updateSocietyById({ id: society._id, body: { approved: true } })}
                  >
                    Approve
                  </Button>
                
                )}
               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default NewApplications;
