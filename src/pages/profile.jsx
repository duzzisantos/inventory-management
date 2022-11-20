import React from "react";
import {
  PersonCircle,
  Diagram2,
  GearFill,
  PersonHeart,
  Activity,
} from "react-bootstrap-icons";
import Container from "react-bootstrap/esm/Container";

//When the data is ready, render this dynamically
const Profile = () => {
  return (
    <Container className="col-md-10 text-light text-start">
      <div className="my-4 text-start mx-3">
        <h1>Profile</h1>
        <p>Username, this is where you view your profile.</p>
      </div>
      <hr />
      <div className="col-md-10 my-4 mx-3 mb-5">
        <strong>
          <p>
            <PersonCircle /> Full name
          </p>
        </strong>
        <p>John Doe</p>
        <hr />
        <strong>
          <p>
            <GearFill /> Role
          </p>
        </strong>
        <p>Inventory specialist</p>
        <hr />
        <strong>
          <p>
            <Diagram2 /> Reports to
          </p>
        </strong>
        <p>Joane Smith</p>
        <hr />
        <strong>
          <p>
            <PersonHeart /> Alias
          </p>
        </strong>
        <p>johndeere92</p>
        <hr />
        <strong>
          <p>
            <Activity /> Latest activities
          </p>
        </strong>
        <ol className="text-info">
          <li className="d-flex flex-row">Lorem - {"{Insert date}"}</li>
          <li className="d-flex flex-row">Ipsum - {"{Insert date}"}</li>
          <li className="d-flex flex-row">Dolor - {"{Insert date}"}</li>
          <li className="d-flex flex-row">Escit - {"{Insert date}"}</li>
        </ol>
        <hr />
      </div>
    </Container>
  );
};

export default Profile;
