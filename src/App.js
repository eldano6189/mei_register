import { Routes, Route } from "react-router-dom";
import Background from "./components/background/background";
import Header from "./components/header/header";
import Vehicle from "./pages/vehicle";
import { PageRoutes } from "./data/pageRoutes";
import { Vehicles } from "./data/vehicles";

const App = () => {
  return (
    <div className="App">
      <Background />
      <Header />
      <main>
        <Routes>
          {PageRoutes.map((page, index) => {
            return (
              <Route
                key={index}
                exact
                path={page.path}
                element={page.component}
              />
            );
          })}
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
        </Routes>
      </main>
    </div>
  );
};

export default App;
