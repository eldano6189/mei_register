import { createContext, useState } from "react";

const Data = createContext();

export const DataWrapper = ({ children }) => {
  const [authorised, setAuthorised] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    remember: false,
  });

  return (
    <Data.Provider
      value={{
        authorised,
        setAuthorised,
        user,
        setUser,
        changePassword,
        setChangePassword,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default Data;
