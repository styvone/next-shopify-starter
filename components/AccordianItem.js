import React from 'react';
import { styled, keyframes } from '@stitches/react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

const slideDown = keyframes({
    from: { height: 0 },
    to: { height: 'var(--radix-accordion-content-height)' },
  });
  
  const slideUp = keyframes({
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: 0 },
  });

  const StyledContent = styled(AccordionPrimitive.Content, {
    overflow: 'hidden',
  
    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
    },
  });

  export const AccordionContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  ));

function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
        setValue(v => !v);
    }, []);
    return [value, toggle];
}

function AccordianItem(props) {
    const [extended, setExtended] = useToggle(false);

    return (
        <AccordionPrimitive.Root type="single" collapsible>
            <AccordionPrimitive.Item value="item-1">
                <AccordionPrimitive.Trigger onClick={setExtended} className="w-full flex justify-evenly ivyPrestoThin text-3xl focus:outline-none">
                    <h1 className="w-10/12 flex justify-start">
                        {props.children}
                    </h1>
                    <span className="w-2/12 flex justify-end">
                        {extended? <img className="h-8 w-8" src="/accordian/minus.svg" /> : <img className="h-8 w-8" src="/accordian/plus.svg" />}
                    </span>
                </AccordionPrimitive.Trigger>
                <AccordionContent className="coreSans text-1xl">
                    <h3 className="pt-8 w-2/3">
                        {props.answer}
                    </h3>
                </AccordionContent>
                <div style={{borderColor: '#283F91'}} className="border-b pt-8" />
            </AccordionPrimitive.Item>
        </AccordionPrimitive.Root>
    )
}

export default AccordianItem;