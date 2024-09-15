"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const menuContent = [
    {
        name: "About Us",
        activeClass: "",
        page: "about",
        menuClass: "",
        routerPath: "/about-us",
    },
    // {
    //   name: "Portfolio",
    //   page: "works",
    //   activeClass: "",
    //   menuClass: "",
    //   routerPath: "/works",
    // },
    {
        name: "Our Services",
        activeClass: "",
        page: "services",
        menuClass: "",
        routerPath: "/our-services",
    },
    // {
    //   name: "Products",
    //   activeClass: "",
    //   page: "products",
    //   menuClass: "",
    //   routerPath: "/products",
    // },
    {
        name: "Contact Us",
        activeClass: "",
        page: "contact-us",
        menuClass: "",
        routerPath: "/contact-us",
    },
    {
        name: "FAQ",
        activeClass: "",
        menuClass: "",
        page: "faq",
        routerPath: "/faq",
    },
    {
        name: "Blog",
        activeClass: "",
        menuClass: "",
        page: "blog",
        routerPath: "https://blog.zavolt.com",
    },
    // {
    //   name: "More ...",
    //   activeClass: "",
    //   page: "others",
    //   menuClass: "current-menu-item",
    //   dropDownItems: [
    //     {
    //       name: "Resources",
    //       subMenu: [
    //         {
    //           name: "Blog",
    //           routerPath: "/resources/blog",
    //         },
    //         {
    //           name: "Podcasts",
    //           routerPath: "/resources/podcasts",
    //         },
    //         {
    //           name: "Sessions",
    //           routerPath: "/resources/sessions",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Career",
    //       routerPath: "/coming-soon",
    //     },
    //     {
    //       name: "Sales Partnership",
    //       routerPath: "/contact-us-us",
    //     },
    //     {
    //       name: "News",
    //       routerPath: "/news",
    //     },
    //   ],
    // },
];

const DropdownMenu = () => {
    const pathname = usePathname();
    let currentPage = "";

    if (pathname.split("/")[1].trim() !== "home-default") {
        currentPage = pathname.split("-")[0].split("/")[1];

        if (
            currentPage !== "works" &&
            currentPage !== "blog" &&
            currentPage !== "home"
        ) {
            currentPage = "others";
        }
    }

    return (
        <ul className="sf-menu">
            {menuContent.map((item, i) => (
                <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
                    {item.routerPath ? (
                        <Link href={item.routerPath} className={item.activeClass}
                              target={item.routerPath.includes('https://') ? '_blank' : '_self'}>
              <span className={item.page === currentPage ? "active-page" : ""}>
                {item.name}
                  {
                      item.routerPath.includes('https://') &&
                      <div className="text-end d-inline-block mx-2">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              style={{height: "1em"}}
                              viewBox="0 0 17 17"
                          >
                              <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"/>
                          </svg>
                      </div>
                  }
              </span>
                        </Link>
                    ) : (
                        <span className={item.activeClass}>
              <span className={item.page === currentPage ? "active-page" : ""}>
                {item.name}
              </span>
            </span>
                    )}

                    {/*{item.dropDownItems && (*/}
                    {/*  <ul className="sub-menu mega">*/}
                    {/*    {item.dropDownItems.map((val, j) => (*/}
                    {/*      <li key={j}>*/}
                    {/*        {val.subMenu ? (*/}
                    {/*          <>*/}
                    {/*            <span>{val.name}</span>*/}
                    {/*            <ul className="sub-menu">*/}
                    {/*              {val.subMenu.map((subItem, k) => (*/}
                    {/*                <li key={k}>*/}
                    {/*                  <Link href={subItem.routerPath}>*/}
                    {/*                    <span*/}
                    {/*                      className={*/}
                    {/*                        subItem.routerPath === pathname*/}
                    {/*                          ? "active-page"*/}
                    {/*                          : ""*/}
                    {/*                      }*/}
                    {/*                    >*/}
                    {/*                      {subItem.name}*/}
                    {/*                    </span>*/}
                    {/*                  </Link>*/}
                    {/*                </li>*/}
                    {/*              ))}*/}
                    {/*            </ul>*/}
                    {/*          </>*/}
                    {/*        ) : (*/}
                    {/*          <Link href={val.routerPath}>*/}
                    {/*            <span*/}
                    {/*              className={val.routerPath === pathname ? "active-page" : ""}*/}
                    {/*            >*/}
                    {/*              {val.name}*/}
                    {/*            </span>*/}
                    {/*          </Link>*/}
                    {/*        )}*/}
                    {/*      </li>*/}
                    {/*    ))}*/}
                    {/*  </ul>*/}
                    {/*)}*/}
                </li>
            ))}
        </ul>
    );
};

export default DropdownMenu;
