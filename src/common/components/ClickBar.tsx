import { Container, Paper, Typography, styled, IconButton, Link } from '@mui/material';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import FireIcon from '@mui/icons-material/LocalFireDepartment';
import { useState } from 'react';

const StyledBox = styled(Paper)(({ theme }) => ({
  textAlign: 'left',
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  justifyContent: 'space-between',
  background: '#569680',
}));

export const ClickBar = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Container>
      {visible && (
        <StyledBox>
          <Box display="flex" alignItems="center">
            <FireIcon />
            <Link
              href="https://finance.yahoo.com/topic/crypto/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAADj0pNRoy2sbjLTTrc93QEopyWrfdOPuRxpM_laYQCeDCGwgnuwPfvg2PlZKcV2pujN0pBym523yXH4YNDp5gjg6KMHMsewK4gHUr0zPxZfUUcCRJS2UxDVm98CYz0ue3zPWbH727KuT1ulU5FhEI1zpeXRmEiTEZzKuTUt5s1ST"
              target="_blank"
            >
              <Typography variant="body1" color="black" marginLeft={1}>
                Breaking news on crypto markets: check here!
              </Typography>
            </Link>
          </Box>
          <IconButton onClick={() => setVisible(false)}>
            <CloseIcon />
          </IconButton>
        </StyledBox>
      )}
    </Container>
  );
};

export default ClickBar;
