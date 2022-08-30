import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dev Leonardo</title>
      </Head>
      <Header />
      <main>
        <ContactForm />
      </main>
    </>
  );
};

export default Home;
