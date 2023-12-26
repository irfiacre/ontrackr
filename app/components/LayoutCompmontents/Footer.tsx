import React from "react";

const Footer = () => {
  const currentDate: Date = new Date();
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <p>
        {" "}
        Copyright © {currentDate.getFullYear()} - Made with{" "}
        <strong className=""> Love </strong> by IRADUKUNDA Allelua Fiacre{" "}
      </p>
    </footer>
  );
};

export default Footer;
