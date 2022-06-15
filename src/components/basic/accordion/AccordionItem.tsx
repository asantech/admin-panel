import { useState } from 'react';

function AccordionItem(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordionItemState() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={'accordion-item border-0'}
      style={{ backgroundColor: '#222e3c' }}
    >
      <div className='accordion-header' id={'headingOne-' + props.id}>
        <button
          className={
            'accordion-button shadow-none py-2 px-0' +
            (isOpen ? '' : ' collapsed')
          }
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={'#' + props.id}
          aria-controls={props.id}
          style={{ backgroundColor: '#222e3c' }}
          onClick={toggleAccordionItemState}
        >
          <div className='color-ced4da'>{props.header}</div>
        </button>
      </div>
      <div
        id={props.id}
        className={'accordion-collapse' + (isOpen ? '' : ' collapse')}
        aria-labelledby={'headingOne-' + props.id}
      >
        <div className='accordion-body py-2 px-2 border-0'>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
