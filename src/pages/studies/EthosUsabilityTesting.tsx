import React from "react";

import Head from "next/head";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Background from "../../components/UsabilityTesting/Background";
import Conclusion from "../../components/UsabilityTesting/Conclusion";
import Header from "../../components/UsabilityTesting/Header";
import Process from "../../components/UsabilityTesting/Process";

export default function EthosUsabilityTesting() {
  return (
    <>
      <Head>
        <title>Introducing Usability Testing to Ethos | Andrew Chough</title>
        <link rel="icon" href="/images/logo.ico"></link>
      </Head>
      <Navbar />
      <Header />
      <Background />
      <Process />
      <Conclusion />
      <Footer />
    </>
  );
}
