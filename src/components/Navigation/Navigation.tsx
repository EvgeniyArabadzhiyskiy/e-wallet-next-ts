"use client"

import Link from "next/link";
import stl from "./Navigation.module.scss";
import { useParams, usePathname, useSelectedLayoutSegment } from "next/navigation";

export default function Navigation() {
  const path = usePathname()
  
  return (
    <>
      <ul className={stl.desctop__nav__list}>
        <li>
          <Link  className={`${stl.desctop__navlink} ${path === "/home" ? stl.active : ''}`} href="/home">
            <p className={stl.desctop__navlink__text}>Home</p>
          </Link>
        </li>
        <li>
          <Link className={`${stl.desctop__navlink} ${path === "/about" ? stl.active : ''}`} href="/about">
            <p className={stl.desctop__navlink__text}>Statistic</p>
          </Link>
        </li>
      </ul>
    </>
  );
}
