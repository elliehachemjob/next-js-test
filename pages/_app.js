import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //this page render all component along with pageprops
  return (
    <Layout>
      {/* render custom things here if needed for each page*/}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
