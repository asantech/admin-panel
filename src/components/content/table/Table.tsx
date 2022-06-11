import TableHead from './TableHead';
import TableBody from './TableBody';

type Table = {
  className?: string;
  cols: any;
  data: [];
  rowOnClick?: any;
};

function Table(props: Table) {
  const { className, cols, data, rowOnClick } = props;
  return (
    <table className={'table ' + (className ?? '')}>
      <TableHead cols={cols} />
      <TableBody cols={cols} data={data} rowOnClick={rowOnClick} />
    </table>
  );
}
export default Table;
