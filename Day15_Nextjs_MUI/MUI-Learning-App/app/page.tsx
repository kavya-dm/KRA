"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Box,
} from "@mui/material";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";

// Main demo page showcasing MUI components
export default function HomePage() {
  const [name, setName] = useState(""); // Stores form input value
  const [submitted, setSubmitted] = useState(false); // Tracks form submission

  // Handles form submission logic
  const handleSubmit = () => {
    if (name.trim()) setSubmitted(true);
  };

  return (
    <>
      <Header />

      <Container sx={{ mt: 6 }}>
        {/* Hero Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" color="primary" gutterBottom>
            MUI Learning App
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Learn Material UI with Next.js App Router
          </Typography>

          <Button variant="contained" size="large" sx={{ mt: 3 }}>
            Get Started
          </Button>
        </Box>

        {/* Form Section */}
        <Box maxWidth={400} mx="auto" mb={6}>
          <Typography variant="h5" gutterBottom>
            Simple Form
          </Typography>

          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!name && submitted}
            helperText={!name && submitted ? "Name is required" : ""}
          />

          <Button
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>

          {submitted && (
            <Typography mt={2} color="secondary">
              Hello, {name}! 👋
            </Typography>
          )}
        </Box>

        {/* Features Grid */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <FeatureCard
              title="Typography"
              description="Headings, body text, captions"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <FeatureCard
              title="Buttons"
              description="Contained, outlined, text variants"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <FeatureCard
              title="Theming"
              description="Light/Dark mode & colors"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
