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
  styles?: any;
  addedClassName?: string;
};

function Alert(props: Alert) {
  const { type = 'danger', addedClassName, styles, children } = props;
  return (
    <div
      className={
        'alert alert-' + type + (addedClassName ? ` ${addedClassName}` : '')
      }
      role='alert'
      style={styles}
    >
      {children}
    </div>
  );
}

export default Alert;
