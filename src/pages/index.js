import { useRouter } from 'next/router';
import Button from '@mui/material/Button';

export default function Home() {
  const router = useRouter();

  return (
    <>
      前
      <Button variant="contained" color="secondary" onClick={() => router.push('/admin')}>
        前往後台
      </Button>
    </>
  );
}
