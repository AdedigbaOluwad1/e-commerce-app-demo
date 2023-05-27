import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Nav from './pages/Components/Nav';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <SW />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <Nav />
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
