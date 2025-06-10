/* eslint-disable react/prop-types */
import React from "react";

import { MantineProvider } from "@mantine/core";

import "../styles/globals.css";
import "../../public/app.css";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        fontFamily: "Roboto, Open Sans, sans serif",
        fontSizes: { xl: 40 },
        breakpoints: {
          xs: 300,
          sm: 600,
          md: 768,
          lg: 992,
          xl: 1200,
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
