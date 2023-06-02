import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import "./App.scss";

const routes = [
  { path: "/", element: <Portfolio />},
  { label: "About", path: "/about", element: <About />},
  { label: "Portfolio", path: "/portfolio", element: <Portfolio />},
  { label: "Contact", path: "/contact", element: <Contact />},
];

function App() {
  const location = useLocation();

  return (
    <>
      <Hero />
      <section className="pages">
      <Navbar currentPath={location.pathname} routes={routes} />
        <SwitchTransition>
          <CSSTransition
            classNames="page"
            timeout={300}
            key={location.key}
            unmountOnExit
          >
            <Routes location={location}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element }
              />
            ))}
            </Routes>
          </CSSTransition>
        </SwitchTransition>
      </section>
    </>
  );
}

export default App;
