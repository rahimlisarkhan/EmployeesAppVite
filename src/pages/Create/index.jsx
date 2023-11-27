import React, { useState } from "react";
import { Header } from "../../shared/components/Header";
import {
  Button,
  Container,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";
import Typograph from "../../ui/Typograph";
import { useFormik } from "formik";
import { addUser } from "../../services/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../shared/constant/router";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Must be 2 characters or less";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.phone) {
    errors.phone = "Required";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const CreatePage = () => {
  // const [text,setText] = useState()

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    validate,
    onSubmit: (values) => {
      console.log('"onSubmit', values);
      addPostFetch(values);
      formik.handleReset();
    },
  });

  const addPostFetch = (form) => {
    addUser(form)
      .then((res) => {
        console.log("res", res);
        toast.success("Successfully");
        navigate(ROUTER.HOME);
      })
      .catch((err) => {
        toast.err(err.message);
      });
  };

  console.log('"formik', formik);

  const disableBtn = !!Object.values(formik.errors).length;

  console.log("disableBtn", disableBtn);

  return (
    <>
      {/* <input value={text} onChange={(e)=>setText(e.target.value)} /> */}
      <Header />
      <Container className="py-5">
        <Typograph
          color="gray"
          variant="title5"
          weight="bold"
          className="mb-3"
          align="center"
        >
          Create Form
        </Typograph>
        <form className="w-75 mx-auto" onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              placeholder="Your name"
              size="lg"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <FormText color="danger">{formik.errors.name}</FormText>
            )}
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              placeholder="example@gmail.com"
              size="lg"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <FormText color="danger">{formik.errors.email}</FormText>
            )}
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Input
              placeholder="Street 677"
              size="lg"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            {formik.errors.address && (
              <FormText color="danger">{formik.errors.address}</FormText>
            )}
          </FormGroup>
          <FormGroup>
            <Label>Phone</Label>
            <Input
              placeholder="Your phone number"
              size="lg"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {formik.errors.phone && (
              <FormText color="danger">{formik.errors.phone}</FormText>
            )}
          </FormGroup>
          <Button
            type="submit"
            disabled={disableBtn}
            size="lg"
            color="danger"
            block
          >
            Create
          </Button>
        </form>
      </Container>
      ;
    </>
  );
};

export default CreatePage;
