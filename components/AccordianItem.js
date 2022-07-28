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
    const plusMinusSize = props.size || '8';
    const spaceBeforeBar = props.spaceBeforeBar || '12';
    const spaceTopAnswer = props.spaceTopAnswer || '4';

    const spaceBeforeBarMobile = props.spaceBeforeBar || '6';
    const spaceAbovePlusMinusMobile = props.spaceAbovePlusMinusMobile || '0';

    const customAnswerWidth = props.customAnswerWidth || '2/3';

    return (
      <>
        <div className="responsive-desktop">
          <AccordionPrimitive.Root type="single" collapsible>
              <AccordionPrimitive.Item value="item-1">
                  <AccordionPrimitive.Trigger onClick={setExtended} className="w-full flex justify-evenly ivyPrestoThin text-desktop-h3 focus:outline-none">
                      <div className="w-10/12 flex justify-start">
                          {props.children}
                      </div>
                      <span className="w-2/12 flex justify-end">
                          {extended? 
                            <img className={`h-${plusMinusSize} w-${plusMinusSize}`} src="/accordian/minus.svg" /> : 
                            <img className={`h-${plusMinusSize} w-${plusMinusSize}`} src="/accordian/plus.svg" />
                          }
                      </span>
                  </AccordionPrimitive.Trigger>
                  <AccordionContent className="coreSans text-desktop-p2">
                      <p className={`pt-${spaceTopAnswer} w-${customAnswerWidth}`}>
                          {props.answer}
                      </p>
                  </AccordionContent>
                  <div style={{borderColor: '#283F91', opacity: '0.30'}} className={`border-b pt-${spaceBeforeBar}`} />
              </AccordionPrimitive.Item>
          </AccordionPrimitive.Root>
        </div>

        <div className="responsive-mobile">
          <AccordionPrimitive.Root type="single" collapsible>
              <AccordionPrimitive.Item value="item-1">
                  <AccordionPrimitive.Trigger onClick={setExtended} className="w-full flex justify-evenly ivyPrestoThin text-mobile-h3 focus:outline-none">
                      <div className="w-10/12 flex justify-start text-left">
                          {props.children}
                      </div>
                      <span className="w-2/12 flex justify-end">
                          {extended? 
                            <img style={{marginTop: `${spaceAbovePlusMinusMobile}`}} className={`h-${plusMinusSize} w-${plusMinusSize}`} src="/accordian/minus.svg" /> : 
                            <img style={{marginTop: `${spaceAbovePlusMinusMobile}`}} className={`h-${plusMinusSize} w-${plusMinusSize}`} src="/accordian/plus.svg" />
                          }
                      </span>
                  </AccordionPrimitive.Trigger>
                  <AccordionContent className="coreSans text-mobile-p2">
                      <p className={`pt-${spaceTopAnswer} w-11/12 lineHeight-mobile-20px`}>
                          {props.answer}
                      </p>
                  </AccordionContent>
                  <div style={{borderColor: '#283F91', opacity: '0.30'}} className={`border-b pt-${spaceBeforeBarMobile}`} />
              </AccordionPrimitive.Item>
          </AccordionPrimitive.Root>
        </div>

        <div className="responsive-tablet">
          <AccordionPrimitive.Root type="single" collapsible>
              <AccordionPrimitive.Item value="item-1">
                  <AccordionPrimitive.Trigger onClick={setExtended} className="w-full flex justify-evenly ivyPrestoThin text-tablet-h3 focus:outline-none">
                      <div className="w-10/12 flex justify-start text-left">
                          {props.children}
                      </div>
                      <span className="w-2/12 flex justify-end">
                          {extended? 
                            <img className={`h-${plusMinusSize} w-${plusMinusSize}`} src="/accordian/minus.svg" /> : 
                            <img className={`h-${plusMinusSize} w-${plusMinusSize}`} src="/accordian/plus.svg" />
                          }
                      </span>
                  </AccordionPrimitive.Trigger>
                  <AccordionContent className="coreSans text-tablet-p2">
                      <p className={`pt-${spaceTopAnswer} w-11/12 lineHeight-tablet-22px`}>
                          {props.answer}
                      </p>
                  </AccordionContent>
                  <div style={{borderColor: '#283F91'}} className={`border-b pt-${spaceBeforeBar}`} />
              </AccordionPrimitive.Item>
          </AccordionPrimitive.Root>
        </div>
      </>
    )
}

export default AccordianItem;