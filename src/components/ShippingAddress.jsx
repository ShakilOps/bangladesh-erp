import React from "react";
import AddressFrom from "./address-from/address-form";

const ShippingAddress = ({
  defaultValues,
  billingState,
  handleClick,
  address,
  setState,
}) => {
  return (
    <div style={{ width: "40%" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ marginRight: "10px" }}>Shipping Address</h3>
        <p
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => handleClick(billingState)}
        >
          {" "}
          Click
        </p>
      </div>
      <AddressFrom
        defaultValues={defaultValues}
        address={address}
        setState={setState}
      />
    </div>
  );
};

export default ShippingAddress;
