import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function article({ article }) {
  //   const router = useRouter(); //takes any param in rotuer so we destructure it
  //   const { id } = router.query;
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

// ssr here
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// ssg here
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => {
    return article.id;
  });
  const paths = ids.map((id) => {
    return { params: { id: id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export default article;
