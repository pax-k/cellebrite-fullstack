import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { muiTheme } from '@cellebrite/data';

/* eslint-disable-next-line */
export interface AppLayoutProps {
  children?: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhonelinkSetupIcon style={{ marginRight: '8px' }} />
            <Typography variant="h6" color="inherit" noWrap>
              Cellebrite Phone Management System
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <main style={{ marginTop: '50px' }}>{children}</main>
          <footer>
            <Typography variant="body2" color="textSecondary" align="center">
              Copyright © 20212
            </Typography>
          </footer>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default AppLayout;
