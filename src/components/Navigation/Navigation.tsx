"use client";

import { usePathname } from "next/navigation";
import { List, ItemLink, NavLink, LinkText  } from "./Navigation.styled";
import Image from "next/image";
// import HomeSvg from "../../../public/images/home.svg";
// import StatSvg from "../../../public/images/statistic.svg";
import StatisticSvg from "../SvgComponent/StatisticSvg";
import HomeSvg from "../SvgComponent/HomeSvg";

export default function Navigation() {
  const path = usePathname();

  return (
    <>
      <List>
        <ItemLink>
          <NavLink href="/home" $isActive={path === "/home"}>
            <HomeSvg width={18} height={18}  />
            <LinkText >Home</LinkText>
          </NavLink>
        </ItemLink>
        <ItemLink>
          <NavLink href="/about" $isActive={path === "/about"}>
            {/* <StatSvg width={18} height={18}  /> */}
              <StatisticSvg width={18} height={18}  />
            <LinkText >Statistic</LinkText>
          </NavLink>
        </ItemLink>
      </List>
    </>
  );
}

// const web = {
//   test: /\.svg$/,
//   use: [{ loader: "@svgr/webpack", options: { native: true } }],
// };

// import Link from "next/link";
// import stl from "./Navigation.module.scss";
// import { useParams, usePathname, useSelectedLayoutSegment } from "next/navigation";

// export default function Navigation() {
//   const path = usePathname()

//   return (
//     <>
//       <ul className={stl.desctop__nav__list}>
//         <li>
//           <Link  className={`${stl.desctop__navlink} ${path === "/home" ? stl.active : ''}`} href="/home">
//             <p className={stl.desctop__navlink__text}>Home</p>
//           </Link>
//         </li>
//         <li>
//           <Link className={`${stl.desctop__navlink} ${path === "/about" ? stl.active : ''}`} href="/about">
//             <p className={stl.desctop__navlink__text}>Statistic</p>
//           </Link>
//         </li>
//       </ul>
//     </>
//   );
// }
