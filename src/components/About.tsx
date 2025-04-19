import Image from "next/image";
import MotionSection from "./shared/MotionSection";
import profilePic from "@/public/images/profile.jpeg"; // Import gambar

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <MotionSection>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">About</h2>
          <div className="w-20 h-1 bg-blue-500 mb-8" />

          <p className="text-gray-700 mb-12">
            I am a Mobile and Web Developer with over 3 years of hands-on
            experience in developing innovative and scalable solutions. My
            expertise includes Flutter for cross-platform mobile development and
            web development with technologies such as Next.js. I am passionate
            about learning and implementing the latest technologies to create
            high-quality applications.
          </p>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Profile Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <Image
                src={profilePic}
                alt="Profile Picture"
                width={400}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>

            {/* Profile Content */}
            <div className="w-full lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mobile And Web Developer
              </h3>

              <p className="italic text-gray-600 mb-6">
                I am driven by a deep passion for technology and a commitment to
                delivering high-performance applications. With a solid
                foundation in both mobile and web development, I focus on
                creating user-centric solutions that align with business goals.
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-800 mb-8">
                <div className="flex gap-2">
                  <span className="font-semibold w-24">Birthday:</span>
                  <span>14 August 1997</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-24">Age:</span>
                  <span>28</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-24">Website:</span>
                  <span>www.andhikaeffendy.dev</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-24">Degree:</span>
                  <span>S1 - Computer Science</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-24">Phone:</span>
                  <span>+6282 19811 3362</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-24">Email:</span>
                  <span>andhikaeffendy14@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-24">City:</span>
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-24">Freelance:</span>
                  <span>Available</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                I have a strong interest in solving complex problems and
                continuously enhancing my skills. Whether it&apos;s working on
                challenging projects, exploring new frameworks, or optimizing
                performance, I am dedicated to delivering results that exceed
                expectations. Let&apos;s build something great together!
              </p>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
