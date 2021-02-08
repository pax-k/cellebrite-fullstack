import React from 'react';
import { PhonePage, PhonePageProps } from '@cellebrite/ui';

/* eslint-disable-next-line */
export interface PhoneProps {}

export function PhoneNew(props: PhoneProps) {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <PhonePage view="add" onSubmit={onSubmit} />
    </div>
  );
}

export default PhoneNew;
