/* eslint-disable react/display-name */
import React from 'react'
import { Helmet } from 'react-helmet'
import '../../static/app.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function () {
  const [darkTheme, setDarkTheme] = React.useState(getDefaultTheme())

  React.useEffect(() => {
    window.localStorage.setItem('dark', JSON.stringify(darkTheme))
  }, [darkTheme])

  function getDefaultTheme () {
    const selectedTheme = JSON.parse(window.localStorage.getItem('dark'))
    return selectedTheme || false
  }

  return (
    <div className={darkTheme ? 'container block__container--dark' : 'container block__container--light'}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Andrew Chough's Portfolio, describing himself, his passions, and what he's worked on." />
        <title>Andrew Chough&apos;s Portfolio</title>
        <html lang="en" />
      </Helmet>
      <Navbar onThemeChange={setDarkTheme} theme={darkTheme} />
      <Hero picLink="../../static/images/me.png" theme={darkTheme} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
