import Head from "next/head";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Andrew Chough&apos;s Portfolio</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Andrew Chough's Portfolio, describing himself, his passions, and what he's worked on."
        />
        <link rel="icon" href="/public/images/logo.ico"></link>
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
