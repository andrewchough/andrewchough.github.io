import React from 'react'
import Fade from 'react-reveal/Fade'

export default function About () {
  return (
    <div className="grid md:grid-cols-8 items-center">
      {/* Mobile title */}
      <div className="md:col-span-2 block__header md:py-10 pb-0 pt-8 md:hidden">
        <h2 className="text-4xl font-semibold block__title">ABOUT</h2>
      </div>
      {/* Desktop title */}
      <div className="md:col-span-2 block__header md:py-10 pb-4 md-max:hidden">
        <h2 className="text-4xl font-semibold block__title block__title--right">ABOUT</h2>
      </div>
      <div className="md:col-span-6 p-12 lg:px-24 lg:py-20">
        <Fade>
          <p className="font-light text-center sm-max:text-sm text-black wow"><b>Hi! </b>
            My name is Andrew Chough and I&apos;m a software engineer at Adobe, currently residing in New York City.
          </p>
          <hr className="about__line" />
        </Fade>
        <Fade>
          <p className="font-light text-center sm-max:text-sm text-black">
            Full-time <b>designer &amp; engineer</b>. Aspiring <b>life-liver</b>. Professional <b>layup misser</b>. Beach <b>lover</b>.
          </p>
          <hr className="about__line" />
        </Fade>
        <Fade left>
          <p className="font-light text-center sm-max:text-sm pb-8 text-black">
            From a young age, I always found a fascination with computers, starting as young as
            four years old where I spent time everyday to self-teach myself through Reader Rabbit on
            the PC. Since then, I&apos;ve been fortunate enough to have the chance to study a wide variety
            of topics about computers and gain more knowledge and experience in the technology space.
            Moving forward, I&apos;d like to gain more experience learning wherever I can.
          </p>
        </Fade>
        <Fade right duration={1375}>
          <p className="font-light text-center sm-max:text-sm pb-8 text-black">
            I was born and raised in the Bay Area for most of my life, went to college in the Boston area,
            and am now residing in the Big Apple. Over the years, I&apos;ve become infatuated with music - ranging
            from hip-hop to jazz. I&apos;ve been playing the saxophone for more than twelve years, participating
            in bands such as the Wind Ensemble in high school to the Boston College Marching Band during my time at BC.
          </p>
        </Fade>
        <Fade left duration={1750}>
          <p className="font-light text-center sm-max:text-sm text-black">
            My hobbies outside of the office include powerlifting, basketball, sudoku, finding the best cold brew in the
            city, and AAPI advocacy and intersectional movements. At Adobe, I am involved with the Diversity and Inclusion
            council and am also a lead of the Asian Employee Network in the New York sites. A big passion of mine is helping
            the tech field more inclusive and would love to get more involved in any opportunities that support that cause.
          </p>
        </Fade>
      </div>
    </div>
  )
}
