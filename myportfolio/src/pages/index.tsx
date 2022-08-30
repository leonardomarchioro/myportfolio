import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dev Leonardo</title>
      </Head>
      <Header />
      <main>{/* <ContactForm /> */}</main>
    </div>
  );
};

export default Home;
