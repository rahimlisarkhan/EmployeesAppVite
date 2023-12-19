import { useCallback, useEffect, useMemo, useState } from "react";
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
import { useMutateAxios } from "../../shared/hooks/useMutateAxios";
import { useQuery } from "react-query";
import { QUERIES } from "../../shared/constant/queries";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  // const { state, dispatch } = useGlobalProvider();

  // const a = useQuery(QUERIES.USER, () => getUsers(params.id));
  // const {
  //   data: users,
  //   isLoading,
  //   isError,
  // } = useQuery(QUERIES.USER, async () => {
  //   const response = await getUsers();
  //   // return response.data;
  //   return response.data.filter((item) => item.id > 100);
  // });

  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
    // remove
  } = useQuery({
    queryKey: QUERIES.USER,
    queryFn: async () => {
      const response = await getUsers();
      // return response.data;
      return response.data.filter((item) => item.id > 100);
    },
    onSuccess: (data) => {
      console.log("data", data);
      // toast.success("Success")
    },
    onError: (err) => {
      console.log("err", err);
      // navigate("/404")
      // toast.error("Error")
    },
    // refetchInterval
    // enabled: false,
    refetchOnReconnect: true,
    refetchInterval: false,
    // refetchInterval: 30000,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });

  // const { loading } = useAxios({
  //   requestFn: getUsers,
  //   onSuccess: (res) => {
  //     dispatch({
  //       type: type.FILL_USERS,
  //       payload: res?.data.filter((item) => item.id > 100),
  //     });
  //   },
  // });

  const { mutate } = useMutateAxios({
    requestFn: rmvUser,
    onSuccess: () => {
      toast.success("Ugurla silindi!!");

      dispatch({ type: type.RMV_USER, payload: currentUser.id });
      setModal(false);
    },
    onError: () => {
      toast.error(err.message);
    },
  });

  const navigate = useNavigate();

  // const users = useMemo(() => state?.users, [state.users]);

  const handleFetchRemove = useCallback(() => {
    mutate(currentUser.id);

    // rmvUser(currentUser.id)
    //   .then(() => {
    //     toast.success("Ugurla silindi!!");

    //     dispatch({ type: type.RMV_USER, payload: currentUser.id });
    //     setModal(false);
    //   })
    //   .catch((err) => {
    //     toast.error(err.message);
    //   });
  }, [currentUser]);

  // useEffect(() => {
  //   // if (filan1 && !filan2) {
  //   refetch();
  //   // }
  // }, []);

  if (isError) {
    return <h1>Error...</h1>;
  }

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
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="d-flex flex-wrap gap-3 my-5">
            {users?.map((user) => (
              <UserCard
                key={user.id}
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
