import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-zinc-900 py-4 text-white z-10">
      Made with ❤ and ☕ by Zhou © {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
