/* eslint-disable react/prop-types */
import React from "react";

import "../styles/globals.css";
import "../../public/app.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
