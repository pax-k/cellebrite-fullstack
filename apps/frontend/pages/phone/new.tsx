import React, { useState } from 'react';
import axios from 'axios';
import { PhonePage, PhonePageProps } from '@cellebrite/ui';
import { IToastData } from '@cellebrite/data';

/* eslint-disable-next-line */
export interface PhoneProps {}

export function PhoneNew(props: PhoneProps) {
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState<IToastData>({
    message: '',
    severity: undefined,
  });
  const onSubmit = async (data) => {
    const res = await axios.post(`http://localhost:4200/api/v1/phones`, data);
    setShowToast(true);
    if (res.status === 201) {
      setToastData({ message: 'Successfully saved', severity: 'success' });
      return true;
    } else {
      setToastData({ message: 'Error', severity: 'error' });
      return false;
    }
  };
  return (
    <div>
      <PhonePage
        view="add"
        onSubmit={onSubmit}
        showToast={showToast}
        toastData={toastData}
        data={undefined}
      />
    </div>
  );
}

export default PhoneNew;
