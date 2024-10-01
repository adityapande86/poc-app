import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import AppHeader from "./components/organisms/Header/AppHeader";

const Routes = () => {
  return (
    <>
      <AppHeader />
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </>
  );
};
export default Routes;
