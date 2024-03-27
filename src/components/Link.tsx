import React from "react";
import NextLink from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
};

export default function Link({ children, isActive = false, ...props }: Props) {
  const activeClasses = isActive
    ? "bg-blue-500 hover:bg-blue-600 !text-white"
    : "";

  const className = `px-4 py-2 rounded-md text-lg text-blue-500 hover:text-blue-600 ${activeClasses}`;

  return (
    <NextLink {...props} className={className}>
      {children}
    </NextLink>
  );
}
