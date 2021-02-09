import React from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { muiTheme } from '@cellebrite/data';
import { NextRouter } from 'next/router';

/* eslint-disable-next-line */
export interface AppLayoutProps {
  children?: React.ReactNode;
  router?: NextRouter;
}

function GoBack() {}

export function AppLayout({ children, router }: AppLayoutProps) {
  return (
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
          {router && router.pathname !== '/' && (
            <div style={{ marginTop: '12px' }}>
              <IconButton onClick={() => router.back()}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="button" color="textSecondary">
                Go Back
              </Typography>
            </div>
          )}
          <main style={{ marginTop: '40px' }}>{children}</main>
        </Container>
        <footer>
          <Typography variant="body2" color="textSecondary" align="center">
            Cellebrite Romania © 2021
          </Typography>
        </footer>
      </ThemeProvider>
  );
}

export default AppLayout;
