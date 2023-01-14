import { ReactNode } from "react";

type Props = {
  title?: string;
  headings: string[];
  items: any[];
  footer?: ReactNode;
};

export default function Table({ headings, items, footer, title }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <table className="table">
        <thead className="table-dark">
          <tr>
            {headings.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-light">
          {items.map((item, index) => (
            <tr key={item.id || index}>
              {headings.map((h) => (
                <td key={h}>
                  {item[h].toString() || (item[h] === "" ? "" : "...")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {footer}
    </>
  );
}
