import React, { useState } from 'react';
import {
  DataGrid,
  ColDef,
  ValueFormatterParams,
  RowModel,
} from '@material-ui/data-grid';

import _ from 'lodash';

import { Button } from '@material-ui/core';
import { PhoneTableRow } from './phone-table.types';
import { useStyles } from './phone-table.styles';

/* eslint-disable-next-line */
export interface PhoneTableProps {
  rows: Array<PhoneTableRow>;
  onAddRow: () => void;
  onRowEdit: (row: RowModel) => void;
  onRowsDelete: (rows: Array<RowModel>) => void;
}

const baseColumns: ColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'type', headerName: 'Type', flex: 1 },
  { field: 'color', headerName: 'Color', flex: 1 },
  {
    field: 'serial',
    headerName: 'Serial',
    flex: 1,
  },
  {
    field: 'metadata',
    headerName: 'Metadata',
    sortable: false,
    flex: 1,
    valueFormatter: ({ value }) => {
      try {
        return JSON.stringify(value);
      } catch (e) {
        return JSON.stringify({});
      }
    },
  },
];

export function PhoneTable({
  rows,
  onAddRow,
  onRowEdit,
  onRowsDelete,
}: PhoneTableProps) {
  const classes = useStyles();
  const [selectedRows, setSelectedRows] = useState([]);
  const onRowSelected = (row) => {
    const foundIndex = selectedRows.findIndex((r) => r.id === row.data.id);
    if (row.isSelected) {
      if (foundIndex === -1) setSelectedRows([...selectedRows, row.data]);
    } else {
      if (foundIndex > -1) {
        const rows = [...selectedRows];
        _.pullAt(rows, foundIndex);
        setSelectedRows(rows);
      }
    }
  };

  const editColumn = {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    renderCell: (params: ValueFormatterParams) => (
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ padding: '0 8px' }}
        onClick={() => {
          onRowEdit(params.row);
        }}
      >
        Edit
      </Button>
    ),
  };
  const columns = [...baseColumns, editColumn];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={onAddRow}
        style={{ marginBottom: '8px' }}
      >
        Add
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableMultipleSelection={true}
        onRowSelected={onRowSelected}
      />
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          onRowsDelete(selectedRows);
        }}
        style={{ marginTop: '8px' }}
      >
        Delete
      </Button>
    </div>
  );
}

export default PhoneTable;
