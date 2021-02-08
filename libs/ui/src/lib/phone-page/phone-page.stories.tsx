import React from 'react';
import { PhonePage, PhonePageProps } from './phone-page';
import { PhoneTypeEnum } from '@cellebrite/data';

export default {
  component: PhonePage,
  title: 'PhonePage',
};

const onSubmit = (data) => console.log(data);

export const add = () => {
  /* eslint-disable-next-line */
  const props: PhonePageProps = {
    view: 'add',
    onSubmit,
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
  };

  return <PhonePage {...props} />;
};
