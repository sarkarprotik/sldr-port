import React from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import Head from "next/head";

function App({ Component, pageProps }) {
  const router = useRouter();

  let url = 'https://cmsbackend.herokuapp.com/articles/1'

  // Simple POST request with a JSON body using fetch
  const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
  };

  async function callData () {
    const res = await fetch(url)
    const posts = await res.json()
    console.log(posts)
  }
  callData()


  return (
    <Provider slug={router.route}>
      <Head>
        <title>
          Fullpage Javascript Navigation HOC with React Awesome Slider
        </title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Fullpage navigation HOC with 3D animated transitions built on top of React Awesome Slider. GatsbyJS and NextJS recipes available."
        />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
