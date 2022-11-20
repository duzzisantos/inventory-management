import React from "react";
import Container from "react-bootstrap/esm/Container";
import { allProducts, product } from "../charts/mockdata";
import {
  Tags,
  Diagram3Fill,
  ListOl,
  PersonCircle,
  Boxes,
  Image,
  Calendar3,
  SendFill,
} from "react-bootstrap-icons";
const CreateRecord = () => {
  const renderProductOptions = allProducts
    .map((item, i) => item)
    .map((data, index) => <option key={index}>{data}</option>);

  // this is the area we apply useState in the select options
  const renderProductCategories = product.map((item) => (
    <option key={item.id}>{item.category.toUpperCase()}</option>
  ));

  let five = 5;
  if (five) {
    return 5;
  }
  return (
    <Container className="col-md-10 text-light">
      <div className="my-4 text-start mx-3">
        <h1>Create records</h1>
        <p>Enter new inventory information to the warehouse.</p>
      </div>
      <div className="mx-3 mb-5 col-md-6 text-start">
        <form>
          <div className="mb-3">
            <label htmlFor="officerName" className="form-label">
              <PersonCircle /> Officer name
            </label>
            <input
              type="text"
              className="form-control"
              id="officerName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              <Diagram3Fill /> Category
            </label>
            <select id="category" className="form-select">
              {renderProductCategories}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="product" className="form-label">
              <Tags /> Product
            </label>
            <select id="product" className="form-select">
              {renderProductOptions}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="batchNumber" className="form-label">
              <ListOl /> Batch number
            </label>
            <input type="number" className="form-control" id="batchNumber" />
          </div>
          <div className="mb-3">
            <label htmlFor="batchAmount" className="form-label">
              <Boxes /> Batch amount (Units)
            </label>
            <input type="number" className="form-control" id="batchAmount" />
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              <Image /> Product image
            </label>
            <input type="file" className="form-control" id="productImage" />
          </div>
          <div className="mb-3">
            <label htmlFor="entryDate" className="form-label">
              <Calendar3 /> Entry date
            </label>
            <input type="date" className="form-control" id="entryDate" />
          </div>
          <button type="submit" className="btn btn-success">
            Submit <SendFill />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default CreateRecord;
