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
import { isValidEmail, isValidPhone } from "../../shared/utils/validRegex";

import moment from "moment";
import { useMutateAxios } from "../../shared/hooks/useMutateAxios";
import { useMutation, useQueryClient } from "react-query";
import { QUERIES } from "../../shared/constant/queries";

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
  } else if (!isValidPhone(values.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const CreatePage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: addUser,
    onSuccess: (res) => {
      console.log("res", res);
      queryClient.invalidateQueries(QUERIES.USER);

      // const users = queryClient.getQueryData(QUERIES.USER)
      // const newUsers = [res.data, ...users]
      // queryClient.setQueryData(QUERIES.USER,newUsers)

      toast.success("Successfully");
      formik.handleReset();
      navigate(ROUTER.HOME);
    },
    onError: () => {
      toast.err(err.message);
    },
  });

  // const { mutate, loading } = useMutateAxios({
  //   requestFn: addUser,
  //   onSuccess: () => {
  //     toast.success("Successfully");
  //     formik.handleReset();
  //     navigate(ROUTER.HOME);
  //   },
  //   onError: () => {
  //     toast.err(err.message);
  //   },
  // });

  // const [loading, setLoading] = useState(false);

  const createDate = moment().valueOf();

  const formik = useFormik({
    initialValues: {
      name: "",
      img_url: "",
      phone: "",
      email: "",
      address: "",
      create_at: createDate,
    },
    validate,
    onSubmit: (values) => {
      console.log('"onSubmit', values);

      mutate(values);
      // addPostFetch(values);
    },
  });

  // const addPostFetch = (form) => {
  //   form.create_at = createDate;

  //   setLoading(true);

  //   addUser(form)
  //     .then((res) => {
  //       console.log("res", res);
  //       toast.success("Successfully");
  //       formik.handleReset();
  //       navigate(ROUTER.HOME);
  //     })
  //     .catch((err) => {
  //       toast.err(err.message);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });

  // };

  const disableBtn = !!Object.values(formik.errors).length;

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
            <Label>Profile image:</Label>
            <Input
              placeholder="Your image"
              size="lg"
              name="img_url"
              value={formik.values.img_url}
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
            disabled={disableBtn || isLoading}
            size="lg"
            color="danger"
            block
          >
            {isLoading ? "Loading..." : "Create"}
          </Button>
        </form>
      </Container>
      ;
    </>
  );
};

export default CreatePage;

// const group = {
//   name: "Besteller Izzet Colors",
//   colors: [
//     { name: "Color Name", color: "#fsfsfs" },
//     { name: "Color Name", color: "#fsfsfs" },
//     { name: "Color Name", color: "#fsfsfs" },
//     { name: "Color Name", color: "#fsfsfs" },
//     { name: "Color Name", color: "#fsfsfs" },
//     { name: "Color Name", color: "#fsfsfs" },
//   ],
// };

// const onCopyFrame = (value) => {
//   toast.success('Copied!');
//   navigator.clipboard.writeText(value);
// };
