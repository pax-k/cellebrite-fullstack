import React, { useState } from 'react';
import _ from 'lodash';
import { PhoneTypeEnum } from '@cellebrite/data';
import { Color } from '@material-ui/lab/Alert';
import { IndexPage, IndexPageProps } from './index-page';

export default {
  component: IndexPage,
  title: 'IndexPage',
};

export const primary = () => {
  const rows = [
    {
      id: '1',
      type: PhoneTypeEnum.Apple,
      color: 'Jon',
      serial: '123',
      metadata: { test: 1 },
    },
    {
      id: '2',
      type: PhoneTypeEnum.Samsung,
      color: 'Jon',
      serial: '123',
      metadata: { test: 1 },
    },
  ];

  const [tableRows, setTableRows] = useState(rows);

  const onAddRow = () => {
    console.log('add row');
  };

  const onRowEdit = (row) => {
    console.log(row);
  };
  const onRowsDelete = (selectedRows) => {
    const allRows = [...tableRows];
    const selected = [...selectedRows];
    selected.forEach((row, index) => {
      const foundIndex = tableRows.findIndex((r) => r.id === row.id);
      _.pullAt(allRows, foundIndex);
    });
    setTableRows(allRows);
  };

  const showToast = false;
  const toastData: { message: string; severity: Color } = {
    message: 'Hello',
    severity: 'success',
  };

  /* eslint-disable-next-line */
  const props: IndexPageProps = {
    rows,
    onAddRow,
    onRowEdit,
    onRowsDelete,
    showToast,
    toastData,
  };

  return <IndexPage {...props} />;
};
