import React from "react";
// import { Container } from "react-bootstrap/lib/Tab";
// import { Container } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to LiveAuction</h1>;
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
