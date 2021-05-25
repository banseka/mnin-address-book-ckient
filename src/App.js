import "./App.css";
import AddressRender from "./components/addressRender/AddressRender";
import Address from "./components/address/Address";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import AddressForm from "./components/addressForm/AddressForm";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/add address" component={AddressForm} />
        <Route path="/address detail" component={AddressRender} />
        <Route path="/address" component={Address} />
      </Switch>
    </Router>
  );
}

export default App;
