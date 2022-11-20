import React from "react";
import "bootstrap";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="col-md-2 bg-white py-2 shadow-sm border rounded-0">
      <div className="mx-3 my-4 d-flex flex-column lh-lg">
        <NavLink
          to={"profile"}
          className="text-start text-decoration-none text-secondary"
        >
          Profile
        </NavLink>
      </div>
      <div className="mx-3 my-4 d-flex flex-column lh-lg">
        <NavLink
          to={"activity"}
          className="text-start text-decoration-none text-secondary"
        >
          Operation logs
        </NavLink>
      </div>
      <div className="mx-3 my-4 d-flex flex-column lh-lg">
        <NavLink
          to={"purchase"}
          className="text-start text-decoration-none text-secondary"
        >
          Purchase request
        </NavLink>
      </div>
      <div className="mx-3 my-4 d-flex flex-column lh-lg">
        <NavLink
          to={"requisition"}
          className="text-start text-decoration-none text-secondary"
        >
          Internal requisitions
        </NavLink>
      </div>
      <div className="mx-3 my-4 d-flex flex-column lh-lg">
        <NavLink
          to={"messages"}
          className="text-start text-decoration-none text-secondary"
        >
          Send message
        </NavLink>
      </div>

      <div className="mx-3 my-4 d-flex flex-column lh-lg">
        <NavLink
          to={"team"}
          className="text-start text-decoration-none text-secondary"
        >
          Team
        </NavLink>
      </div>
      <div className="mx-3 my-4 d-flex flex-column lh-lg">
        <NavLink
          to={"prices"}
          className="text-start text-decoration-none text-secondary"
        >
          Prices
        </NavLink>
      </div>
      <div className="mx-3 my-4 d-flex flex-column lh-lg">
        <NavLink
          to={"settings"}
          className="text-start text-decoration-none text-secondary"
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
