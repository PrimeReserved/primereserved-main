"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const DynamicScrollToContactButton = React.lazy(
  () => import("../Buttons/ScrollToContactButton"),
);

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-customSecondary pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-6/12">
              <div className="mb-12 max-w-[95%] md:max-w-[85%] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/primereservedlogo.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/primereservedlogo.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="dark:text-white-dark mb-9 text-base font-light leading-relaxed text-white">
                  The seasoned Software Development Agency specialized in
                  building cutting-edge, user-focused digital solutions tailored
                  for businesses of all sizes, from startups to enterprises.
                </p>

                <React.Suspense fallback={<div>Loading...</div>}>
                  <DynamicScrollToContactButton />
                </React.Suspense>

                <div className="mt-8 items-center xs:hidden md:flex">
                  <a className="mr-6 text-2xl text-white">Follow Us</a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="dark:text-white-dark mr-6 text-white duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <Image
                      src="/images/icons/linkedIn-logo.svg"
                      alt="LinkedIn"
                      width={40}
                      height={30}
                    />
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="dark:text-white-dark mr-6 text-white duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <Image
                      src="/images/icons/youtube-logo.svg"
                      alt="Youtube"
                      width={40}
                      height={30}
                    />
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="dark:text-white-dark mr-6 text-white duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <Image
                      src="/images/icons/ig-logo.svg"
                      alt="Instagram"
                      width={40}
                      height={30}
                    />
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="dark:text-white-dark text-white duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <Image
                      src="/images/icons/fb-logo.svg"
                      alt="Facebook"
                      width={40}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="sm:w-2/2 flex w-full flex-wrap justify-between px-4 md:w-1/2 lg:w-5/12 xl:w-5/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-2xl font-semibold text-white dark:text-white">
                  QUICK LINKS
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Meet the team
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-12 mr-4 lg:mb-16 lg:mr-2">
                <h2 className="mb-10 text-2xl font-semibold text-white dark:text-white">
                  SERVICES
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Mobile Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Team Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Security Audits
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="dark:text-white-dark mb-4 inline-block text-base font-light text-white duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Technical Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div> */}
          <div className="h-px w-full bg-[#D2D8E183]"></div>
          <div className="my-8 items-center justify-center xs:flex md:hidden">
            <a className="mr-6 text-2xl text-white">Follow Us</a>
            <a
              href="/"
              aria-label="social-link"
              className="dark:text-white-dark mr-6 text-white duration-300 hover:text-primary dark:hover:text-primary"
            >
              <Image
                src="/images/icons/linkedIn-logo.svg"
                alt="LinkedIn"
                width={40}
                height={30}
              />
            </a>
            <a
              href="/"
              aria-label="social-link"
              className="dark:text-white-dark mr-6 text-white duration-300 hover:text-primary dark:hover:text-primary"
            >
              <Image
                src="/images/icons/youtube-logo.svg"
                alt="Youtube"
                width={40}
                height={30}
              />
            </a>
            <a
              href="/"
              aria-label="social-link"
              className="dark:text-white-dark mr-6 text-white duration-300 hover:text-primary dark:hover:text-primary"
            >
              <Image
                src="/images/icons/ig-logo.svg"
                alt="Instagram"
                width={40}
                height={30}
              />
            </a>
            <a
              href="/"
              aria-label="social-link"
              className="dark:text-white-dark text-white duration-300 hover:text-primary dark:hover:text-primary"
            >
              <Image
                src="/images/icons/fb-logo.svg"
                alt="Facebook"
                width={40}
                height={30}
              />
            </a>
          </div>
          <div className="h-px w-full bg-[#D2D8E183]"></div>
          <div className="items-center justify-between py-8 font-light xs:hidden md:flex">
            <p className="text-center text-base text-white dark:text-white">
              Copyright © 2024 PrimeReserved. All rights reserved
            </p>
            <div className="flex items-center justify-center gap-8">
              <Link href="/" className="text-base text-white dark:text-white">
                Terms and Conditions
              </Link>
              <Link href="/" className="text-base text-white dark:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
          {/* Mobile */}
          <div className="items-center justify-between py-8 font-light xs:flex-col md:hidden">
            <p className="text-center text-base text-white dark:text-white">
              Copyright © 2024 PrimeReserved. All rights reserved
            </p>
            <div className="flex items-center justify-center gap-8">
              <Link href="/" className="text-base text-white dark:text-white">
                Terms and Conditions
              </Link>
              <Link href="/" className="text-base text-white dark:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
