import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const UserCard = ({
  name = "User name",
  email = "email@gmail.com",
  phone = "xxx-xx-xxx",
  onClick,
}) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img
        alt="Sample"
        height={250}
        className="object-fit-cover"
        src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
      />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle
          className="mb-2 text-muted d-flex align-items-center gap-2"
          tag="h6"
        >
          <IoMdMail color="gray" size={20} /> {email}
        </CardSubtitle>
        <CardText className="d-flex align-items-center gap-2">
          <FaPhoneAlt color="gray" size={20} /> {phone}
        </CardText>
        <Button color="dark" block onClick={onClick}>
          Detail
        </Button>
      </CardBody>
    </Card>
  );
};

export default UserCard;
