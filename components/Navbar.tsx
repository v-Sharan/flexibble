import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10 ">
        <Link href={"/"}>
          <Image src="/logo.svg" width={155} height={43} alt="Flexibble" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
