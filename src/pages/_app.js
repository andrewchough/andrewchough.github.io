import React from "react";

import { MantineProvider } from "@mantine/core";

import Homepage from "./index";

// eslint-disable-next-line no-restricted-imports, sort-imports
import "../../public/app.css";

export default function App({ Component, pageProps }) {
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
      <Component {...pageProps}/>
    </MantineProvider>
  );
}
