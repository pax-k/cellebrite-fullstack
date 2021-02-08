import React from 'react';
import { useStyles } from './index-page.styles';
import { PhoneTable, PhoneTableProps } from '@cellebrite/ui';
import { IToastData } from '@cellebrite/data';
import { Typography, Snackbar } from '@material-ui/core';
import Alert, { Color } from '@material-ui/lab/Alert';

/* eslint-disable-next-line */
export type IndexPageProps = PhoneTableProps & {
  showToast: boolean;
  toastData: IToastData;
};

export function IndexPage({
  rows = [],
  onAddRow,
  onRowEdit,
  onRowsDelete,
  showToast,
  toastData,
}: IndexPageProps) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5" color="inherit" align="center">
        Phone Database
      </Typography>
      <PhoneTable
        rows={rows}
        onAddRow={onAddRow}
        onRowEdit={onRowEdit}
        onRowsDelete={onRowsDelete}
      />
      <Snackbar open={showToast} autoHideDuration={6000}>
        <Alert severity={toastData.severity}>{toastData.message}</Alert>
      </Snackbar>
    </div>
  );
}

export default IndexPage;
