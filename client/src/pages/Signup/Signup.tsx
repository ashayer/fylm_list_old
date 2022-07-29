import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, Container, Grow, TextField, Paper, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grow in>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "15vh",
          alignContent: "center",
        }}
        maxWidth="xs"
        disableGutters
      >
        <Paper>
          <form onSubmit={formik.handleSubmit}>
            <Grid container sx={{ flexDirection: "column" }}>
              <Grid item sx={{ p: 3 }}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  autoComplete="on"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item sx={{ p: 3 }}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="on"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item sx={{ p: 3 }}>
                <Grid container sx={{ justifyContent: "space-between" }}>
                  <Button color="primary" variant="outlined" onClick={() => navigate("/login")}>
                    <Typography variant="body1">Login Instead?</Typography>
                  </Button>
                  <Button color="primary" variant="contained" type="submit">
                    <Typography variant="body1">Sign Up</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Grow>
  );
};

export default Signup;
