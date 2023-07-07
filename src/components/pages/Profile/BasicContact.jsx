import React from "react";
import { WrapperContact, Column, BlockColumns } from "./Profile.style";
import DetailProfile from "../../DetailProfile";
import { Tittle } from "../../../Global/GeneralComponents";
import EditProfile from "../../EditProfile";
export const ContactDetails = ({tittle, name, lastName, userName, email, phone }) => {
  return (
    <WrapperContact>
      <Tittle>{tittle}</Tittle>
      <BlockColumns>
        <Column>
          <DetailProfile nameParam="First Name" param={name} />
          <DetailProfile nameParam="Username" param={userName} />
          <DetailProfile nameParam="Phone Number" param={phone} />
        </Column>
        <Column>
          <DetailProfile nameParam="Last Name" param={phone} />
          <DetailProfile nameParam="Email Address" param={phone} />
          <DetailProfile nameParam="Phone Number" param={phone} />
        </Column>
      </BlockColumns>
    </WrapperContact>
  );
};
export const Address = ({tittle, presentAddress, permaAddress, country, state, city, zipCode}) => {
  return (
    <WrapperContact>
      <Tittle>{tittle}</Tittle>
      <BlockColumns>
        <Column>
          <DetailProfile nameParam="Present address" param={presentAddress} />
          <DetailProfile nameParam="Permanent address" param={permaAddress} />
          <DetailProfile nameParam="Country" param={country} />
        </Column>
        <Column>
          <DetailProfile nameParam="State" param={state} />
          <DetailProfile nameParam="City" param={city} />
          <DetailProfile nameParam="Zip Code" param={zipCode} />
          <EditProfile nameParam='name'/>
        </Column>
      </BlockColumns>
    </WrapperContact>
  );
}