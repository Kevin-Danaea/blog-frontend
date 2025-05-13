import { NavbarItem, NavbarMenuItem } from "@heroui/navbar";
import { Link } from "@heroui/link";

import { NavLink } from "@/components/atoms/NavLink";

type NavItem = { href: string; label: string };
type NavItemsProps = {
  items: NavItem[];
  isMobile?: boolean;
};

export const NavItems = ({ items, isMobile = false }: NavItemsProps) => {
  if (isMobile) {
    return (
      <>
        {items.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === items.length - 1
                    ? "danger"
                    : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </>
    );
  }

  return (
    <>
      {items.map((item) => (
        <NavbarItem key={item.href}>
          <NavLink href={item.href} label={item.label} />
        </NavbarItem>
      ))}
    </>
  );
};
