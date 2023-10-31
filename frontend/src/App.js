import React from "react";
// import { Container } from "react-bootstrap/lib/Tab";
// import { Container } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* <HomeScreen /> */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
