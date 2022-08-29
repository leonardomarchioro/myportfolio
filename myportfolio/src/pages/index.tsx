import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dev Leonardo</title>
      </Head>

      <main>
        <ContactForm />
      </main>
    </div>
  );
};

export default Home;
