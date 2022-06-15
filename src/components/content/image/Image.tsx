type Image = {
  className?: string;
  src: string;
  alt: string;
  style?: any;
};

function Image(props: Image) {
  const { className, src, alt, style } = props;
  return <img className={className} src={src} alt={alt} style={style} />;
}

export default Image;
