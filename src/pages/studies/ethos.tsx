import React from "react";

import Head from "next/head";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Background from "../../components/UsabilityTesting/ethos/Background";
import Conclusion from "../../components/UsabilityTesting/ethos/Conclusion";
import Header from "../../components/UsabilityTesting/ethos/Header";
import Process from "../../components/UsabilityTesting/ethos/Process";

export default function EthosUsabilityTesting() {
  return (
    <>
      <Head>
        <title>Introducing Usability Testing to Ethos | Andrew Chough</title>
        <link rel="icon" href="/images/logo.ico" />
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
