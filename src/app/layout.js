import "./globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata = {
  title: "Flowers",
  description: "Flowers description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
