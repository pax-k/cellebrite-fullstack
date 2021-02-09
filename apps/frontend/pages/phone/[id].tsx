import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { PhonePage, PhonePageProps } from '@cellebrite/ui';
import { IPhone, IToastData } from '@cellebrite/data';

/* eslint-disable-next-line */
export interface PhoneProps {
  data: IPhone | undefined;
}

export function Phone({ data }: PhoneProps) {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState<IToastData>({
    message: '',
    severity: undefined,
  });
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const onSubmit = async (data) => {
    const { id, ...payload } = data;
    const res = await axios.patch(
      `http://localhost:4200/api/v1/phones/${id}`,
      payload
    );
    refreshData();
    setShowToast(true);
    if (res.status === 200) {
      setToastData({ message: 'Successfully updated', severity: 'success' });
    } else {
      setToastData({ message: 'Error', severity: 'error' });
    }
  };
  return (
    <div>
      <PhonePage
        view="edit"
        data={data}
        onSubmit={onSubmit}
        showToast={showToast}
        toastData={toastData}
      />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:4200/api/v1/phones/${params.id}`);
  const data = await res.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: { data } };
}
export default Phone;
