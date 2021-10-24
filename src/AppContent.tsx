import { Switch, Route, Redirect } from "react-router-dom";
import AppMessenger from "./AppMessenger";
import Diagnosis from "./views/Diagnosis";
import Home from "./views/Home";
import Register from "./views/Register";

function AppContent() {
  return (
    <div className="AppContent">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/diagnosis" exact component={Diagnosis} />
        <Redirect to="/" />
      </Switch>
      <AppMessenger />
    </div>
  );
}

export default AppContent;
