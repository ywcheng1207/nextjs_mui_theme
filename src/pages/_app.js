import { ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { frontTheme, adminTheme } from '@/themes';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.includes('/admin');
  const theme = isAdminRoute ? adminTheme : frontTheme;

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
