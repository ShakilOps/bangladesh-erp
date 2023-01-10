import React from "react";
import AddressFrom from "./address-from/address-form";

const BillingAddress = ({ setState, billingAddress, address }) => {
  return (
    <div style={{ width: "40%" }}>
      <h3>Billing Address</h3>
      <AddressFrom
        setState={setState}
        billingAddress={billingAddress}
        address={address}
      />
    </div>
  );
};

export default BillingAddress;
