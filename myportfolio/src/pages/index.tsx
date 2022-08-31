import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Techs from "../components/Techs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Leonardo Marchioro</title>
      </Head>
      <Header />
      <main>
        <Techs />
        <Projects />
        <ContactForm />
      </main>
    </>
  );
};

export default Home;
