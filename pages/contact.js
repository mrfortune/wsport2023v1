import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  ThemeProvider,
  Button,
  Container,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import lightTheme from "../styles/theme/lightTheme";
import { global } from "styled-jsx/css";
import Meta from "../components/Meta";
// import contactform from "../components/contactform";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

const Contact = () => {
  return (
    <div>
      <Meta title="WorldShaker Interactive::Contact" />
      <Box
        className="contact"
        component="div"
        direction="row"
        display="flex"
        mt={15}
        mb={2}
        justifyContent="center"
        sx={{ minHeight: "300px" }}
      >
        <Grid container spacing={2} sx={{ maxWidth: "md" }}>
          <Grid item paddingLeft={0} xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h1" mb={6}>
              Contact Us
            </Typography>
            <Typography variant="body1" mb={1}>
              183 Sterling Street
            </Typography>
            <Typography variant="body1" mb={1}>
              Brooklyn, NY 11225
            </Typography>
            <Typography variant="body1">Cell: 1.646.620.4438</Typography>
            <Typography
              color="primary"
              variant="button"
              sx={{ textDecoration: "none", fontSize:'1.5rem', color:'#FF5722' }}
            >
              <Mailto
                email="rharris@worldshaker.com"
                subject="Available to Discuss a new Project"
                body="Hi Robert,"
              >
                Please email me to discuss your next project.
              </Mailto>
              {/* <contactform/> */}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Contact;
