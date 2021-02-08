import React from 'react';
import { render } from '@testing-library/react';

import PhoneTable from './phone-table';

describe('PhoneTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneTable />);
    expect(baseElement).toBeTruthy();
  });
});
