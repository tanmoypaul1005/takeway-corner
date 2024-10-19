  import { Inter } from "next/font/google";
  import "./globals.css";
  import Header from "./components/header/Header";
  import React, { ReactNode } from "react";
import Footer from "./components/footer/footer";

  const inter = Inter({ subsets: ["latin"] });

  export const metadata = {
    title: "Takeaway corner",
    description: "Food delivery app",
    icon: "/logo.png", // Assuming your logo is located at public/logo.png
  };

  interface RootLayoutProps {
    children: ReactNode;
  }

  const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="common-class">
          <div className="mt-5 mb-16">
            <Header />
          </div>
          {children}
          </div>
          <Footer/>
        </body>
      </html>
    );
  };

  export default RootLayout;