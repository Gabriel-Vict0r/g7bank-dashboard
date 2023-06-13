import React from "react";
import { WrapperContact } from "./Profile.style";
import DetailProfile from "../../DetailProfile";
import { Title } from "react-admin";
import { Tittle } from "../../../Global/GeneralComponents";
const ContactDetails = ({ name, lastName, userName, email, phone }) => {
    return (
        <WrapperContact>
            <Tittle>Basic & Contact Details</Tittle>
            <DetailProfile nameParam="First Name" param={name}/>
            <DetailProfile nameParam="Username" param={userName}/>
            <DetailProfile nameParam="Phone Number" param={phone}/>
      </WrapperContact>
    );
};

export default ContactDetails;
