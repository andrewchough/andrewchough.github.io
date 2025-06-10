import React from "react";

import Head from "next/head";

import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Andrew Chough</title>
        <link rel="icon" href="/images/logo.ico"></link>
      </Head>
      <Navbar />
      <About />
      <Experience />
      <Footer />
    </>
  );
}
