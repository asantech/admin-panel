import { has } from 'lodash';

type TableBodyData = {
  cols: any[];
  data: [];
  rowOnClick?: any;
};

function TableBody(props: TableBodyData) {
  const { data, cols, rowOnClick } = props;
  return (
    <>
      {data && (
        <tbody>
          {data.map((data: any, i: number) => (
            <tr key={data.id || i} onClick={() => rowOnClick(data, i)}>
              {cols.map((col: any, j: number) => {
                if (has(col, 'content'))
                  return (
                    <td key={`row-cell-${i}${j}`}>{col.content(data, i)}</td>
                  );
                else if (has(data, col.path))
                  return <td key={`row-cell-${i}${j}`}>{data[col.path]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      )}
    </>
  );
}
export default TableBody;
