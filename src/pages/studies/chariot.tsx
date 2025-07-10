import React from "react";

import Head from "next/head";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Background from "../../components/UsabilityTesting/chariot/Background";
import Conclusion from "../../components/UsabilityTesting/chariot/Conclusion";
import Header from "../../components/UsabilityTesting/chariot/Header";
import Process from "../../components/UsabilityTesting/chariot/Process";

export default function EthosUsabilityTesting() {
  return (
    <>
      <Head>
        <title>
          Streamlining Nonprofit Donation Processing | Andrew Chough
        </title>
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
