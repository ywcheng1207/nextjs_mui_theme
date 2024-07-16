import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

export default function Admin() {
  const router = useRouter();

  return (
    <>
      後
      <Button variant="contained" color="secondary" onClick={() => router.push('/')}>
        回到前台
      </Button>
    </>
  );
}
