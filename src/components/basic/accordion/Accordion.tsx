import AccordionItem from './AccordionItem';
import { Link } from 'react-router-dom';

type AccordionData = {
  className?: string;
  items: [];
};

type HeaderSpecs = {
  iconClassName: string;
  lbl: string;
};

function Header({ specs }: { specs: HeaderSpecs }) {
  const { iconClassName, lbl } = specs;
  return (
    <>
      <i className={iconClassName} />
      <span className='mx-3'>{lbl}</span>
    </>
  );
}

function Accordion(props: any) {
  const { items, className }: AccordionData = props;

  return (
    <div className={'accordion ' + (className ?? '')}>
      {items.map((item: any, i: number) => (
        <AccordionItem key={i} id={i} header={<Header specs={item.header} />}>
          {item.body.links.map((link: any, i: number) => (
            <Link
              key={i}
              to={link.to}
              className='nav-link color-ced4da p-0 mb-3'
            >
              <i className={link.iconClassName} />
              <span className='mx-3 color-#e9ecef80'>{link.lbl}</span>
            </Link>
          ))}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
