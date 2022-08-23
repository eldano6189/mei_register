//External imports
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, Suspense, lazy } from "react";
import Amplify from "aws-amplify";

//Data imports
import awsmobile from "./aws-exports";
import { Vehicles } from "./data/vehicles";
import Data from "./context/context";

//Components imports
import Background from "./components/background/background";
import Header from "./components/header/header";
import LogoutModal from "./components/logout-modal/logoutModal";
import ScrollTop from "./components/scroll-top/scrollTop";

//Component imports - code splitting
const Login = lazy(() => import("./pages/login"));
const Home = lazy(() => import("./pages/home"));
const Fleet = lazy(() => import("./pages/fleet"));
const Vehicle = lazy(() => import("./pages/vehicle"));
const Notes = lazy(() => import("./pages/notes"));
const References = lazy(() => import("./pages/reference"));

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
          <Suspense fallback={null}>
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
          </Suspense>
        </main>
      </ScrollTop>
    </div>
  );
};

export default App;
