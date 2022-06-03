import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a
          style={{ color: router.pathname === "/" ? "red" : "blue" }}
          className="cla"
        >
          Home
        </a>
      </Link>
      <Link href="/About">
        <a style={{ color: router.pathname === "/About" ? "red" : "blue" }}>
          About Us
        </a>
      </Link>
    </nav>
  );
}
