import { useState } from "react";
import ShippingAddress from "./components/ShippingAddress";
import BillingAddress from "./components/billing-address";
import "./style/input.css";

function App() {
  const [state, setState] = useState({
    billingAddress: {},
    shippingAddress: {},
  });
  const handleClick = (data) => {
    setState((prevState) => ({ ...prevState, shippingAddress: data }));
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <BillingAddress
          setState={setState}
          address={1}
          billingAddress={state.billingAddress}
        />
        <ShippingAddress
          handleClick={handleClick}
          billingState={state.billingAddress}
          defaultValues={state.shippingAddress}
          setState={setState}
          address={2}
        />
      </div>
    </div>
  );
}

export default App;
