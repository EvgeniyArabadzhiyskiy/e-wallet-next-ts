"use client";

import { usePathname } from "next/navigation";
import StatisticSvg from "../SvgComponent/StatisticSvg";
import TransactionSvg from "../SvgComponent/TransactionSvg";
import HomeSvg from "../SvgComponent/HomeSvg";
import { List, ItemLink, NavLink, LinkText } from "./Navigation.styled";

export default function Navigation() {
  const path = usePathname();

  return (
    <>
      <List>
        <ItemLink>
          <NavLink href="/home" $isActive={path === "/home"}>
            <HomeSvg width={18} height={18} />
            <LinkText>Home</LinkText>
          </NavLink>
        </ItemLink>
        <ItemLink>
          <NavLink href="/home/transactions" $isActive={path === "/home/transactions"}>
            <TransactionSvg width={18} height={18} />
            <LinkText>Transactions</LinkText>
          </NavLink>
        </ItemLink>
        <ItemLink>
          <NavLink href="/home/statistic" $isActive={path === "/home/statistic"}>
            <StatisticSvg width={18} height={18} />
            <LinkText>Statistic</LinkText>
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
