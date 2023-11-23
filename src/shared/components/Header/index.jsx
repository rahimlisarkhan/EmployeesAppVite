import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import Logo from "../../../assets/react.svg";

export const Header = () => {
  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="d-flex gap-2 align-items-center">
          <img
            alt="logo"
            className="rounded-circle object-fil-cover"
            src={
              "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
            }
            style={{
              height: 45,
              width: 45,
            }}
          />
          Employees App
        </NavbarBrand>
      </Navbar>
    </>
  );
};
