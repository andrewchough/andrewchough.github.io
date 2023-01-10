import React from "react";

import { MantineProvider } from "@mantine/core";

import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

// eslint-disable-next-line no-restricted-imports, sort-imports
import "../../public/app.css";

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        fontFamily: "Roboto, Open Sans, sans serif",
        fontSizes: { xl: 40 }
      }}
    >
      {/* <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Andrew Chough's Portfolio, describing himself, his passions, and what he's worked on." />
        <title>Andrew Chough&apos;s Portfolio</title>
        <html lang="en" />
      </Helmet> */}
      <Navbar />
      <Hero picLink="../../static/images/me.png" />
      <About />
      <Experience />
      <Footer />
    </MantineProvider>
  );
}
