import React from "react";

const Footer = () => {
  const currentDate: Date = new Date();
  return (
    <footer className="footer footer-center p-4 border-t border-primary-dark-2 border-opacity-20">
      <p className="flex text-gray-600">
        Copyright © {currentDate.getFullYear()} - Made with{" "}
        <strong>Love</strong> by IRADUKUNDA Allelua Fiacre
      </p>
    </footer>
  );
};

export default Footer;
