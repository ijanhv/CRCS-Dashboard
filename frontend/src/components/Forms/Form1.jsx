import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";

const Form1 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
        },
      }}
    >
      <Paper
        elevation={3}
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <Typography
          variant="h5"
          color="black"
          fontWeight="bold"
          sx={{ mb: "5px", p: "10px", textAlign: "center" }}
        > Form No. 1 </Typography>
        <Typography
          variant="h6"
          color="black"
          fontWeight="bold"
          sx={{ mb: "5px", p: "10px", textAlign: "center" }}>
          [See sub-rule (1) of rule 3]
        </Typography>
        <Typography
          variant="h4"
          color="black"
          fontWeight="bold"
          sx={{ mb: "5px", p: "10px", textAlign: "center" }}
        >
          Application for registration of a Multi-State Cooperative Society
          under the Multi-State Cooperative Societies Act, 2002
        </Typography>

        {/* Letter */}

        <Typography variant="h6" color="black" sx={{ mb: "5px", p: "30px" }}>
          To, <br />
          The Central Registrar of Cooperative Societies, <br />
          New Delhi. <br />
          Sir, <br />
          We submit herewith a proposal for registration of the following
          Multi-State Cooperative Society along with enclosures as indicated
          below : <br />
          2. We also declare that the information given herewith including that
          in the enclosures is correct to the best of our knowledge. (a) Name of
          the proposed Multi-State Co-operative Society; <br />
          (b) Headquarters and address to be registered; <br />
          (c) Area of operations;
          <br />
          (d) Main objectives; <br />
          (e) Why is it absolutely necessary for the society to be registered
          under the Multi-State Cooperative Societies Act,2002; <br />
          (f) A certificate in respect of provisions of clause (b) or
          sub-section (1) of section 7; <br />
          (g) A certificate in respect of provisions clause (c) of sub-section
          (1) of section 7; <br />
          (h) A certificate in respect of provisions of clause (d) of
          sub-section (1) of section 7; <br />
          (i) If all the members are individuals, indicate the number of persons
          from each State who have signed the application : Name of the State
          Number of persons who have Signed the application <br />
          (j) Name and address of the applicant for the purpose of further
          correspondence. <br /> <br />
          3. Following documents are enclosed : <br /> (a) A certificate from
          the _______________ Bank stating credit balance there in favour of the
          proposed multi-state cooperative society. <br />
          (b) A scheme explaining how the proposed multi-state cooperative
          society has reasonable prospects of becoming a viable unit. We are
          sending herewith four copies of the bye-laws duly signed. <br />
          4. Following persons are authorised to sign the bye-laws and also to
          make necessary alteration therein. <br />
          5. The particulars of the applicants are given here under :
          <br />
          <br />
          <table
            border={1}
            style={{
              borderCollapse: "collapse",
              width: "100%",
              padding: "20px",
            }}
          >
            <tr>
              <td>S. No.</td>
              <td>Name</td>
              <td>
                If representing a corporate body, name of the institution*
              </td>
              <td>If the applicant is an individual</td>
              <td>Age</td>
              <td>Nationality</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>4A</td>
              <td>4B</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>4A</td>
              <td>4B</td>
            </tr>
          </table>
          <br />
          <Typography variant="h5" fontWeight="bold" textAlign="center" paddingBottom="10px">For Official Use 
          </Typography>
          Received by registered post on+ _________________ by+
          ____________ in the office of the Central Registrar, or by hand from
          Shri+ _______________ entered in the register of application at S.No.
          _______________ . Signature of officer receiving Received registration
          proposal No. ______________ on ___________ for registration of
          _______________ Society Ltd., (Proposed) alongwith the enclosures
          referred to above from ______________ by post/hand deliver. Place
          _____________ Date _______________ Central Registrar Signature and
          Stamp * If representing a co-operative or any other co-operative body
          enclose a copy of the Resolution or authorization of the competent
          authority, authorizing the person to sign the application for
          registration. + blanks to be filled in.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Form1;
