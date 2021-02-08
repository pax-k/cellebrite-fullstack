import React from 'react';
import { render } from '@testing-library/react';

import PhonePage from './phone-page';

describe('PhonePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhonePage />);
    expect(baseElement).toBeTruthy();
  });
});
