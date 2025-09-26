import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <footer className="footer sm:footer-horizontal p-10 mt-11  md:grid md:grid-cols-10 ">
        <nav className="md:col-span-2">
          <p>CS-Ticket System</p>
          <p className="md:pr-9 text-gray-400">
             Your dedicated platform for tracking, managing, and resolving customer 
            issues efficiently. We streamline support to ensure every ticket is 
            handled with speed and precision, enhancing customer satisfaction.
          </p>
        </nav>

        <nav className="md:col-span-2">
          <h6 className=" text-white">Company</h6>
          <a className="link link-hover text-gray-400">About Us</a>
          <a className="link link-hover text-gray-400">Our Mission</a>
          <a className="link link-hover text-gray-400">Contact Saled</a>
        </nav>

        <nav className="md:col-span-2">
          <h6 className="text-white">Services</h6>
          <a className="link link-hover text-gray-400">Products & Services</a>
          <a className="link link-hover text-gray-400">Customer Stories</a>
          <a className="link link-hover text-gray-400">Download Apps</a>
        </nav>

        <nav className="md:col-span-2">
          <h6 className="text-white">Information</h6>
          <a className="link link-hover text-gray-400">Privacy policy</a>
          <a className="link link-hover text-gray-400">Terms & Conditions</a>
          <a className="link link-hover text-gray-400">Join Us</a>
        </nav>

        <nav className="md:col-span-2">
          <h6 className="text-white">Legal</h6>
          <a className="link link-hover flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1227"
              width="15"
              height="15"
              fill="currentColor"
            >
              <path d="M714.3 544.6 1179.3 0H1072L661.9 486.8 327.7 0H0l489.5 702.1L0 1227.1h107.3l434.6-524.6 351.1 524.6H1200L714.3 544.6zm-153.4 185.1-50.3-73.9L146.5 82.9h140.3l305.6 448.9 50.3 73.9 389.4 572.7H891.7L560.9 729.7z text-gray-400" />
            </svg>
            <a className="link link-hover text-gray-400">Terms of use</a>
          </a>
          <a className="link link-hover flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5H4.5V24H.5V8.5zM8.5 8.5H12V10h.05c.49-.9 1.69-1.85 3.45-1.85 3.69 0 4.5 2.42 4.5 5.56V24h-4V14.5c0-2.36-.04-5.39-3.28-5.39-3.28 0-3.78 2.56-3.78 5.2V24H8.5V8.5z" />
            </svg>
            Privacy policy
          </a>
          <a className="link link-hover flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326V22.67c0 .73.6 1.33 1.325 1.33h11.49v-9.844H9.691v-3.83h3.124V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.098 2.795.142v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.83h-3.12V24h6.116c.728 0 1.318-.6 1.318-1.326V1.326C24 .6 23.4 0 22.675 0z" />
            </svg>
            Cookie policy
          </a>
          <a className="link link-hover flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm0 2h20l-10 7L2 6zm0 2.236 8.445 5.91a1 1 0 0 0 1.11 0L22 8.236V18H2V8.236z" />
            </svg>
            Cookie policy
          </a>
        </nav>
      </footer>
      <nav className="items-center text-center pb-5 ">
        <p>
          © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
        </p>
      </nav>
    </div>
  );
};

export default Footer;
