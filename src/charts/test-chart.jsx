import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { mockData } from "./mockdata";
const Testchart = () => {
  const assignColorPerLevel = {
    high: "#22bb33",
    medium: "#f0ad4e",
    low: "#bb2124",
  };

  let five = 5;
  if (five === 5) {
    console.log(this);
  }
  return (
    <Container className="col-md-12 d-flex flex-row flex-wrap mx-0 p-5">
      {mockData.map((inventory) => (
        <Card
          key={inventory.id}
          className="rounded-3 col-sm-2 p-5 mx-3 mb-4"
          style={{
            color:
              inventory.stock > 200
                ? assignColorPerLevel.high
                : inventory.stock > 100
                ? assignColorPerLevel.medium
                : assignColorPerLevel.low,
            backgroundColor: "transparent",
            border: "1px solid #787877",
          }}
        >
          <Card.Title>{inventory.name}</Card.Title>
          <p className="fs-3">{inventory.stock}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Testchart;
