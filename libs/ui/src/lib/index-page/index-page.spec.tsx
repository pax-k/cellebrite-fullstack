import React from 'react';
import { render } from '@testing-library/react';
import { PhoneTypeEnum, IToastData } from '@cellebrite/data';
import { IndexPage, IndexPageProps } from './index-page';

describe('IndexPage', () => {
  it('should render successfully', () => {
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

    const onAddRow = () => {};
    const onRowEdit = (row) => {};
    const onRowsDelete = (selectedRows) => {};
    const showToast = false;
    const toastData: IToastData = {
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
    const { baseElement } = render(<IndexPage {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
