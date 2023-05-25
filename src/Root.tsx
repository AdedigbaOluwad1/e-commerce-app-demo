import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, createTheme } from '@mui/material';
import { borderColor, spacing } from '@mui/system';
import { dark, light } from '@mui/material/styles/createPalette';
import 'typeface-roboto'
// import ThemeProvider from '@/theme/Provider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const theme = createTheme({
  palette: {
    primary: {
      main: "#38c6a5",
    },
    neutral: {
      main: "rgba(198, 198, 198, 1)",
      light: "#f8faf9",
      dark: '#242829'
    }
  },
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
