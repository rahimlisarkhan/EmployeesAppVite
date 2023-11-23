import React from "react";
import { Header } from "../../shared/components/Header";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import useAxios from "../../shared/hooks/useAxios";
import { getUserID } from "../../services/user";
import { useNavigate } from "react-router-dom";

import { Button } from "reactstrap";

const Detail = () => {
  const { id } = useParams();

  const { data, loading } = useAxios({ requestFn: () => getUserID(id) });

  const userInfo = data?.data;

  const navigate = useNavigate();

  console.log("userInfo", userInfo);

  return (
    <>
      <Header />
      <Container>
        <div className="d-flex gap-5 my-5">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <div className="w-25">
                <img
                  className="img-fluid"
                  src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                />
                <Button
                  size="lg"
                  color="dark"
                  block
                  onClick={() => navigate("setting")}
                >
                  Setting
                </Button>
              </div>
              <div className="w-75">
                <p className="h1">{userInfo?.name}</p>
                <p className="h2">{userInfo?.email}</p>
                <p className="h4">{userInfo?.phone}</p>
                <p className="h4">{userInfo?.website}</p>

                <hr />
                <h2>Address:</h2>
                <p className="h4">{userInfo?.address.city}</p>
                <p className="h4">{userInfo?.address.street}</p>
                <p className="h4">{userInfo?.address.suite}</p>

                <hr />
                <h2>Company:</h2>
                <p className="h4">{userInfo?.company.name}</p>
                <p className="h4">{userInfo?.company.catchPhrase}</p>
                <p className="h4">{userInfo?.company.name}</p>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Detail;
