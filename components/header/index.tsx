import Image from "next/image";
import Link from "next/link";
import Button from "../../UI/Button";
// Data
import { links } from "./header-data";
// Styles
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src="/images/logo.svg" width={99} height={33} />
          </div>
          <nav className={styles.links}>
            {links.map((link) => (
              <li key={link.label} className={styles.link}>
                <Link href={link.path}>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          </nav>
          <div className={styles.buttons}>
            <Button label="Elrond" />
            <Button label="App" type="dark" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
