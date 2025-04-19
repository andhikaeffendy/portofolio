"use client";

import { useState, useEffect } from "react";
import {
  FaHome,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
  FaBriefcase,
} from "react-icons/fa";
import { BsFillPersonFill, BsFillEnvelopeFill } from "react-icons/bs";
import { PiNoteBold } from "react-icons/pi";
import NavItem from "./shared/NavItem";
import Image from "next/image";
import profilePic from "/public/profile.jpeg"; // Import gambar

const sectionIds = ["hero", "about", "skills", "resume", "project", "contact"];

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "hero";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = id;
          }
        }
      });

      setActiveMenu(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveMenu(id);
    }
  };

  return (
    <aside className="bg-gray-900 text-white w-64 h-screen fixed top-0 left-0 overflow-y-auto hidden md:flex flex-col items-center py-8 px-4 z-50 transition-all duration-300 ease-in-out">
      <Image
        src={profilePic}
        alt="Profile"
        width={128}
        height={128}
        className="object-cover rounded-full border-4 border-gray-600 w-32 h-32 mb-6"
        priority
      />

      <h2 className="text-xl font-bold mb-2">Andhika Effendy</h2>
      <div className="flex gap-3 mb-6">
        <FaTwitter />
        <FaFacebookF />
        <FaInstagram />
        <FaSkype />
        <FaLinkedinIn />
      </div>
      <nav className="flex flex-col gap-4 text-sm w-full">
        <NavItem
          icon={<FaHome />}
          label="Home"
          id="hero"
          active={activeMenu === "hero"}
          onClick={() => handleNavClick("hero")}
        />
        <NavItem
          icon={<BsFillPersonFill />}
          label="About Me"
          id="about"
          active={activeMenu === "about"}
          onClick={() => handleNavClick("about")}
        />
        <NavItem
          icon={<FaHome />}
          label="Skills"
          id="skills"
          active={activeMenu === "skills"}
          onClick={() => handleNavClick("skills")}
        />
        <NavItem
          icon={<PiNoteBold />}
          label="Resume"
          id="resume"
          active={activeMenu === "resume"}
          onClick={() => handleNavClick("resume")}
        />
        <NavItem
          icon={<FaBriefcase />}
          label="Project"
          id="project"
          active={activeMenu === "project"}
          onClick={() => handleNavClick("project")}
        />
        <NavItem
          icon={<BsFillEnvelopeFill />}
          label="Contact Me"
          id="contact"
          active={activeMenu === "contact"}
          onClick={() => handleNavClick("contact")}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
