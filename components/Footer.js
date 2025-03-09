import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white flex items-center justify-center px-4 h-16">
      <p className="text-center">
        Copyright &copy; {currentYear} Laxmi Chit Fund - All rights reserved!
      </p>
    </footer>
  );
};

export default Footer;
