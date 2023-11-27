import React, { useCallback, useMemo, useState } from "react";
import { Header } from "../../shared/components/Header";
import UserCard from "../../shared/components/UserCard";
import { Container } from "reactstrap";
import useAxios from "../../shared/hooks/useAxios";
import { getUsers, rmvUser } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { useGlobalProvider } from "../../shared/store/global/GlobalProvider";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { GLOBAL_PROVIDER_TYPE as type } from "../../shared/store/global/type";
import { toast } from "react-toastify";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const { state, dispatch } = useGlobalProvider();

  const { loading } = useAxios({
    requestFn: getUsers,
    onSuccess: (res) => {
      dispatch({
        type: type.FILL_USERS,
        payload: res?.data.filter((item) => item.id > 100),
      });
    },
  });

  const navigate = useNavigate();

  const users = useMemo(() => state?.users, [state.users]);

  console.log("users", users);

  const handleFetchRemove = useCallback(() => {
    rmvUser(currentUser.id)
      .then(() => {
        toast.success("Ugurla silindi!!");

        dispatch({ type: type.RMV_USER, payload: currentUser.id });
        setModal(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [currentUser]);

  return (
    <>
      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader toggle={() => setModal(false)}>
          Bu {currentUser?.name} useri silmeye eminsinizmi?
        </ModalHeader>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              handleFetchRemove();
            }}
          >
            Tesdiqle
          </Button>{" "}
          <Button color="secondary" onClick={() => setModal(false)}>
            Geri
          </Button>
        </ModalFooter>
      </Modal>
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
                onRemove={
                  () => {
                    setModal(true);
                    setCurrentUser(user);
                  }
                  // dispatch({ type: type.RMV_USER, payload: user.id })
                }
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default HomePage;
