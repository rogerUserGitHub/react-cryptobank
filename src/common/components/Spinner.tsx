import LinearProgress from '@mui/material/LinearProgress';
import { Box, CircularProgress, Stack } from '@mui/material';

export default function CircularDeterminate() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={38} direction="row">
    <CircularProgress color="secondary" />
    <CircularProgress color="success" />
    <CircularProgress color="inherit" />
  </Stack>
  );
}
