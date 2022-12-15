import React from "react";

function Footer() {
  return (
    <footer className="bg-black h-[150px] text-center text-white py-8 mt-auto">
      <p className="text-xl">Travel Ticket Booking System</p>
      <p>
        Team project for Fullstack Web Developer Program, REACT22S,{" "}
        <a
          className="underline"
          href="http://www.en.bc.fi"
          target="_blank noreferer"
        >
          BCH, Helsinki
        </a>
      </p>
      <p>Copyright &copy; Abdul Hasan, Dibya Dahal, Vijay KC (2022)</p>
      <a
        className="underline"
        href="http://www.github.com"
        target="_blank noreferer"
      >
        GitHub
      </a>
    </footer>
  );
}

export default Footer;
