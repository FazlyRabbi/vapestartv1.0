import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function ProductDescription() {
  const data = [
    {
      label: "Description",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.  lorem
      't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.  lorem
      't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.  lorem`,
    },
    {
      label: "Additional Information",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <section className="container mx-auto">
      <Tabs value="html">
        <TabsHeader className=" max-w-[30rem] rounded-sm  font-bold mb-5">
          {data.map(({ label, value }) => (
            <Tab key={value} className="font-eco font-bold" value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className=" bg-[#292929] rounded-sm ">
          {data.map(({ value, desc }) => (
            <TabPanel
              className=" text-[1.3rem] text-white font-eco "
              key={value}
              value={value}
            >
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}

