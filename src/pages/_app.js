
import React from "react"
// eslint-disable-next-line no-restricted-imports
import "../../public/app.css"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

export default function App() {
  return (
    <div className={"container block__container--light"}>
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
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
