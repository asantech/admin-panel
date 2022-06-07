type label = {
  id: string;
  lbl: string;
};

function Label(props: label) {
  const { id, lbl } = props;
  return (
    <label htmlFor={id} className='form-label'>
      {lbl}
    </label>
  );
}

export default Label;
