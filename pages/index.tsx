import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
// lib
import { client } from "../lib/sanity";

const Home: NextPage = (props: any) => {
  // console.log(props.data);
  return (
    <div>
      <Head>
        <title>Apple Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {/* <Header /> */}
        {/* <div className="container mx-auto"> */}
        <div className="">
          <Landing />
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.fetch(`*[_type == "products"]`);
  return {
    props: {
      data,
    },
  };
};
