import React from "react";

import Link from "next/link";
import Image from "next/image";

import MainHeaderbackground from "./main-header-background";

import classes from "./main-header.module.css";

import logoImg from "@/assets/logo.png";
import NavLink from "./nav-link";

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
