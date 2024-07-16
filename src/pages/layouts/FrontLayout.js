import { ThemeProvider } from '@mui/material/styles';
import { frontTheme } from "@/themes"

const FrontLayout = ({ children }) => {
  return (
    <ThemeProvider theme={frontTheme}>
      {children}
    </ThemeProvider>
  )
}
export default FrontLayout