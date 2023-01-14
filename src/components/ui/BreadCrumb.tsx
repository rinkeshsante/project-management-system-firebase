import { Link } from "react-router-dom";

type Props = {
  links: {
    title: string;
    url?: string;
  }[];
};

export default function BreadCrumb({ links }: Props) {
  return (
    <nav className="breadcrumb">
      {links.map((link, index) => {
        if (index + 1 !== links.length) {
          return (
            <Link key={index} className="breadcrumb-item" to={link.url || ""}>
              {link.title}
            </Link>
          );
        } else
          return (
            <span
              key={index}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {link.title}
            </span>
          );
      })}
    </nav>
  );
}
