import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import React, { ReactNode } from "react";
import Footer from "./components/footer/footer";
import { Slide, ToastContainer } from "react-toastify";
import CustomLayout from "./components/layout/CustomLayout";

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
      <body className="">
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
        <CustomLayout>
          <>
          {children}
          </>
        </CustomLayout>
      </body>
    </html>
  );
};

export default RootLayout;
