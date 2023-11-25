import React from "react";
import { Badge, Navbar, NavbarBrand } from "reactstrap";

import { useGlobalProvider } from "../../store/global/GlobalProvider";

export const Header = () => {
  const { state } = useGlobalProvider();

  const users = state.users;

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
          Employees App <Badge color="danger">{users?.length}</Badge>
        </NavbarBrand>
      </Navbar>
    </>
  );
};
