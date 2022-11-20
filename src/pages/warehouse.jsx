import React from "react";
import Container from "react-bootstrap/esm/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Testchart from "../charts/test-chart";
import ChartKeys from "../components/chart-keys";

const WareHouse = () => {
  return (
    <Container className="col-md-10 text-light">
      <div className="my-4 text-start mx-3">
        <h1>Warehouse</h1>
        <p>
          View products currently stocked in warehouse and monitor inventory
          level indicators across categories.
        </p>
      </div>
      <div className="my-4 mx-3">
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3 nav-link-color"
          justify
        >
          <Tab eventKey="home" title="Dairy">
            <ChartKeys />
            <Testchart />
          </Tab>
          <Tab eventKey="profile" title="Meat">
            <ChartKeys />
            <Testchart />
          </Tab>
          <Tab eventKey="longer-tab" title="Dry">
            <ChartKeys />
            <Testchart />
          </Tab>
          <Tab eventKey="contact" title="Drinks">
            <ChartKeys />
            <Testchart />
          </Tab>
          <Tab eventKey="toileteries" title="Toileteries">
            <ChartKeys />
            <Testchart />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default WareHouse;
