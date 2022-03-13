import * as AccordionPrimitive from '@radix-ui/react-accordion';

function Accordian() {
    return (

        <AccordionPrimitive.Root type="single" collapsible className="h-96 px-8 w-full flex flex-col justify-evenly" style={{backgroundColor: '#EBE5DB'}}>
            <AccordionPrimitive.Item value="item-1" className="bg-white">
                <AccordionPrimitive.Trigger className="w-full flex justify-evenly ivyPrestoThin text-4xl">
                    <h1 className="w-full flex justify-start">
                        Is it accessible?
                    </h1>
                    <span classname="w-full flex justify-end">
                        +
                    </span>
                </AccordionPrimitive.Trigger>
                <AccordionPrimitive.Content className="coreSans text-2xl">
                    <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h1>
                </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>

        

        </AccordionPrimitive.Root>

    )
}

export default Accordian;