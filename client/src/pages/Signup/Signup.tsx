import React, { useState } from "react";
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

type SignupProps = {
  email: string;
  password: string;
};

const signup = async (userData: SignupProps) => {
  try {
    const response = await axios.post("api/signup", userData);
    return response.status;
  } catch (error) {
    return error;
  }
};

const Signup = () => {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setEmailError("");
      setPasswordError("");
      signup(values).then((status: any) => {
        console.log(status);
        if (status === 201) {
          navigate("/home");
        } else {
          setEmailError(status.response.data.errors.email);
          setPasswordError(status.response.data.errors.password);
        }
      });
    },
  });

  return (
    <Grow in>
      <Container
        sx={{
          height: "70vh",
          backgroundColor: "#FFFFFF",
          borderRadius: "0px 0px 5px 5px",
          borderBottom: "10px solid #2B2A2A",
        }}
        maxWidth="sm"
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
          maxWidth="sm"
          disableGutters
        >
          <Typography variant="h2" sx={{ pt: 5, color: "#2B2A2A" }}>
            <strong>Create Account</strong>
          </Typography>
          <Box sx={{ backgroundColor: "#2b2a2a", borderRadius: "5px", mt: 2 }}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container sx={{ flexDirection: "column" }}>
                <Grid item sx={{ p: 3, pt: 10 }}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="filled"
                    autoComplete="on"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={
                      (formik.touched.email && Boolean(formik.errors.email)) || emailError !== ""
                    }
                    helperText={(formik.touched.email && formik.errors.email) || emailError}
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
                    variant="filled"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      (formik.touched.password && Boolean(formik.errors.password)) ||
                      passwordError !== ""
                    }
                    helperText={
                      (formik.touched.password && formik.errors.password) || passwordError
                    }
                  />
                </Grid>
                <Grid item sx={{ p: 3, pb: 4, pt: 10 }}>
                  <Grid container sx={{ justifyContent: "space-between" }}>
                    <Button variant="outlined" onClick={() => navigate("/login")}>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Login Instead?
                      </Typography>
                    </Button>
                    <Button variant="contained" type="submit" color="primary">
                      <Typography variant="body1">Sign Up</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </Container>
    </Grow>
  );
};

export default Signup;
