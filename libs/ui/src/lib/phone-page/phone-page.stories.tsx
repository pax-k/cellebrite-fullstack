import React from 'react';
import { Color } from '@material-ui/lab/Alert';
import { PhoneTypeEnum } from '@cellebrite/data';
import { PhonePage, PhonePageProps } from './phone-page';

export default {
  component: PhonePage,
  title: 'PhonePage',
};

const onSubmit = (data) => console.log(data);
const showToast = false;
const toastData: { message: string; severity: Color } = {
  message: 'Hello',
  severity: 'success',
};

export const add = () => {
  /* eslint-disable-next-line */
  const props: PhonePageProps = {
    view: 'add',
    onSubmit,
    data: undefined,
    showToast,
    toastData,
  };

  return <PhonePage {...props} />;
};

export const edit = () => {
  /* eslint-disable-next-line */
  const props: PhonePageProps = {
    view: 'edit',
    data: {
      id: '1',
      type: PhoneTypeEnum.Apple,
      color: 'Jon',
      serial: '123',
      metadata: '{ "test": 1 }',
    },
    onSubmit,
    showToast,
    toastData,
  };

  return <PhonePage {...props} />;
};
