import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function ProductDescription({ data }) {
  if (!data) return;

  return (
    <section className="container mx-auto">
      <Tabs value="description">
        <TabsHeader className=" max-w-[30rem] rounded-sm  font-bold mb-5">
          <Tab
            key={"description"}
            className="font-eco font-bold"
            value={"description"}
          >
            Description
          </Tab>
          <Tab
            key={"aditional-informaiton"}
            className="font-eco font-bold"
            value={"aditional-informaiton"}
          >
            Aditional Informaiton
          </Tab>
        </TabsHeader>

        <TabsBody className=" bg-[#292929] rounded-sm ">
          <TabPanel
            className=" text-[1.3rem] text-white font-eco "
            key={"description"}
            value={"description"}
          >
            <div dangerouslySetInnerHTML={{ __html: data?.description }} />
          </TabPanel>
          <TabPanel
            className=" text-[1.3rem] text-white font-eco "
            key={"aditional-informaiton"}
            value={"aditional-informaiton"}
          >
            aditional information
          </TabPanel>
        </TabsBody>
      </Tabs>
    </section>
  );
}
