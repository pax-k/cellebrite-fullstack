import React from 'react';
import { render } from '@testing-library/react';
import { PhoneTypeEnum } from '@cellebrite/data';

import { PhoneTable, PhoneTableProps } from './phone-table';

describe('PhoneTable', () => {
  it('should render successfully', () => {
    const rows = [
      {
        id: '1',
        type: PhoneTypeEnum.Apple,
        color: 'Jon',
        serial: '123',
        metadata: { test: 1 },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        type: PhoneTypeEnum.Samsung,
        color: 'Jon',
        serial: '123',
        metadata: { test: 1 },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const onAddRow = () => {};

    const onRowEdit = (row) => {};
    const onRowsDelete = (selectedRows) => {};
    const props: PhoneTableProps = {
      rows,
      onAddRow,
      onRowEdit,
      onRowsDelete,
    };
    const { baseElement } = render(<PhoneTable {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
