import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { usePostGrevienceMutation, useGetSocietyByEmailQuery } from 'state/api';
import { TextField, Button, Container, Typography } from '@mui/material';
import Header from 'components/Header';

const Grievance= () => {
  
    let currentUser = null;
  if (typeof window !== "undefined") {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }
    const editor = useRef(null);
    const [ name, set ] = useState('');
    const [ title, setTitle ] = useState('');
	const [content, setContent] = useState('');
    const [ postGrevience, { isLoading, error, data } ] = usePostGrevienceMutation();
    const { data: societyData,  isLoading: societyLoading, error: societyError } = useGetSocietyByEmailQuery(`${currentUser.email}`)
    console.log("society", societyData);


    const config = {
        placeholder: 'Start typings...',
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log( content.toString());
//     const { _id } = societyData[0]; // Assuming societyData contains the _id field
//     console.log("id", _id);
//   Call the postGrevience mutation to submit the grievance
  postGrevience({
    id: societyData[0]._id,
    body: {
      title: title, // Assuming you have a title variable
    description: content.toString(), // Assuming you have a content variable
      status: "pending",
    },
  });
 

    // Handle form submission logic
  };

  return (
    <Container maxWidth="lg" sx={{ p: '10px' }}>
      <Header title="Grievance" subtitle="File your geviences"  />
      <form onSubmit={handleSubmit}>
        <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          label="Society Name"
          fullWidth
          margin="normal"
          required
        />
        
        {/* <TextField
          label="Grievance Details"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        /> */}
        <JoditEditor
			ref={editor}
			value={content}
            config={config}
			tabIndex={10} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
        <Button 
        sx={{ border: "1px solid black", borderRadius: "10px", color: "black", fontWeight: "bold", fontSize: "1rem", padding: "10px 20px", marginTop: "10px" }}
        type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Grievance;
