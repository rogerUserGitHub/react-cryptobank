import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Grid, Container } from '@mui/material';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const steps = [
  {
    year: '2021',
    title: 'Start of my coding journey',
    description:
      'In October 2021, I started coding as a hobby. After creating a few console applications in Java, I realized I quite enjoyed programming and continued my learning journey with online courses.',
  },
  {
    year: '2022',
    title: 'Retraining with the University of Amsterdam',
    description:
      'At the start of 2022, I took the jump. I quit my job and started a full-time retraining course in Software Engineering at the University of Amsterdam. Technologies I learned included Java, Spring Boot, SQL, design patterns, and algorithms.',
  },
  {
    year: '2022',
    title: 'Junior .NET Developer at Conclusion',
    description:
      'In July 2022, I started as a junior developer at Conclusion Enablement in Amsterdam, where I work as a full-stack developer (React, .NET, C#, AWS).',
  },
  {
    year: '2023',
    title: 'Hobby projects',
    description:
      'DailyCrypto is the first React application that I built without following a step-by-step tutorial. It fetches real-time crypto data using the CoinGecko API and features a UI built with external libraries such as MUI, Recharts, and i18n.',
  },
];

export default function AboutPage() {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" padding={4}>
        <Grid item xs={12} textAlign="center">
          <h1 className="text-4xl font-bold">About Me</h1>
        </Grid>
        <Grid container spacing={4} paddingTop={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={{ mb: 2, borderLeft: '4px solid #1976d2', padding: 2 }}>
                    <CardContent>
                      <h3>
                        {step.year} - {step.title}
                      </h3>
                      <p>{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Grid container spacing={2} justifyContent="center" mt={2}>
              <Grid item>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://www.linkedin.com/in/rogerdirkx"
                    target="_blank"
                    startIcon={<LinkedInIcon />}
                  >
                    LinkedIn
                  </Button>
                </motion.div>
              </Grid>
              <Grid item>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="https://github.com/rogerUserGitHub"
                    target="_blank"
                    startIcon={<GitHubIcon />}
                  >
                    GitHub
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
