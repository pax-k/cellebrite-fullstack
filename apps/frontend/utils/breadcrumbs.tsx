import React, { useEffect, useState } from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';
import { useRouter } from 'next/router';

const convertBreadcrumb = (str) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const NextBreadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs.length) {
    return null;
  }

  console.log(breadcrumbs);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        color="inherit"
        href="/"
        onClick={() => {
          router.push('/');
        }}
      >
        Home
      </Link>
      {breadcrumbs.map((b) => {
        return (
          <Link
            color="inherit"
            href={b.href}
            onClick={() => {
              router.push(b.href);
            }}
          >
            {convertBreadcrumb(b.breadcrumb)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
