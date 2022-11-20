import React from "react";

import { Container } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container
          fluid
          className="bg-light col-md-12 d-flex flex-row mb-0 align-items-center justify-content-center text-success"
        >
          <h1 className="fs-5 text-success">
            <EmojiFrown /> It looks like something went wrong
          </h1>
          <p className="text-success">Check the URL address and try again.</p>
        </Container>
      );
    }
    return this.props.children;
  }
}
