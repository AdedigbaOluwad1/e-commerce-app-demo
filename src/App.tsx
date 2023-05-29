import { Fragment, useContext, useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Nav from './pages/Components/Nav';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';

type AppBar = {
    showNav: boolean,
    setShowNav: (showNav: boolean) => void;
  }

export const AppBarContext = createContext({} as AppBar);
function App() {

  const [showNav, setShowNav] = useState(true);
  

  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <SW />
      <AppBarContext.Provider value={{showNav, setShowNav}}>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
        <Nav showNav={showNav} />
      </AppBarContext.Provider>
      
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
