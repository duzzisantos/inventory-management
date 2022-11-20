import React from "react";
import Badge from 'react-bootstrap/Badge'

const ChartKeys = () => {
    return(
        <div className=" text-start my-3 col-md-4 ">
            <Badge bg="success" className="rounded-0">High</Badge>
            <Badge bg="warning" className="mx-2 rounded-0">Medium</Badge>
            <Badge bg="danger" className="rounded-0">Low</Badge>
        </div>
    )
}

export default ChartKeys