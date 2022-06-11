function TableHead(props: any) {
  return (
    <thead>
      <tr>
        {props.cols.map((col: any, i: number) => (
          <th key={'th-' + i} scope='col'>
            {col.lbl}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export default TableHead;
