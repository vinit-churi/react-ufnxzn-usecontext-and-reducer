import React, { useContext } from "react";
import { UserContext, DeviceContext } from "./App";

const CompC = () => {
  const device = useContext(DeviceContext);
  const user = useContext(UserContext);
  return (
    <>
      hi this is CompC {user} - {device}
    </>
  );
};

export default CompC;
