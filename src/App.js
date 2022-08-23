import { Routes, Route, Navigate } from "react-router-dom";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { useContext } from "react";
import Background from "./components/background/background";
import Header from "./components/header/header";
import Vehicle from "./pages/vehicle";
import { Vehicles } from "./data/vehicles";
import ScrollTop from "./components/scroll-top/scrollTop";
import Data from "./context/context";
import Home from "./pages/home";
import Fleet from "./pages/fleet";
import Notes from "./pages/notes";
import References from "./pages/reference";
import Login from "./pages/login";
import LogoutModal from "./components/logout-modal/logoutModal";

Amplify.configure(awsmobile);

const App = () => {
  const { authorised } = useContext(Data);

  return (
    <div className="App">
      <Background />
      <Header />
      <LogoutModal />
      <ScrollTop>
        <main>
          <Routes>
            {authorised && (
              <>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/fleet" element={<Fleet />} />
                <Route exact path="/notes" element={<Notes />} />
                <Route exact path="/references" element={<References />} />
                {Vehicles.map((veh, index) => {
                  return (
                    <Route
                      key={index}
                      exact
                      path={`/${veh.vrn}`}
                      element={<Vehicle data={veh} authed={true} />}
                    />
                  );
                })}
              </>
            )}
            {!authorised && <Route exact path="/login" element={<Login />} />}
            <Route
              path="*"
              element={<Navigate replace to={authorised ? "/" : "/login"} />}
            />
          </Routes>
        </main>
      </ScrollTop>
    </div>
  );
};

export default App;
