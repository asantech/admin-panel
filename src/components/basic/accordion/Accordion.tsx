import AccordionItem from './AccordionItem';

function Accordion(props: any) {
  const { items } = props;
  return (
    <div className='accordion'>
      {items.map((item: any, i: number) => (
        <AccordionItem key={i} id={i} header={item.header}>
          {item.body}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
