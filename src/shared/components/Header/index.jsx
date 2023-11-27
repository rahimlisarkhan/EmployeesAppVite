import React from "react";
import { Badge, Button, Navbar, NavbarBrand } from "reactstrap";

import { useGlobalProvider } from "../../store/global/GlobalProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { ROUTER } from "../../constant/router";

export const Header = () => {
  const { state } = useGlobalProvider();

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const users = state.users;

  const isCreatePage = ROUTER.CREATE == pathname;

  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand
          className="d-flex gap-2 align-items-center"
          onClick={() => {
            navigate("/");
          }}
        >
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
          Employees App{" "}
          {!isCreatePage && <Badge color="danger">{users?.length}</Badge>}
        </NavbarBrand>
        <Button
          color="danger"
          size="sm"
          className="d-flex align-items-center gap-1"
          onClick={() => navigate(isCreatePage ? ROUTER.HOME : ROUTER.CREATE)}
        >
          {!isCreatePage ? (
            <>
              Create <IoMdAddCircleOutline />
            </>
          ) : (
            "Dashboard"
          )}
        </Button>
      </Navbar>
    </>
  );
};
