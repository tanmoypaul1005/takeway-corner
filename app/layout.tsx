import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import React, { ReactNode } from "react";
import Footer from "./components/footer/footer";
import { Slide, ToastContainer } from "react-toastify";

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
      <body className="overflow-hidden">
        <ToastContainer
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
          theme="dark"
          limit={2}
        />
        <div className="fixed top-0 left-0 right-0 z-50 py-3">
          <Header />
        </div>
        <div className="h-screen pt-12 mt-[70px] overflow-y-auto border-t">
          <div className="w-full common-class">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
