type Alert = {
  type:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  children: any;
};

function Alert(props: Alert) {
  const { type, children } = props;
  return (
    <div className={'alert alert-' + type} role='alert'>
      {children}
    </div>
  );
}

export default Alert;
