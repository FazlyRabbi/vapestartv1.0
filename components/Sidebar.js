import { SidebarContext } from "@/context/SidebarContext";
import Link from "next/link";
import { useContext } from "react";
import styles from "../styles/Home.module.css";

function Sidebar() {
  const { sidebars } = useContext(SidebarContext);

  return (
    <aside className="sidebar">
      <Link
        href={"/shop"}
        className="text-center text-base font-bold mb-3 bg-primary text-white p-2 rounded-md   w-[80%] block"
      >
        All Products
      </Link>

      {sidebars &&
        sidebars.map((menu, index) => (
          <div className="aec-bluprints" key={index}>
            <ul className="w-[80%] ">
              <li
                className={`text-titleSm   capitalize font-bold bg-[#111827] text-white p-2 rounded-tl-md rounded-tr-md text-left ${styles.borderGradient}`}
              >
                <Link href={`/shop/${menu.attributes.MainManu.toLowerCase()}`}>
                  {menu.attributes.MainManu}
                </Link>
              </li>

              {menu?.attributes?.SubItems.map((submenu, index) => (
                <li
                  className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary"
                  key={index}
                >
                  <Link
                    href={`/shop/${menu.attributes?.MainManu.toLowerCase()}/${submenu?.Submenu.toLowerCase()}`}
                  >
                    {submenu?.Submenu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </aside>
  );
}

export default Sidebar;
