import React from "react";
import LeftMenu from "./LeftMenu";
import Head from "next/head";
import DHeader from "./DHeader";
import AreaCharts from "./AreaCharts";
import CustomShapeBarCharts from "./CustomShapeBarCharts";
import SimpleBarCharts from "./SimpleBarCharts";
import PieChartWithCustomizedLabels from "./PieChartWithCustomizedLabels";


function DashboardIndex() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="lg:grid  bg-[#F7F7F7]   pl-10 lg:grid-cols-6  justify-items-left p-[3rem] ">
        <LeftMenu />
        <DHeader />

        <div
          className=" grid-cols-1 
         gap-5
        pl-5 min-h-[70rem] lg:min-h-0  pb-4  grid lg:grid-cols-2 lg:col-span-5  mr-10 mt-14"
        >
          <div className=" bg-white rounded-md shadow-md p-6">
            <h1 className="font-bold  text-[#262F85] text-[1.5rem]">Orders</h1>
            <PieChartWithCustomizedLabels />
          </div>

          <div className=" bg-white rounded-md shadow-md p-6">
            <h1 className="font-bold mb-4  text-[#262F85] text-[1.5rem]">
            Orders
            </h1>
            <CustomShapeBarCharts />
          </div>

          <div className=" bg-white rounded-md shadow-md p-6">
            <h1 className="font-bold  mb-4 text-[#262F85] text-[1.5rem]">
            Orders
            </h1>
            <AreaCharts />
          </div>

          <div className=" bg-white rounded-md shadow-md p-6">
            <h1 className="font-bold mb-4 text-[#262F85] text-[1.5rem]">
            Orders
            </h1>

            <SimpleBarCharts />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardIndex;
