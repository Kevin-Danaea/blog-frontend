import NextLink from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavLink = ({ href, label }: NavLinkProps) => (
  <NextLink
    className="text-blog-body hover:text-blog-accent transition-colors"
    href={href}
  >
    {label}
  </NextLink>
);
