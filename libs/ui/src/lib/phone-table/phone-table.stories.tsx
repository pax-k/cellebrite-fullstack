import React, { useState } from 'react';
import _ from 'lodash';
import { PhoneTable, PhoneTableProps } from './phone-table';
import { PhoneTypeEnum } from '@cellebrite/data';

export default {
  component: PhoneTable,
  title: 'PhoneTable',
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
  const props: PhoneTableProps = {
    rows: tableRows,
    onAddRow,
    onRowEdit,
    onRowsDelete,
  };

  return <PhoneTable {...props} />;
};
