"use client";

import { useEffect, useRef } from "react";

export default function ResumeSection() {
  const resumeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(
        window.location.hash.replace("#", "")
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // to handle case when page loads with hash

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section
      id="resume"
      ref={resumeRef}
      className="py-16 px-6 md:px-8 lg:px-16 bg-white text-gray-900 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Professional Experience" />

        <div className="flex flex-col md:flex-row gap-12">
          <ResumeColumn title="Education" items={educationData} isEducation />
          <ResumeColumn title="Work History" items={experienceData} />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
      <div className="w-20 h-1 bg-blue-500 mb-12" />
    </>
  );
}

function ResumeColumn({
  title,
  items,
  isEducation = false,
}: {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  isEducation?: boolean;
}) {
  return (
    <div className={isEducation ? "w-full md:w-1/3" : "w-full md:w-2/3"}>
      <div className="bg-white border-l-4 border-blue-500 pl-6 pr-4 py-6 shadow-md rounded-xl">
        <h3 className="text-2xl font-semibold text-blue-600 mb-8">{title}</h3>
        <div className="space-y-8">
          {items.map((item, index) =>
            isEducation ? (
              <EducationItem key={index} {...item} />
            ) : (
              <ExperienceItem key={index} {...item} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

function EducationItem({
  year,
  degree,
  major,
  institution,
}: {
  year: string;
  degree: string;
  major: string;
  institution: string;
}) {
  return (
    <div className="relative pl-6 border-l-2 border-blue-300">
      <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-600 border-2 border-white rounded-full shadow-sm" />
      <p className="text-sm text-gray-500 font-medium">{year}</p>
      <h4 className="text-lg font-bold text-gray-800 mt-1">{degree}</h4>
      <p className="text-gray-700 font-medium">{major}</p>
      <p className="text-gray-500 text-sm italic">{institution}</p>
    </div>
  );
}

function ExperienceItem({
  year,
  company,
  client,
  position,
  bullets,
}: {
  year: string;
  company: string;
  client?: string;
  position: string;
  bullets: string[];
}) {
  return (
    <div className="relative pl-6 border-l-2 border-blue-300">
      <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-600 border-2 border-white rounded-full shadow-sm" />
      <p className="text-sm text-gray-500 font-medium">{year}</p>
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 mt-1">
        <h4 className="text-lg font-bold text-gray-800">{company}</h4>
        {client && <span className="text-gray-600 text-sm">({client})</span>}
      </div>
      <p className="text-gray-600 font-medium mb-2">{position}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm pl-1">
        {bullets.map((bullet, i) => (
          <li key={i} className="leading-snug">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

const educationData = [
  {
    year: "2018 - 2020",
    degree: "Bachelor's Degree",
    major: "Computer & Network Engineering",
    institution: "Telkom University",
  },
  {
    year: "2015 - 2018",
    degree: "Associate's Degree",
    major: "Information Technology",
    institution: "Telkom University",
  },
];

const experienceData = [
  {
    year: "Jun 2022 - Present",
    company: "PT Avows Technologies",
    client: "Bank Raya Indonesia",
    position: "Flutter Developer",
    bullets: [
      "Implement UI/UX designs to applications",
      "Develop and integrate RESTful APIs",
      "Web development using Next.js framework",
      "Comprehensive technical documentation",
      "Third-party library integration and customization",
      "Implement Web-to-App and App-to-Web communication",
      "Version control using Git (branching, merging, tagging)",
      "Architect scalable solutions using DDD and MVVM patterns",
      "Lead Agile Scrum ceremonies (Planning, Reviews, Retrospectives)",
      "Client requirement analysis for financial applications",
    ],
  },
  {
    year: "Dec 2021 - Jun 2022",
    company: "PT Phincon",
    client: "Cimb Niaga",
    position: "Flutter Developer",
    bullets: [
      "Cross-platform mobile development (Android/iOS)",
      "Flutter package development and maintenance",
      "Full application development lifecycle",
      "System integration testing (SIT) and user acceptance testing (UAT)",
      "Technical documentation and reporting",
    ],
  },
  {
    year: "Sep 2020 - Nov 2021",
    company: "PT Wiradipa Nusantara",
    position: "IT Programmer",
    bullets: [
      "Requirement analysis and technical specifications",
      "API consumption and integration",
      "Android development using Kotlin",
      "System testing and Play Store deployment",
      "UI implementation from design mockups",
      "Continuous system improvement and optimization",
    ],
  },
  {
    year: "Aug 2018 - Aug 2020",
    company: "PT Wiradipa Nusantara",
    position: "Part-time Programmer",
    bullets: [
      "Mobile game development",
      "Android application development",
      "Client requirement analysis",
      "Testing and quality assurance",
      "App deployment to Play Store",
    ],
  },
];
