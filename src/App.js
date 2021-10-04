import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Notfound from "./Component/Notfound/Notfound";
import Services from "./Component/Services/Services";
export const userContext = createContext();
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="App">
      <userContext.Provider value={{ data }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path = '/'>
              <Home />
            </Route>
            <Route exact path = '/contact'>
            <Contact />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path = '/home'>
              <Home />
            </Route>
            <Route path = '*'>
              <Notfound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
