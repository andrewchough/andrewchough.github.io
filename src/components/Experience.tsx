import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "MINDFORT",
      date: "(August '25 - Present)",
      title: "Founding Frontend Engineer",
      location: "Los Angeles, CA",
      align: "end",
    },
    {
      company: "CHARIOT",
      date: "(Nov '23 - Aug '25)",
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
    <div className="py-12 font-light text-gray-300 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="flex justify-start md:col-span-4 md:justify-between">
          <h2 className="text-2xl font-semibold tracking-widest text-white uppercase">
            Experience
          </h2>
          <div className="bg-gray-600 md:w-1" />
        </div>
        <div className="space-y-12 md:col-span-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                exp.align === "end"
                  ? "text-left md:items-end md:text-right"
                  : "items-start"
              }`}
            >
              <h3 className="text-xl font-bold tracking-wider text-white uppercase">
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
