import React from "react";
import useStore from "../../store";

const AccountPage = () => {
  const username = useStore((state) => state.username);

  return <div>{username}</div>;
};

export default AccountPage;
