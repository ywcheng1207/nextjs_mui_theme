import { ThemeProvider } from '@mui/material/styles';
import { adminTheme } from '@/themes';

const AdminLayout = ({ children }) => {
  return (
    <ThemeProvider theme={adminTheme}>
      {children}
    </ThemeProvider>
  )
}
export default AdminLayout