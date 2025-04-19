import profilePic from "@/public/images/profile.jpeg"; // Import gambar

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-start bg-cover bg-center px-6 md:pl-0"
      style={{
        backgroundImage: `url(${profilePic.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-start mt-12 pl-6 w-full md:w-2/3">
        <h1 className="text-white text-5xl font-bold mb-4">Andhika Effendy</h1>

        <div className="text-white text-xl flex items-center gap-2">
          <span>I&apos;m</span>
          <span className="animate-type-loop">Developer</span>
        </div>
      </div>
    </section>
  );
}
