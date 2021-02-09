import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { IndexPage, IndexPageProps } from '@cellebrite/ui';
import { IToastData } from '@cellebrite/data';
import axios from 'axios';

export function Index({ rows }) {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState<IToastData>({
    message: '',
    severity: undefined,
  });
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const onRowAdd = () => router.push('/phone/new');
  const onRowEdit = (row) => {
    const { id } = row;
    router.push(`/phone/${id}`);
  };
  const onRowsDelete = async (rows) => {
    const ids = rows.map((row) => row.id);
    console.log(ids);
    const res = await axios.delete('http://localhost:4200/api/v1/phones', {
      data: { ids },
    });
    refreshData();
    setShowToast(true);
    if (res.status === 200) {
      setToastData({ message: 'Successfully deleted', severity: 'success' });
    } else {
      setToastData({ message: 'Error', severity: 'error' });
    }
  };
  return (
    <IndexPage
      rows={rows}
      onAddRow={onRowAdd}
      onRowEdit={onRowEdit}
      onRowsDelete={onRowsDelete}
      showToast={showToast}
      toastData={toastData}
    />
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4200/api/v1/phones`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: { rows: data.items } };
}

export default Index;
