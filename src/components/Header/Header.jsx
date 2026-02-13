"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.scss";
import logo from "../../../public/newlogo.png"
import Image from "next/image";
// import ConsultationPopup from "../ConsultationForm/ConsultationForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const isActive = (href) => {
    if (Array.isArray(href)) {
      return href.some((item) => pathname.startsWith(item));
    }
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navServiceLinks = [
    "/service",
    "/employer-of-record",
    "/outsourced-accounting",
    "/offshore-accounting",
    "/global-capability-centers",
    "/staffing-service",
    "/it-service",
    "healthcare-rcm",
  ];

  const resorce = ["/guides", "/blog", "/career", "/faq"];

  return (
    <>
      <header className="header   backdrop-blur-md z-40 relative  ">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            {/* <h1>Innonex</h1> */}
            <Image
            src={logo}
            alt="Innonex"
            height={70}
            >

            </Image>
          </Link>

          <button
            className={`header__hamburger ${isOpen ? "is-open" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`header__nav ${isOpen ? "is-open" : ""}`}>
            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>

            <div className="nav-item dropdown">
              <button
                className={`nav-link nav-link--button ${
                  isActive(navServiceLinks) ? "active" : ""
                }`}
                type="button"
              >
                <Link href="/service">Solutions</Link>
                <span className="chevron">
                  <svg
                    className="w-4 h-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div className="dropdown-menu ">
                <Link href="/offshore-accounting" onClick={closeMenu}>
                  Dedicated Remote Teams
                </Link>
                <Link href="/offshore-accounting" onClick={closeMenu}>
                  Offshore Staffing
                </Link>
                <Link href="/offshore-accounting" onClick={closeMenu}>
                  Business Process Outsourcing
                </Link>
                <Link href="/offshore-accounting" onClick={closeMenu}>
                  Contract Staffing
                </Link>
                <Link href="/offshore-accounting" onClick={closeMenu}>
                  Project-Based Hiring
                </Link>
                <Link href="/offshore-accounting" onClick={closeMenu}>
                  Offshore AccountingRecruitment Process Outsourcing
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className={`nav-link ${isActive("/industries") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Industries
            </Link>
            <Link
              href="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
              onClick={closeMenu}
            >
              About Us
            </Link>

            <div className="nav-item dropdown">
              <button
                className={`nav-link nav-link--button ${
                  isActive(resorce) ? "active" : ""
                }`}
                type="button"
              >
                Resources{" "}
                {/* <span className="chevron">
                  <svg
                    className="w-4 h-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </span> */}
              </button>
              {/* <div className="dropdown-menu">
                <Link href="/blog" onClick={closeMenu}>
                  Blog
                </Link>
                <Link href="/faq" onClick={closeMenu}>
                  FAQ's
                </Link>
                <Link href="/career" onClick={closeMenu}>
                  {" "}
                  Career
                </Link>
                <Link href="/guides" onClick={closeMenu}>
                  {" "}
                  Guides
                </Link>
              </div> */}
            </div>

            <Link
              href="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            {/* <button id="btn" className="dsk" onClick={() => setOpen(true)}>
          Book Consultation
        </button> */}
          </nav>

          <button
            className="mob rounded-full py-2"
            onClick={() => setOpen(true)}
          >
            Book Consultation
          </button>
        </div>
      </header>
      {/* <ConsultationPopup open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default Header;
