import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  let [menuClasses, setMenuClasses] = useState("");
  useEffect(() => {
    setMenuClasses("menu");
  }, []);

  return (
    <header className="header-section">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-area">
            <div className="logo">
              <Link href="/">
                <Image
                  alt="logo"
                  src="/images/default-monochrome-white.svg"
                  width={177}
                  height={49}
                />
              </Link>
            </div>
          </div>
          <ul className={menuClasses}>
            <li>
              <Link href="/">Anasayfa</Link>
            </li>
            <li>
              <Link href="/about">Hakkımızda</Link>
            </li>
          </ul>
          <div className="header-bar d-lg-none">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
