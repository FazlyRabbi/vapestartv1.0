import React from "react";
import ShopLayout from "@/components/ShopPage/Layout/Layout";
import Header from "@/components/HomePage/Header";
import MyAccount from "@/components/MyAccount/MyAccount";

function myAccount() {
  return (
    <section>
      <Header />
      <ShopLayout title={`My Account`}>
        <MyAccount />
      </ShopLayout>
      ;
    </section>
  );
}

export default myAccount;
