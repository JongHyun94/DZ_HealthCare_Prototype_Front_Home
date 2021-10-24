import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppMessenger from "./AppMessenger";
import Diagnosis from "./views/Diagnosis";
import Home from "./views/Home";
import Register from "./views/Register";

function AppContent() {
  const [msgOpen, setMsgOpen] = useState(true);
  const chagneMsgState = () => {
    setMsgOpen(!msgOpen);
  };
  return (
    <div className="AppContent">
      <div className={msgOpen?"PagesOpen" : "PagesClose"}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/diagnosis" exact component={Diagnosis} />
          <Redirect to="/" />
        </Switch>
      </div>
      <AppMessenger msgOpen={msgOpen} chagneMsgState={chagneMsgState}/>
    </div>
  );
}

export default AppContent;
