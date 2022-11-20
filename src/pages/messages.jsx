import React from "react";
import Container from "react-bootstrap/esm/Container";
import {
  Envelope,
  PersonCircle,
  PencilFill,
  SendFill,
} from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const Messages = () => {
  return (
    <Container className="col-md-10 text-light">
      <div className="my-4 text-start mx-3">
        <h1>Send message</h1>
        <p>Exchange messages with colleagues and external stakeholders</p>
      </div>
      <div className="my-4 mx-3 col-md-6 text-start">
        <form>
          <div className="mb-3">
            <label htmlFor="emailRecipient" className="form-label">
              <PersonCircle /> Recipient
              <span className="text-secondary mx-3">eg: john.doe@mail.com</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="emailRecipient"
              aria-describedby="emailRecipient"
            />
            <hr />
            <label htmlFor="emailSubject" className="form-label">
              <PencilFill /> Subject
              <span className="text-secondary mx-3">
                eg: Request to deliver items
              </span>
            </label>
            <input
              type="text"
              className="form-control"
              id="emailSubject"
              aria-describedby="emailSubject"
            />
            <hr />
            <label htmlFor="emailBody" className="form-label">
              <Envelope /> Message
              <span className="text-warning mx-3">N/B: Do not leave empty</span>
            </label>
            <textarea
              type="text"
              className="form-control"
              id="emailBody"
              aria-describedby="emailBody"
            />
            <Button className="btn btn-success mt-3 mb-3">
              Send <SendFill />{" "}
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Messages;
