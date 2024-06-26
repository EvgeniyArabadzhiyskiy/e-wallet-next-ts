"use client";

import { usePathname } from "next/navigation";
import StatisticSvg from "../SvgComponent/StatisticSvg";
import TransactionSvg from "../SvgComponent/TransactionSvg";
import HomeSvg from "../SvgComponent/HomeSvg";
import { List, ItemLink, NavLink, LinkText } from "./Navigation.styled";
import TransitionLink from "../TransitionLink/TransitionLink";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <List>
        <ItemLink>
          {/* <TransitionLink href="/home" $isActive={path === "/home"}>
            <HomeSvg width={18} height={18} />
            <LinkText>Home</LinkText>
          </TransitionLink> */}

          {/* <NavLink href="/home" $isActive={path === "/home"}>
            <HomeSvg width={18} height={18} />
            <LinkText>Home</LinkText>
          </NavLink> */}
        </ItemLink>

        <ItemLink>
          {/* <TransitionLink href="/home/transactions" $isActive={path === "/home/transactions"}>
            <TransactionSvg width={18} height={18} />
            <LinkText>Transactions</LinkText>
          </TransitionLink> */}

          <NavLink href="/home/transactions" $isActive={path === "/home/transactions"}>
            <TransactionSvg width={18} height={18} />
            <LinkText>Transactions</LinkText>
          </NavLink>
        </ItemLink>

        <ItemLink>
          {/* <TransitionLink href="/home/statistic" $isActive={path === "/home/statistic"}>
            <StatisticSvg width={18} height={18} />
            <LinkText>Statistic</LinkText>
          </TransitionLink> */}

          <NavLink href="/home/statistic" $isActive={path === "/home/statistic"}>
            <StatisticSvg width={18} height={18} />
            <LinkText>Statistic</LinkText>
          </NavLink>
        </ItemLink>
      </List>
    </nav>
  );
}
