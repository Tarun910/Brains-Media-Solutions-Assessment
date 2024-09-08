import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container m-auto flex justify justify-center items-center text-center">
        <Link href={"/"}>
          <div className="text-lg font-bold">
            {" "}
            Brains Media Solutions{" "}
            <p>we are here to provide you all solutions !</p>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
