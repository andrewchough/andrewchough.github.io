import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "CHARIOT",
      date: "(Nov '23 - Present)",
      title: "Founding Frontend Engineer",
      location: "New York, NY",
      align: "start",
    },
    {
      company: "ADOBE",
      date: "(Jan '22 - Nov '23)",
      title: "Software Development Engineer",
      location: "New York, NY",
      align: "end",
    },
    {
      company: "ADOBE",
      date: "(Aug '19 - Jan '22)",
      title: "Platform Software Engineer",
      location: "New York, NY",
      align: "start",
    },
    {
      company: "ADOBE",
      date: "(May '18 - Aug '18)",
      title: "Web Development Intern",
      location: "New York, NY",
      align: "end",
    },
    {
      company: "BOSTON COLLEGE",
      date: "(Aug '15 - May '19)",
      title: "Bachelor of Science, Computer Science",
      location: "Chestnut Hill, MA",
      align: "start",
    },
  ];

  return (
    <div className="text-gray-300 font-light py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 flex justify-start md:justify-between">
          <h2 className="text-2xl font-semibold tracking-widest text-white uppercase">
            Experience
          </h2>
          <div className="md:w-1 bg-gray-600" />
        </div>
        <div className="md:col-span-8 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                exp.align === "end"
                  ? "md:items-end text-left md:text-right"
                  : "items-start"
              }`}
            >
              <h3 className="text-xl font-bold text-white tracking-wider uppercase">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="text-white">{exp.title}</p>
              <p>{exp.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
