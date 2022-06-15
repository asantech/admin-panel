import AccordionItem from './AccordionItem';

type Props = {
  items: [];
  className?: string;
};

function Accordion(props: any) {
  const { items, className }: Props = props;
  return (
    <div className={'accordion ' + (className ?? '')}>
      {items.map((item: any, i: number) => (
        <AccordionItem key={i} id={i} header={item.header}>
          {item.body}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
