import React from "react";

import Image from "next/image";
import Link from "next/link";

import MainHeaderbackground from "./main-header-background";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";
import logoImg from "@/assets/logo.png";

const MainHeader = () => {
  return (
    <>
      <MainHeaderbackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
