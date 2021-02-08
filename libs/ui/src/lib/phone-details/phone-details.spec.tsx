import React from 'react';
import { render } from '@testing-library/react';

import { PhoneDetails, PhoneDetailsProps } from './phone-details';

describe('PhoneDetails', () => {
  it('should render successfully', () => {
    const onSubmit = () => {};
    const props: PhoneDetailsProps = {
      view: 'add',
      onSubmit,
      data: undefined,
    };
    const { baseElement } = render(<PhoneDetails {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
