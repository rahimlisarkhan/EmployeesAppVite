import { useState } from "react";

export const useMutateAxios = ({ requestFn, onSuccess, onError }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const mutate = (form) => {
    setLoading(true);

    requestFn(form)
      .then((res) => {
        setData(res);
        onSuccess?.(res);
      })
      .catch((err) => {
        setError(err);
        onError?.(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { mutate, loading, error, data };
};
