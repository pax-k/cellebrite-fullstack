import React from 'react';
import { PhoneDetails, PhoneDetailsProps } from '@cellebrite/ui';
import { Typography } from '@material-ui/core';

/* eslint-disable-next-line */
export type PhonePageProps = PhoneDetailsProps;

export function PhonePage({ view, data, onSubmit }: PhonePageProps) {
  return (
    <div>
      <Typography variant="h5" color="inherit" align="center">
        {view === 'add' ? 'Add Phone' : 'Edit Phone'}
      </Typography>
      <PhoneDetails view={view} data={data} onSubmit={onSubmit} />
    </div>
  );
}

export default PhonePage;
