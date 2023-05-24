import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, createTheme } from '@mui/material';
import { borderColor, spacing } from '@mui/system';
import { dark } from '@mui/material/styles/createPalette';
import 'typeface-roboto'
// import ThemeProvider from '@/theme/Provider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const theme = createTheme({
  palette: {
    primary: {
      main: "#1e4aaf",
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          border: '1px solid rgba(227, 225, 236, 1)',
          outline: 'none',
          boxShadow: 'none',
          '&:focus': {
            outline: '2px'
          }
        },
      },
    },
  }
})
function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <RecoilRoot>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </HelmetProvider>
      </RecoilRoot>
    </StrictMode>,
  );
}

export default render;
