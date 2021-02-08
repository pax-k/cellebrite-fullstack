import React from 'react';
import { render } from '@testing-library/react';

import PhoneDetails from './phone-details';

describe('PhoneDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneDetails />);
    expect(baseElement).toBeTruthy();
  });
});
