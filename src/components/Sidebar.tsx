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
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BsFillPersonFill, BsFillEnvelopeFill } from "react-icons/bs";
import { PiNoteBold } from "react-icons/pi";
import NavItem from "./shared/NavItem";
import profilePic from "/public/profile.jpeg";
import Image from "next/image";

const sectionIds = ["hero", "about", "skills", "resume", "project", "contact"];

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string>("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
      setIsMobileOpen(false); // close on click (mobile)
    }
  };

  const navContent = (
    <>
      <Image
        src={profilePic}
        alt="Profile"
        width={128}
        height={128}
        className="object-cover rounded-full border-4 border-gray-600 w-32 h-32 mb-6"
        priority
      />
      <h2 className="text-xl font-bold mb-2 text-center">Andhika Effendy</h2>
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
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-gray-900 text-white flex-col items-center py-8 px-4 z-50 shadow-lg">
        {navContent}
      </aside>

      {/* Mobile Sidebar Toggle Button */}
      <div className="fixed top-4 left-4 md:hidden z-[60]">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-2 rounded bg-gray-900 text-white shadow"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[59]"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col items-center py-8 px-4 z-[60] transition-transform duration-300 transform ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsMobileOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        {navContent}
      </aside>
    </>
  );
};

export default Sidebar;
