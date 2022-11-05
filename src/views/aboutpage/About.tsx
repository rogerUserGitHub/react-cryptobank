import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { computeHeadingLevel } from '@testing-library/react';

const steps = [
  {
    label: 'Start of my coding journey',
    description: `In October 2021 I started coding as a hobby. After creating a few console 
    applications in Java, I realized I quite enjoyed programming, and continued
    my learning journey with the help of online courses.`,
  },
  {
    label: 'Retraining with the University of Amsterdam',
    description:
      'At the start of 2022 I decided to take the jump. I quit my job, and started a full-time retraining course in Software Engineering at the University of Amsterdam. Technologies I learned included Java, Spring Boot, SQL, design patterns and algorithms.',
  },
  {
    label: 'Junior .NET Developer at Conclusion',
    description: `In July 2022 I started as a junior developer at Conclusion Enablement in Amsterdam, where I work as a full-stack developer (React, .NET, C#, AWS).`,
  },
  {
    label: 'Hobby projects',
    description: `DailyCrypto is the first React application that I have built without following a step-by-step tutorial. It makes use of the CoinGecko Api to fetch up-to-date information, and the UI is built using external libraries such as MUI, Rechart and i18n.`,
  },
];

export default function Aboutpage() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Container>
        <Grid container xs={12} md={12} lg={12}>
          <Grid item xs={12} md={6} lg={6} paddingTop={3}>
            <Stepper activeStep={activeStep} orientation='vertical'>
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? <Typography variant='caption'></Typography> : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant='contained'
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Grid>
          <Grid container xs={12} md={6} lg={6} paddingTop={3}>
            <img src='coding.jpg' alt={'coding'} width={570}></img>
            <Grid item xs={12} md={6} lg={6} paddingTop={3}>
              <a href='https://www.linkedin.com/in/rogerdirkx/'>
              <img  src='linkedin.png' alt={'linkedin'} width={200}></img>
              </a>
            </Grid>
            <Grid item xs={12} md={6} lg={6} paddingTop={3}>
              <a href='https://github.com/rogerUserGitHub'>
              <img src='github.png' alt={'github'} width={200}></img>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
