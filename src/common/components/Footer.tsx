import { Container, Grid, Typography, Link, Box } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#f4f4f4', py: 5, pt: 8, mt: 8 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Logo Section */}
          <Grid item xs={12} md={3}>
            <Box>
              <img
                src={process.env.PUBLIC_URL + '/goat.jpg'}
                alt="Logo"
                width={80}
                style={{ marginBottom: '1rem' }}
              />
              <Typography variant="body2" color="text.secondary">
                © 2025 DailyCrypto. All rights reserved.
              </Typography>
            </Box>
          </Grid>

          {/* Resources Section */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Link
              href="#"
              color="text.primary"
              underline="none"
              display="block"
              mb={1}
            >
              Blog
            </Link>
          </Grid>

          {/* About Section */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Link
              href="#"
              color="text.primary"
              underline="none"
              display="block"
              mb={1}
            >
              about us
            </Link>
          </Grid>

          {/* Community Section */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Community
            </Typography>
            <Link
              href="#"
              color="text.primary"
              underline="none"
              display="block"
              mb={1}
            >
              Forums
            </Link>
            <Link
              href="#"
              color="text.primary"
              underline="none"
              display="block"
              mb={1}
            >
              Discord
            </Link>
            <Link
              href="#"
              color="text.primary"
              underline="none"
              display="block"
            >
              GitHub
            </Link>
          </Grid>

          {/* Contact Section with Social Media */}
          <Grid item xs={6} md={3} >
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Box display="flex" gap={2}>
              <Link href="https://www.linkedin.com/in/rogerdirkx/" target="_blank">
                <img
                  src={process.env.PUBLIC_URL + '/linkedin.png'}
                  alt="LinkedIn"
                  width={30}
                />
              </Link>
              <Link href="https://github.com/rogerUserGitHub" target="_blank">
                <img
                  src={process.env.PUBLIC_URL + '/github.png'}
                  alt="GitHub"
                  width={30}
                />
              </Link>
              <Link href="https://react-portfolio-rdirkx.netlify.app/" target="_blank">
                <img
                  src={process.env.PUBLIC_URL + '/coding.jpg'}
                  alt="portfolio-website"
                  width={30}
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
