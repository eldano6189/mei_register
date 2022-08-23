//External imports
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTop = ({ children }) => {
  const location = useLocation();

  //Component useEffects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollTop;
