import React, { useState } from "react";
import { Button, Dropdown, Menu, MenuProps, Space } from "antd";
import styles from "../Navbar/Navbar.module.css";
import { useRouter } from "next/router";
import { DownOutlined } from "@ant-design/icons";

const Navbar = () => {
  const router = useRouter();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "1") {
      router.push("/User/List");
    } else if (e.key === "2") {
      router.push("/User/Create");
    }
  };

  const items: MenuProps["items"] = [
    {
      label: "Display All Users",
      key: "1",
    },
    {
      label: "Create User",
      key: "2",
    },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Button type="text" block onClick={() => router.push("/")}>
          Home
        </Button>
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
          }}
        >
          <Button type="text" block>
            Users
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
