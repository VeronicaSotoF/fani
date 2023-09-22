import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Fani",
  description: "Content and news about Fani and aliens",
  keywords: "fani, ufo, ovni, alien, extraterrestre, martian, close encounter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} body-container`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
