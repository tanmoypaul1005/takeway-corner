import Image from "next/image";
import React from "react";
import { iLogo } from "../../../util/imageImports";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-white bg-teal-800">
      <div className="common-class">
        <div className="flex flex-wrap justify-between">
          <div className="w-full mb-6 md:w-1/5 md:mb-0">
            <div className="">
              <Image style={{maxWidth:200 ,minWidth:200, maxHeight:50, minHeight:50}} src={iLogo} alt="BRIX" className="responsiveImage" />
            </div>
            <p className="mt-2">
              &copy; 2022 BRIX Templates All Rights Reserved
            </p>
          </div>
          <div className="w-full mb-6 sm:w-1/2 md:w-1/5 md:mb-0">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Updates
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full mb-6 sm:w-1/2 md:w-1/5 md:mb-0">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Culture
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full mb-6 sm:w-1/2 md:w-1/5 md:mb-0">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Getting started
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Server status
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Report a bug
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chat support
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full mb-6 sm:w-1/2 md:w-1/5 md:mb-0">
            <h3 className="text-lg font-semibold">Follow us</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="flex items-center hover:underline">
                  <img
                    src="facebook-icon.svg"
                    alt="Facebook"
                    className="w-4 h-4 mr-2"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline">
                  <img
                    src="twitter-icon.svg"
                    alt="Twitter"
                    className="w-4 h-4 mr-2"
                  />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline">
                  <img
                    src="instagram-icon.svg"
                    alt="Instagram"
                    className="w-4 h-4 mr-2"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline">
                  <img
                    src="linkedin-icon.svg"
                    alt="LinkedIn"
                    className="w-4 h-4 mr-2"
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline">
                  <img
                    src="youtube-icon.svg"
                    alt="YouTube"
                    className="w-4 h-4 mr-2"
                  />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
