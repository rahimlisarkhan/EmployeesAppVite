import React from "react";
import { Header } from "../../shared/components/Header";
import UserCard from "../../shared/components/UserCard";
import { Container } from "reactstrap";
import useAxios from "../../shared/hooks/useAxios";
import { getUsers } from "../../services/user";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { data, loading } = useAxios({ requestFn: getUsers });

  const navigate = useNavigate();

  console.log("data", data);

  const users = data?.data;

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="d-flex flex-wrap gap-3 my-5">
            {users?.map((user) => (
              <UserCard
                {...user}
                onClick={() => navigate("/detail/" + user.id)}
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default HomePage;
