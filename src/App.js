import "./generic/reset.scss";
import "./generic/variables.scss";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import QuizLeague from "./components/QuizLeague/QuizLeague";
import UsersManager from "./components/UsersManager/UsersManager";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import MobileMenu from "./components/Mobile-menu/MobileMenu";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Header />

            <main>
              <div className="container">
                <QuizLeague />
              </div>
            </main>
          </Route>
        </Switch>
        <Switch>
          <Route path="/adduser">
            <UsersManager />
          </Route>
        </Switch>
        <Switch>
          <Route path="/menu">
            <MobileMenu />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
