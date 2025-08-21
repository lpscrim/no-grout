'use client'

/*import { useState } from "react"; */
import styles from "./NavIcon.module.css";

export default function NavIcon( { open } : { open: boolean } ) {
  /*const [open, setOpen] = useState(false);*/

  return (
    <div
      id="nav-icon"
      className={`${styles.navIcon} ${open ? styles.open : ""}`}
      /*onClick={() => setOpen((prev) => !prev)} */
      style={{ position: "relative" }}
    >
      <span ></span>
      <span ></span>
      <span ></span>
    </div>
  );
}