"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "./navbar.module.css";

const navs = [
    {
        label: "Home",
        href: "/home"
    },
    {
        label: "Projects",
        href: "/projects"
    }
]

export default function NavBar () {
    const pathname = usePathname();

    return (
        <>
            <div className="flex justify-between p-6 sticky top-0 bg-white border-b z-10">
                <div className="flex items-center space-x-6">
                    {navs.map(nav => (
                        <Link
                            key={nav.href}
                            href={nav.href}
                            className={pathname === nav.href ? styles.activeLink : ""}
                        >
                            {nav.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}