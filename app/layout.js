import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Laxmi Chit Fund - A website for fundings",
  description: "25 din me paisa double",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-[86vh] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
