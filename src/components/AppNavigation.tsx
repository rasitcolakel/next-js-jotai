"use client";
import React, { useMemo } from "react";
import Link from "@/components/Link";
import { usePathname } from "next/navigation";

type Props = {};

const exampleLinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/counter",
    text: "Counter Example",
  },
  {
    href: "/user",
    text: "Complex Example - User",
  },
  {
    href: "/async-atom",
    text: "Async Atom Example - Post",
  },
];

export default function AppNavigation({}: Props) {
  const pathname = usePathname();

  const activeLink = useMemo(() => {
    return exampleLinks.find((link) => link.href === pathname);
  }, [pathname]);

  return (
    <div className="flex flex-row items-center space-x-4 p-2 mb-4">
      {exampleLinks.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            isActive={link.href === activeLink?.href}
          >
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}
