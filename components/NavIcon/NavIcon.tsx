'use client'

/*import { useState } from "react"; */
import styles from "./NavIcon.module.css";

export default function NavIcon( { open, color } : { open: boolean, color: string } ) {
  /*const [open, setOpen] = useState(false);*/

  return (
    <div
      id="nav-icon"
      className={`${styles.navIcon} ${open ? styles.open : ""}`}
      /*onClick={() => setOpen((prev) => !prev)} */
      style={{ position: "relative" }}
    >
      <span className={`bg-${color}`}></span>
      <span className={`bg-${color}`}></span>
      <span className={`bg-${color}`}></span>
    </div>
  );
}