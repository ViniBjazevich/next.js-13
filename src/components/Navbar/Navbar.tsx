import React, { useState } from "react";
import { Button, Menu } from "antd";
import styles from "../Navbar/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Button type="text" block onClick={() => router.push("/")}>
          Home
        </Button>
        <Button type="text" block onClick={() => router.push("/UserList")}>
          Users
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
