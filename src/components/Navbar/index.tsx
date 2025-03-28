"use client";
import React from "react";
import Button from "../Button";
import NavItem from "./NavItem";
import styles from "./navbar.module.scss"
// import LogoutIcon from "@/assets/LogoutIcon";
import { logout } from "@/actions/auth";

interface NavItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

type Props = {
  navItems: NavItem[];
};

const index = ({ navItems }: Props) => {
  const handleClick = async () => {
    console.log("click !");
    logout()
  };
  return (
    <aside className={`${styles.sidebar}`}>
      <ul>
        {navItems.map((item, key) => {
          return <NavItem key={key} navItem={item} />;
        })}
      </ul>
      <Button
        label="Logout"
        // icon={<LogoutIcon fill="white" width={15} height={15} />}
        classNames={["btn_primary", "btn_logout", "with_icon", "offset"]}
        type="button"
        handleClick={() => {
          handleClick();
        }}
      ></Button>
    </aside>
  );
};

export default index;
