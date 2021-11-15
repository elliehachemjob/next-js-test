import Head from "next/head"; //for seo
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>title</title>
        <meta name="keywords" content="website, home,programming" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

//fetch from our created endpoint them retrun them as props for component to use
export const getStaticProps = async () => {
  //normal fetch data
  const res = await fetch("/api/articles");
  const articles = await res.json();

  //return data as props
  return {
    props: {
      articles,
    },
  };
};

// //fetch them retrun them as props for component to use
// export const getStaticProps = async () => {
//   //normal fetch data
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );
//   const articles = await res.json();

//   //return data as props
//   return {
//     props: {
//       articles,
//     },
//   };
// };
