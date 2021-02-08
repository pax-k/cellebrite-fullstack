import React from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { PhoneDetails, PhoneDetailsProps } from '@cellebrite/ui';
import { IToastData } from '@cellebrite/data';
import { Typography } from '@material-ui/core';

/* eslint-disable-next-line */
export type PhonePageProps = PhoneDetailsProps & {
  showToast: boolean;
  toastData: IToastData;
};

export function PhonePage({
  view,
  data,
  onSubmit,
  showToast,
  toastData,
}: PhonePageProps) {
  return (
    <div>
      <Typography variant="h5" color="inherit" align="center">
        {view === 'add' ? 'Add Phone' : 'Edit Phone'}
      </Typography>
      <PhoneDetails view={view} data={data} onSubmit={onSubmit} />
      <Snackbar open={showToast} autoHideDuration={6000}>
        <Alert severity={toastData.severity}>{toastData.message}</Alert>
      </Snackbar>
    </div>
  );
}

export default PhonePage;
