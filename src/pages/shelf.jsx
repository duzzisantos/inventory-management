import React from "react";
import Container from "react-bootstrap/esm/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Shelf = () => {
  return (
    <Container className="col-md-10 text-light">
      <div className="my-4 text-start mx-3">
        <h1>Shelf</h1>
        <p>
          View products currently stocked in shelf. Determine when an order has
          to be placed in warehouse.
        </p>
      </div>
      <div className="my-4 mx-3">
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3 nav-link-color"
          justify
        >
          <Tab eventKey="home" title="Dairy"></Tab>
          <Tab eventKey="profile" title="Meat"></Tab>
          <Tab eventKey="longer-tab" title="Dry"></Tab>
          <Tab eventKey="contact" title="Drinks"></Tab>
          <Tab eventKey="toileteries" title="Toileteries"></Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default Shelf;
