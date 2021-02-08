import React from 'react';
import { render } from '@testing-library/react';

import Nextcomponent from './nextcomponent';

describe('Nextcomponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nextcomponent />);
    expect(baseElement).toBeTruthy();
  });
});
