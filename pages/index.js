import Head from "next/head"; //for seo

export default function Home() {
  return (
    <div>
      <Head>
        <title>title</title>
        <meta name="keywords" content="website, home,programming" />
      </Head>
      <h1>welcome to next</h1>
    </div>
  );
}
