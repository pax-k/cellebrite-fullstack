import React from 'react';
import { AppLayout, AppLayoutProps } from './app-layout';

export default {
  component: AppLayout,
  title: 'AppLayout',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: AppLayoutProps = {
    children: <div>Hello component</div>,
  };

  return <AppLayout {...props} />;
};
