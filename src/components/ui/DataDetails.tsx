type Props = {
  headers?: string[];
  item: any;
};

export default function DataDetails({ headers, item }: Props) {
  const keys = headers === undefined ? Object.keys(item) : headers;

  return (
    <table>
      <tbody>
        {keys.map((key: any) => (
          <tr key={key}>
            <td>{key}</td>
            <td>:{item[key].toString() || ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
