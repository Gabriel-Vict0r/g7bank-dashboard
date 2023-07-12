import React from "react";
import { WrapperContact, Column, BlockColumns } from "./Profile.style";
import DetailProfile from "../../DetailProfile";
import { Tittle } from "../../../Global/GeneralComponents";
import EditProfile from "../../EditProfile";
import { useContext } from "react";
import { BtnEditProfile } from "../../Contexts/BtnEditProfile";
export const ContactDetails = ({
  tittle,
  name,
  lastName,
  userName,
  email,
  phone,
}) => {
  const { edit } = useContext(BtnEditProfile);
  return (
    <WrapperContact>
      <Tittle>{tittle}</Tittle>
      <BlockColumns>
        <Column>
          {!edit ? (
            <>
              <DetailProfile nameParam="First Name" param={name} />
              <DetailProfile nameParam="Username" param={userName} />
              <DetailProfile nameParam="Phone Number" param={phone} />
            </>
          ) : (
            <>
              <EditProfile nameParam="First Name" />
              <EditProfile nameParam="Username" />
              <EditProfile nameParam="Phone Number" />
            </>
          )}
        </Column>
        <Column>
          {!edit ? (
            <>
              {" "}
              <DetailProfile nameParam="Last Name" param={phone} />
              <DetailProfile nameParam="Email Address" param={phone} />
              <DetailProfile nameParam="Phone Number" param={phone} />
            </>
          ) : (
            <>
              <EditProfile nameParam="Last Name" />
              <EditProfile nameParam="Email Address" />
              <EditProfile nameParam="Phone Number" />
            </>
          )}
        </Column>
      </BlockColumns>
    </WrapperContact>
  );
};
export const Address = ({
  tittle,
  presentAddress,
  permaAddress,
  country,
  state,
  city,
  zipCode,
}) => {
  const { edit } = useContext(BtnEditProfile);
  return (
    <WrapperContact>
      <Tittle>{tittle}</Tittle>
      <BlockColumns>
        <Column>
          {!edit ? (
            <>
              {" "}
              <DetailProfile
                nameParam="Present address"
                param={presentAddress}
              />
              <DetailProfile
                nameParam="Permanent address"
                param={permaAddress}
              />
              <DetailProfile nameParam="Country" param={country} />
            </>
          ) : (
            <>
              <EditProfile nameParam="Present address" />
              <EditProfile nameParam="Permanent address" />
              <EditProfile nameParam="Country" />
            </>
          )}
        </Column>
        <Column>
          {!edit ? (
            <>
              {" "}
              <DetailProfile nameParam="State" param={state} />
              <DetailProfile nameParam="City" param={city} />
              <DetailProfile nameParam="Zip Code" param={zipCode} />
            </>
          ) : (
            <>
              <EditProfile nameParam="State" />
              <EditProfile nameParam="City" />
              <EditProfile nameParam="zip Code" />
            </>
          )}
        </Column>
      </BlockColumns>
    </WrapperContact>
  );
};