import MotionSection from "./shared/MotionSection";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-white text-center">
      <MotionSection>
        <p>&copy; {new Date().getFullYear()} Andhika. All rights reserved.</p>
      </MotionSection>
    </footer>
  );
}
