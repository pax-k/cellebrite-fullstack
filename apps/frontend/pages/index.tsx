import React from 'react';
import { useRouter } from 'next/router';
import { IndexPage, IndexPageProps } from '@cellebrite/ui';
import { PhoneTypeEnum } from '@cellebrite/data';

export function Index({ rows }) {
  const router = useRouter();
  const onRowAdd = () => router.push('/phone/new');
  const onRowEdit = (row) => {
    const { id } = row;
    router.push(`/phone/${id}`);
  };
  const onRowsDelete = (rows) => {
    console.log(rows);
  };
  return (
    <IndexPage
      rows={rows}
      onAddRow={onRowAdd}
      onRowEdit={onRowEdit}
      onRowsDelete={onRowsDelete}
    />
  );
}

export async function getServerSideProps() {
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  const rows = [
    {
      id: '1',
      type: PhoneTypeEnum.Apple,
      color: 'Jon',
      serial: '123',
      metadata: { test: 1 },
    },
    {
      id: '2',
      type: PhoneTypeEnum.Samsung,
      color: 'Jon',
      serial: '123',
      metadata: { test: 1 },
    },
  ];
  return { props: { rows } };
}

export default Index;
