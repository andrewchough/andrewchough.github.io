import React from "react";

export default function About() {
  return (
    <div className="text-gray-300 font-light py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 flex justify-start md:justify-between">
          <h2 className="text-2xl font-semibold tracking-widest text-white uppercase">
            About
          </h2>
          <div className="md:w-1 bg-gray-600" />
        </div>
        <div className="md:col-span-8 space-y-6">
          <p>
            Hi! My name is Andrew Chough and I&apos;m a founding frontend
            engineer at Chariot, currently residing in New York City.
          </p>
          <p className="border-y-2 border-gray-300 py-4">
            Full-time <b className="text-white">designer & engineer</b>.
            Aspiring <b className="text-white">life-liver</b>. Professional{" "}
            <b className="text-white">layup misser</b>. Beach{" "}
            <b className="text-white">lover</b>.
          </p>
          <p>
            From a young age, I always found a fascination with computers,
            starting as young as four years old where I spent time everyday to
            self-teach myself through Reader Rabbit on the PC. Since then,
            I&apos;ve been fortunate enough to have the chance to study a wide
            variety of topics about computers and gain more knowledge and
            experience in the technology space. Moving forward, I&apos;d like to
            gain more experience learning wherever I can.
          </p>
          <p>
            I was born and raised in the Bay Area, went to college in the Boston
            area, and am now residing in the Big Apple. Over the years,
            I&apos;ve become infatuated with music - ranging from hip-hop to
            jazz. I&apos;ve been playing the saxophone for more than twelve
            years, participating in bands such as the Wind Ensemble in high
            school to the Boston College Marching Band during my time at BC.
          </p>
          <p>
            My hobbies outside of the office include{" "}
            <a
              href="https://instagram.com/joonofthejungle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              powerlifting
            </a>
            , attempting to solve (and failing) the NYT crossword, finding the
            best cold brew in the city, and AAPI advocacy/intersectional
            movements. At Adobe, I was involved with the Diversity and Inclusion
            council and was also a lead of the Asian and Pacific Islander @
            Adobe network in the New York sites. A big passion of mine is
            helping the tech field more inclusive and would love to get more
            involved in any opportunities that support that cause.
          </p>
        </div>
      </div>
    </div>
  );
}
