"use client";

import { useState } from "react";
import MotionSection from "./shared/MotionSection";
import Image, { StaticImageData } from "next/image";
import anakSehat from "@/public/images/anak_sehat.png";
import belahDoeren from "@/public/images/belah_doeren.png";
import f1Approval from "@/public/images/f1_approval.png";
import bumdes from "@/public/images/bumdes.png";
import lapangBola from "@/public/images/lapang_bola.png";
import ngelesin from "@/public/images/ngelesin.png";
import companyProfile from "@/public/images/company_profile.png";

type Project = {
  id: number;
  title: string;
  category: "web" | "mobile";
  description: string;
  technologies: string;
  image: StaticImageData;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Anak Sehat",
    category: "mobile",
    description: "Casual Game for Android devices",
    technologies: "Unity, C#",
    image: anakSehat,
  },
  {
    id: 2,
    title: "Belah Doeren",
    category: "mobile",
    description: "E-commerce app for fruit delivery",
    technologies: "Flutter, Dart, Firebase",
    image: belahDoeren,
  },
  {
    id: 3,
    title: "F1 Approval",
    category: "mobile",
    description: "Approval system for Documents and Requests",
    technologies: "Flutter, Dart",
    image: f1Approval,
  },
  {
    id: 4,
    title: "Bumdes",
    category: "mobile",
    description: "Application for Village-Owned Enterprises",
    technologies: "Flutter, Dart",
    image: bumdes,
  },
  {
    id: 5,
    title: "Lapang Bola",
    category: "mobile",
    description: "Monitoring system for football fields",
    technologies: "Flutter, Dart",
    image: lapangBola,
  },
  {
    id: 6,
    title: "Ngelesin",
    category: "mobile",
    description: "Application for online learning and tutoring",
    technologies: "Flutter, Kotlin, Firebase",
    image: ngelesin,
  },
  {
    id: 7,
    title: "Company Profile",
    category: "web",
    description: "Company profile website for a local business",
    technologies: "Html, CSS, JavaScript, Laravel",
    image: companyProfile,
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "mobile">("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section
      id="portfolio"
      className="py-20 px-4 md:px-10 lg:px-20 bg-[#f1f5f8]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <MotionSection>
          <div className="mb-16">
            <h2 className="text-4xl text-left font-bold text-gray-900 mb-2">
              Portofolio
            </h2>
            <div className="w-20 h-1 bg-blue-500 mb-6" />
            <p className="text-gray-600 max-w-2xl">
              Here are some of my recent projects. Click on each project to
              learn more about the technologies used and the development
              process.
            </p>
          </div>
        </MotionSection>

        {/* Filter Tabs */}
        <MotionSection delay={0.1}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              {["all", "web", "mobile"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "all" | "web" | "mobile")}
                  className={`px-6 py-2 text-sm font-medium ${
                    tab === "all"
                      ? "rounded-l-lg"
                      : tab === "mobile"
                      ? "rounded-r-lg"
                      : ""
                  } ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <MotionSection key={project.id} delay={0.2 + index * 0.1}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full flex flex-col">
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mt-auto">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {project.category.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.technologies}
                    </span>
                  </div>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
