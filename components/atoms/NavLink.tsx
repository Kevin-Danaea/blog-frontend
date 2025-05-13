import NextLink from "next/link";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavLink = ({ href, label, isActive = false }: NavLinkProps) => (
  <NextLink
    className={clsx(linkStyles({ color: "foreground" }), {
      "text-primary font-medium": isActive,
    })}
    href={href}
  >
    {label}
  </NextLink>
);
