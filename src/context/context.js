import { createContext, useState, useEffect } from "react";

const Data = createContext();

export const DataWrapper = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    const getDetails = JSON.parse(localStorage.getItem("RememberLogin"));
    getDetails && setLoginDetails(getDetails);
  }, []);

  useEffect(() => {
    loginDetails.remember
      ? localStorage.setItem("RememberLogin", JSON.stringify(loginDetails))
      : localStorage.clear("RemberLogin");
  }, [loginDetails]);

  //Fetches notes from localStorage
  useEffect(() => {
    const getNotes = JSON.parse(localStorage.getItem("Notes"));
    getNotes && setNotes(getNotes);
  }, []);

  //Sets note data to localStorage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Data.Provider value={{ loginDetails, setLoginDetails, notes, setNotes }}>
      {children}
    </Data.Provider>
  );
};

export default Data;
