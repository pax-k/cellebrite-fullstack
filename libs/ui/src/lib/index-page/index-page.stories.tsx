import React from 'react';
import { IndexPage, IndexPageProps } from './index-page';

export default {
  component: IndexPage,
  title: 'IndexPage',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: IndexPageProps = {};

  return <IndexPage />;
};
