import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function ServiceAccordion() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        Printing services
        </AccordionHeader>
        <AccordionBody>
        If you need print design concepts that will make your project shine, then it’s worth investing in a quality graphic designer.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Banner Design & Printing
        </AccordionHeader>
        <AccordionBody>
        We have all the equipment, know-how and every thing you will need to receive fast, reliable printing services with high quality results.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Book Cover Printing
        </AccordionHeader>
        <AccordionBody>
        The easiest way to create professional designs for free!choose from our ever changing library of free mockups, designs, videos and logos.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        Design Services
        </AccordionHeader>
        <AccordionBody>
        Beyond more stoic this along goodness hey this this wow manatee mongoose one as since a far flustered
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}