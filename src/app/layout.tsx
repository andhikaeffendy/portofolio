import "@/styles/globals.css";
import { Inter } from "next/font/google"; // ✅

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portofolio Saya",
  description: "Dibuat dengan Next.js dan Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
