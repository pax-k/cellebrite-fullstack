import React from 'react';
import { render } from '@testing-library/react';

import IndexPage from './index-page';

describe('IndexPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IndexPage />);
    expect(baseElement).toBeTruthy();
  });
});
