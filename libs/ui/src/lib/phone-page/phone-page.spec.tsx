import React from 'react';
import { Color } from '@material-ui/lab/Alert';
import { render } from '@testing-library/react';

import { PhonePage, PhonePageProps } from './phone-page';

const onSubmit = (data) => console.log(data);
const showToast = false;
const toastData: { message: string; severity: Color } = {
  message: 'Hello',
  severity: 'success',
};

describe('PhonePage', () => {
  it('should render successfully', () => {
    const props: PhonePageProps = {
      view: 'add',
      onSubmit,
      data: undefined,
      showToast,
      toastData,
    };
    const { baseElement } = render(<PhonePage {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
