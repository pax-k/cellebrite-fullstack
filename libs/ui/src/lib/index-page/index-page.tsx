import React from 'react';
import { useStyles } from './index-page.styles';
import { PhoneTable, PhoneTableProps } from '@cellebrite/ui';
import { Typography } from '@material-ui/core';

/* eslint-disable-next-line */
export type IndexPageProps = PhoneTableProps;

export function IndexPage({
  rows = [],
  onAddRow,
  onRowEdit,
  onRowsDelete,
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
    </div>
  );
}

export default IndexPage;
