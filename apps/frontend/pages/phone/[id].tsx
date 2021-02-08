import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PhoneProps {}

const StyledPhone = styled.div`
  color: pink;
`;

export function Phone(props: PhoneProps) {
  return (
    <StyledPhone>
      <h1>Welcome to phone!</h1>
    </StyledPhone>
  );
}

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts');
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => `/posts/${post.id}`);

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`https://.../posts/${params.id}`);
//   const post = await res.json();

//   // Pass post data to the page via props
//   return { props: { post } };
// }

// // This gets called on every request
// export async function getServerSideProps({ params }) {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   // Pass data to the page via props
//   return { props: { data } };
// }

export default Phone;
