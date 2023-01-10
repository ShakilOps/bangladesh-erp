import React, { useState } from "react";
import division from "../../../db/bd-division.json";
import union from "../../../db/bd-postcode.json";
import district from "../../../db/db-district.json";
import upazilla from "../../../db/db-upazilla.json";
import InputField from "../ui/input-field";
import Select from "../ui/select-field";
const AddressFrom = ({ setState, defaultValues, billingAddress, address }) => {
  const [formState, setFormState] = useState({
    division: division.divisions,
    district: district.districts,
    city: upazilla.upazilas,
    union: union.upazilas,
  });
  const onChange = (value, name) => {
    setState((prevState) => ({
      ...prevState,
      [address === 1 ? "billingAddress" : "shippingAddress"]: {
        ...prevState[address === 1 ? "billingAddress" : "shippingAddress"],
        [name]: value,
      },
    }));
    console.log(name, value);
    switch (name) {
      case "division":
        setFormState({
          ...formState,
          district: district?.districts?.filter(
            (data) => data.division_id == value
          ),
          city: [],
          union: [],
        });
        break;
      case "district":
        setFormState({
          ...formState,
          city: upazilla.upazilas.filter((data) => data.district_id == value),
          union: [],
        });
        break;
      case "city":
        setFormState({
          ...formState,
          union: union.upazilas.filter((data) => data.district_id == value),
        });
        break;
      default:
        break;
    }
  };
  const options = [
    {
      id: 1,
      name: "Bangladesh",
    },
  ];
  console.log(formState);
  return (
    <>
      <div>
        <InputField
          placeholder={"Enter person/site name"}
          className="input"
          onChange={onChange}
          name="attention"
          label={"Attention"}
          value={defaultValues?.attention}
        />

        <Select
          onChange={onChange}
          options={options}
          className="input"
          name="country"
          label="Country"
          defaultValue={defaultValues?.country}
        />

        <Select
          onChange={onChange}
          options={formState?.division}
          className="input"
          name="division"
          label="Division/Province/State"
          defaultValue={defaultValues?.division}
          disabled={
            address === 1 ? !billingAddress?.country : !defaultValues.country
          }
        />

        <Select
          onChange={onChange}
          options={formState.district}
          className="input"
          name="district"
          label="District"
          defaultValue={defaultValues?.district}
          disabled={
            address === 1 ? !billingAddress?.division : !defaultValues?.division
          }
        />

        <Select
          onChange={onChange}
          options={formState.city}
          className="input"
          label="City/Sub district/Thana"
          name="city"
          defaultValue={defaultValues?.city}
          disabled={
            address === 1 ? !billingAddress?.district : !defaultValues?.district
          }
        />

        <Select
          onChange={onChange}
          options={formState.union}
          className="input"
          label="Union/Area/Town"
          name="union"
          defaultValue={defaultValues?.union}
          disabled={
            address === 1 ? !billingAddress?.city : !defaultValues?.city
          }
        />

        <Select
          onChange={onChange}
          options={options}
          className="input"
          label="Zipcode"
          name="zipcode"
          defaultValue={defaultValues?.zipcode}
          disabled={
            address === 1 ? !billingAddress?.union : !defaultValues?.union
          }
        />

        <Select
          onChange={onChange}
          options={options}
          className="input"
          label="Street Address/Village"
          name="street"
          defaultValue={defaultValues?.street}
          disabled={
            address === 1 ? !billingAddress?.zipcode : !defaultValues?.zipcode
          }
        />

        <InputField
          placeholder={"Enter apartment no"}
          className="input"
          onChange={onChange}
          name="house"
          label={"House/Suite/apartment no:"}
          value={defaultValues?.house ?? ""}
        />

        <InputField
          placeholder={"Enter phone"}
          className="input"
          onChange={onChange}
          name="phone"
          label={"Phone"}
          value={defaultValues?.phone ?? ""}
        />

        <InputField
          placeholder={"Enter fax"}
          className="input"
          onChange={onChange}
          name="fax"
          label={"Fax"}
          value={defaultValues?.fax ?? ""}
        />
      </div>
    </>
  );
};

export default AddressFrom;
