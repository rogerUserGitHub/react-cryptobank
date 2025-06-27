import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={350} height={120} />
      <br />
      <Skeleton variant="rounded" width={280} height={20} />
      <Skeleton variant="rounded" width={260} height={20} />
      <Skeleton variant="rounded" width={150} height={20} />
      <br />
      <Skeleton variant="rounded" width={280} height={20} />
      <Skeleton variant="rounded" width={300} height={20} />
    </Stack>
  );
}
